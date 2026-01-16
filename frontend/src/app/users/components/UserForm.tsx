import { useForm } from "../hooks/useForm";
import FormField from "./FormField";
import type { User } from "../types/user";

type UserFormProps = {
  onSubmit: (user: User) => void;
};

export default function UserForm({ onSubmit }: UserFormProps) {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Nombre"
        name="name"
        value={values.name}
        error={errors.name}
        onChange={(v) => handleChange("name", v)}
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(v) => handleChange("email", v)}
      />

      <FormField
        label="Edad"
        name="age"
        type="number"
        value={values.age || ""}
        error={errors.age}
        onChange={(v) => handleChange("age", v)}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? "Registrando..." : "Registrar"}
      </button>
    </form>
  );
}
