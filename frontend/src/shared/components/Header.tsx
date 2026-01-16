import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/products", label: "Productos" },
  { to: "/register", label: "Registro" },
];

export function HeaderHome() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Prueba Técnica - Frontend
        </h1>
        <nav className="flex gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
