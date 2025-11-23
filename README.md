# API REST SERVICIOS - NODE.JS, EXPRESS Y MONGODB - MONGOATLAS(MONGOOSE)

## OBJETIVO DEL ROYECTO

- Construir una API REST funcional.
- Implementar el uso de rutas separadas.
- Aplicar funciones controladoras.
- Utilizar Mongoose.
- Desplegar la API en Render.

## ESTRUCTURA DEL PROYECTO
```bash
    /src 
        /config
            dbConnect.js
        /controllers
            servicios.controllers.js
        /models
            Servicio.model.js
        /routes
            servicios.routes.js
    app.js
    .env.template
    README.md
```
## TECNOLOGÍAS UTILIZADAS

- Node.js.
- Express.
- MongoDB(Atlas).
- Mongoose.
- Render.
- Postman.


## PUESTA EN MARCHA

1. Clonar este repositorio.
2. Instalar dependencias con npm i:
    - Express.
    - Dotevn.
    - CORS.
    - Mongoose.

## VARIABLES DE ENTORNO

Renombrar el archivo .env.template por .env.
- PORT
- URIDB

## ENDPOINTS
1. Crear un servicio: /api/v1/crearservicio
2. Obtener todos los servicios: /api/v1/servicios
3. Obtener un servicio por su ID: /api/v1/servicios/:id
4. Actualizar un servicio por su ID: /api/v1/actualizarservicio/:id
5. Eliminar un servicio por su ID: /api/v1/eliminarservicio/:id