# Proyecto Fullstack (Frontend + Backend)

Este repositorio contiene una aplicación fullstack separada en **frontend** y **backend**. A continuación, se describen los pasos para inicializar ambas partes, la estructura del proyecto y algunas guías útiles para el desarrollo.

---

## **Tabla de Contenidos**
- [Instalación del Frontend](#instalación-del-frontend)
- [Instalación del Backend](#instalación-del-backend)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
- [Recursos Adicionales](#recursos-adicionales)

---

## **Instalación del Frontend**

El frontend está desarrollado con **Vite (React)**, **TailwindCSS**, **DaisyUI**, y **Axios**.

### **Pasos de Instalación**
1. Navega al directorio `frontend`:
   ```bash
   cd frontend

2. Instala las dependencias del proyecto: `frontend`:
   ```bash
   npm install
   
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   
4. Accede a la aplicación en tu navegador:
    ```bash
    Disponible en http://localhost:5173/ por defecto.

## **Instalación del Backend** 
El backend está desarrollado con **Node.js**, **Express**, y usa **MySQL** como base de datos.

Pasos de Instalación
Navega al directorio backend:

1. Navega al directorio `backend`:
   ```bash
   cd backend

2. Instala las dependencias del proyecto:
    ```bash
    npm install


3. Configura el archivo .env:
    ```bash
    Creá un archivo .env en el directorio raíz del backend con las siguientes variables:
    
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=tu_password
    DB_NAME=nombre_base_datos
    PORT=5000

4. Inicializa la base de datos (si es necesario):
    ```bash
    Hay que tener instalado XAMPP (o algún progama así), inicializarlo, y usar los datos correctos para el .env

5. Inicia el servidor backend:
     ```bash
     npm start
     El backend estará disponible en http://localhost:5000.


## Estructura del Proyecto ##

### Frontend ###
La estructura del frontend sigue un patrón modular, organizado por funcionalidades. Acá está un ejemplo de cómo está estructurado:


   ```
   frontend/
    ├── src
    │   ├── assets             # Imágenes, fuentes, etc.
    │   ├── components
    │   │   └── Funcionalidad
    │   │       └── Nombre_Del_Componente.jsx  # Componentes específicos por funcionalidad
    │   ├── utils              # Funciones reutilizables y utilidades
    │   ├── App.jsx            # Componente principal
    │   └── main.jsx           # Punto de entrada de la aplicación
    ├── package.json
    └── vite.config.js         # Configuración de Vite

```


- **assets/**: Contiene imágenes, íconos, fuentes y otros recursos estáticos.
- **components/Funcionalidad/Componente.jsx**: Cada funcionalidad tiene su propia carpeta con componentes relacionados.
- **utils/**: Funciones reutilizables, como llamadas a APIs o manipulaciones de datos. Para evitar repetir código.

## Backend ##
El backend está organizado en controladores, rutas y modelos para un mejor manejo de la lógica y la interacción con la base de datos:

    
    backend/
    ├── controllers        # Controladores que contienen la lógica de negocio
    ├── models             # Modelos y consultas a la base de datos
    ├── routes             # Definición de las rutas de la API
    ├── .env               # Variables de entorno
    ├── index.js           # Punto de entrada del servidor
    └── package.json


- **controllers/**: Contiene la lógica del backend, cada archivo maneja una(s) funcionalidad(es) específica(s).
- **models/**: Define la interacción con la base de datos, incluyendo esquemas y consultas.
- **routes/**: Define las rutas de la API que el servidor expone. (Por ejemplo en api.js ya está definido /)


## Dependencias ##
### Frontend ###
- **Vite**: Un compilador rápido para React.
- **React**: Librería principal para la interfaz de usuario.
- **TailwindCSS**: Framework de utilidades CSS.
- **DaisyUI**: Componentes preconstruidos sobre TailwindCSS para un desarrollo rápido.
- **Axios**: Cliente HTTP para manejar las solicitudes al backend.

### Backend ###
- **Node.js**: Entorno de ejecución del backend.
- **Express**: Framework de backend minimalista para Node.js.
- **MySQL**: Base de datos relacional usada para almacenar los datos.
- **cors**: Middleware para habilitar CORS.
- **helmet**: Middleware de seguridad para Express.
- **dotenv**: Para cargar variables de entorno desde un archivo .env.

## Documentación a consultar ## 

- [Documentación de **React**](https://react.dev/learn)
- [Documentación de **TailwindCSS**](https://tailwindcss.com/docs/utility-first)
- [Documentación de **DaisyUI**](https://daisyui.com/)
- [Documentación de **Express**](https://expressjs.com/en/starter/installing.html)

## Iconos ##
[Iconos de Lucide-React (están buenísimos)](https://lucide.dev/icons/)



Creo que eso es todo, o lo más importante! 🙏🏻

