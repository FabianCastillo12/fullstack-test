import { useState } from "react";
import type { User, UserFormErrors } from "../types/user";

type FormState = {
  values: User;
  errors: UserFormErrors;
  isSubmitting: boolean;
};

const initialValues: User = {
  name: "",
  email: "",
  age: 0,
};

function validate(values: User): UserFormErrors {
  const errors: UserFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "El nombre es obligatorio";
  } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(values.name)) {
    errors.name = "El nombre solo puede contener letras";
  }

  if (!values.email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "El email no es válido";
  }

  if (!values.age || values.age <= 0) {
    errors.age = "La edad es obligatoria";
  } else if (values.age < 18) {
    errors.age = "Debes ser mayor de 18 años";
  }

  return errors;
}

export function useForm(onSubmit: (values: User) => void) {
  const [state, setState] = useState<FormState>({
    values: initialValues,
    errors: {},
    isSubmitting: false,
  });

  const handleChange = (field: keyof User, value: string | number) => {
    const newValues = { ...state.values, [field]: value };
    const errors = validate(newValues);

    setState((prev) => ({
      ...prev,
      values: newValues,
      errors: { ...prev.errors, [field]: errors[field] },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(state.values);

    if (Object.keys(errors).length > 0) {
      setState((prev) => ({ ...prev, errors }));
      return;
    }

    setState((prev) => ({ ...prev, isSubmitting: true }));
    onSubmit(state.values);
    setState({ values: initialValues, errors: {}, isSubmitting: false });
  };

  return {
    values: state.values,
    errors: state.errors,
    isSubmitting: state.isSubmitting,
    handleChange,
    handleSubmit,
  };
}
