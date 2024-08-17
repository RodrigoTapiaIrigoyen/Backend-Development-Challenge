# Proyecto Backend - Servicio RESTful

Este repositorio contiene la implementación de un servicio RESTful utilizando Node.js, Express, MongoDB y JWT.

## Características

- **Usuarios:** Registro de nuevos usuarios y autenticación mediante JWT.
- **Posts:** CRUD de posts, incluyendo filtrado por título.
- **Autenticación:** Protección de rutas utilizando JSON Web Tokens (JWT).
- **Arquitectura Limpia:** Separación clara entre controladores, modelos y rutas.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB y Mongoose
- JWT (Json Web Tokens)
- Bcryptjs
- Dotenv
- Http-errors

## Requisitos Previos

- Node.js (versión 12 o superior)
- MongoDB (utilizando MongoDB Atlas)
- NPM (Node Package Manager)

## Instalación

1. **Clona el repositorio:**

   ```bash
   1 git clone git@github.com:Satanasrt/Backend-Development-Challenge.git

   2 Instala las dependencias con:  npm install
   3 Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:
   . PORT = 5000
   MONGO_URI=mongodb+srv://rodrigotapia33:Roycid10@backend1.aptf2.mongodb.net/blogDatabase?retryWrites=true&w=majority
   .JWT_SECRET=your_jwt_secret
   ```

4 Inicia el servidor : npm run dev

## Instrucciones para Thunder Client

. Ver posts: Realiza una solicitud GET a http://localhost:5000/posts.

. Crear un usuario: Realiza una solicitud POST a http://localhost:5000/user con el body necesario.
{
"name": "Rodrigo Tapia",
"profilePic": "url_del_perfil",
"email": "rodrigo@example.com",
"password": "contraseña"
}

. Iniciar sesión: Realiza una solicitud POST a http://localhost:5000/auth/login y guarda el token recibido.

{
"email": "correo@example.com",
"password": "tucontraseña"
}

. Ver información de un usuario: Realiza una solicitud GET a http://localhost:5000/user/:id.

. Crear un post: Realiza una solicitud POST a http://localhost:5000/posts añadiendo el token JWT en los headers.

{
"title": "Título del Post",
"image": "url_de_la_imagen",
"body": "Contenido del post"
}

. Actualizar un post: Realiza una solicitud PATCH a http://localhost:5000/posts/:id con el token JWT en los headers.

{
"title": "Nuevo título del Post",
"image": "nueva_url_de_la_imagen",
"body": "Nuevo contenido del post"
}

. Eliminar un post: Realiza una solicitud DELETE a http://localhost:5000/posts/:id con el token JWT en los headers.

. Datos adicionales : recibiras un token guardalo lo necesitaras para hacer solicitudes a los endpoints protegidos si se te pierde o olvida puedes generarlo de nuevo , no se te olvide usar los formatos correspondientes para el JSON CONTENT
