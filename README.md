# Fullstack Test

Proyecto de prueba técnica con **Frontend React** y **Backend NestJS**.

## Estructura

```
fullstack-test/
├── frontend/     # React + TypeScript + Vite
└── backend/      # NestJS + TypeORM + PostgreSQL
```

## Backend

### Requisitos

- Node.js 18+
- PostgreSQL

### Instalación

```bash
cd backend
npm install
```

### Configuración

Editar `src/app.module.ts` con tus credenciales de PostgreSQL:

```typescript
username: 'tu_usuario',
password: 'tu_contraseña',
database: 'examen_db',
```

### Ejecución

```bash
npm run start:dev
```

### Endpoints

| Tipo    | URL                           | Descripción        |
| ------- | ----------------------------- | ------------------ |
| REST    | http://localhost:3000/api     | Swagger UI         |
| GraphQL | http://localhost:3000/graphql | GraphQL Playground |

## Frontend

### Instalación

```bash
cd frontend
npm install
npm run dev
```

### URL

http://localhost:5173

## Tecnologías

- **Frontend**: React, TypeScript, Vite
- **Backend**: NestJS, TypeORM, PostgreSQL
- **API**: REST + GraphQL
