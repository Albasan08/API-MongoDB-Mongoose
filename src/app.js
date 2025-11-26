// IMPORTACIONES DE TERCEROS
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {connection} = require("./config/dbConnect.js")

// IMPORTACIONES NUESTRAS
const app = express();

const port = process.env.PORT;

//MIDDLEWARE
app.use(cors());
//Para leer el body de las peticiones en formato JSON
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded());

//BBDD
connection();

// LLamar a la ruta de servicios
app.use('/api/v1', require ("./routes/servicios.routes.js"));

// Llamar a la ruta de autentificación
app.use("/api/v1", require ("./routes/auth.routes.js"));

// Poner al servidor a la escucha - SIEMPRE LA ÚLTIMA
app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`)
});