# Prueba Técnica - Frontend

Este proyecto contiene las soluciones a las preguntas prácticas de la prueba técnica.

## Estructura del Proyecto

```
src/
├── app/                            # Lógica de negocio por features
│   ├── products/                   # Feature: Catálogo de productos
│   │   ├── components/             # Componentes de productos
│   │   ├── hooks/                  # Custom hooks (useProducts)
│   │   ├── api/                    # API calls
│   │   └── types/                  # TypeScript types
│   └── users/                      # Feature: Gestión de usuarios
│       ├── components/             # Componentes de usuarios
│       ├── hooks/                  # Custom hooks (useForm)
│       └── types/                  # TypeScript types
│
├── shared/                         # Código compartido
│   ├── components/                 # Componentes reutilizables
│   └── types/                      # Types comunes
│
├── pages/                          # Páginas/Rutas
│   ├── HomePage.tsx                # Página de inicio
│   ├── ProductsPage.tsx            # Página de productos
│   └── RegisterPage.tsx            # Página de registro
│
├── App.tsx                         # Configuración de rutas
├── main.tsx                        # Entry point
└── index.css                       # Estilos globales (Tailwind)
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Rutas disponibles

- `/` - Página de inicio
- `/products` - Catálogo de productos con paginación y búsqueda
- `/register` - Formulario de registro de usuarios
