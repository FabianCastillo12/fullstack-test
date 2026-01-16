import UserForm from "../app/users/components/UserForm";
import type { User } from "../app/users/types/user";

export default function RegisterPage() {
  const handleSubmit = (user: User) => {
    console.log("Usuario registrado:", user);
    alert(`Usuario ${user.name} registrado exitosamente!`);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Registro de Usuario
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <UserForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
