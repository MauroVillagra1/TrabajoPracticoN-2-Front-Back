# Proyecto TP2 Programación Web: Gestión de Alumnos

---

Este proyecto implementa un **sistema de gestión de alumnos** desarrollado como una aplicación de **frontend en React** y un **backend en Express** con **Sequelize** para la interacción con una base de datos MySQL.

## Descripción del Proyecto

La aplicación permite gestionar un registro de alumnos con operaciones de visualización, alta y eliminación. Las principales funcionalidades incluyen:

- **Página de Inicio**: Una página principal que muestra un resumen del módulo de alumnos.
- **Página de Alumnos**: Visualización en una tabla de los alumnos registrados, con opciones de búsqueda, paginación y eliminación.
- **Página de Alta de Alumnos**: Un formulario para agregar nuevos estudiantes, que incluye validaciones en los campos requeridos (nombre, apellido, DNI, y correo electrónico).

Cada página sigue un diseño de interfaz consistente, incluyendo un **menú de navegación vertical** y una **cabecera estilizada**. El sistema utiliza **React Bootstrap** para componentes visuales, **react-hook-form** para validaciones de formularios, y **SweetAlert2** para alertas y notificaciones.

---

## Dependencias

Para ejecutar este proyecto, las siguientes dependencias deben estar instaladas en el **frontend** y el **backend**.

### **Frontend** (React)

Las dependencias necesarias para la aplicación frontend en **React** son:

- `react`: Framework principal de la aplicación frontend.
- `react-dom`: Herramienta de React para manipular el DOM.
- `react-bootstrap`: Biblioteca de componentes estilizados para una interfaz más rápida y estética.
- `bootstrap`: Sistema de diseño para la interfaz.
- `react-router-dom`: Para manejar la navegación entre las diferentes páginas.
- `react-hook-form`: Librería para manejar formularios y validaciones.
- `sweetalert2`: Para mostrar alertas y notificaciones interactivas al usuario.
- `sweetalert2-react-content`: Integración de SweetAlert2 en React.

### **Backend** (Express)

Las dependencias necesarias para el servidor backend en **Express** son:

- `express`: Framework principal del servidor backend.
- `sequelize`: ORM para gestionar la base de datos MySQL.
- `mysql2`: Driver necesario para que Sequelize funcione con MySQL.
- `dotenv`: Para gestionar variables de entorno y configuraciones sensibles.
- `jsonwebtoken`: Para el manejo de autenticación mediante tokens JWT.
- `cookie-parser`: Para analizar cookies en las solicitudes HTTP.
- `morgan`: Para registrar las solicitudes HTTP.

### **Desarrollo y Configuración**

Herramientas de desarrollo:

- `ESLint`: Para mantener un código limpio y bien estructurado.
- `Vite`: Para la creación y el manejo rápido de la aplicación en el entorno de desarrollo.


### **1. Instalación de dependencias**

1. Instala las dependencias del Front
   ```bash
   npm install react react-dom react-bootstrap bootstrap react-router-dom react-hook-form sweetalert2 sweetalert2-react-content
2. Instala las dependencias del Back
   ```bash
   npm install express sequelize mysql2 dotenv jsonwebtoken cookie-parser morgan

