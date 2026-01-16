type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "number";
  value: string | number;
  error?: string;
  onChange: (value: string | number) => void;
};

export default function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) =>
          onChange(type === "number" ? Number(e.target.value) : e.target.value)
        }
        className={`w-full px-3 py-2 border rounded-lg outline-none transition-colors ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-500"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
