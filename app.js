// IMPORTACIONES DE TERCEROS
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {connection} = require("./src/config/dbConnect.js")

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
app.use('/api/v1', require ("./src/routes/servicios.routes.js"));

/*// GESTIONAR ERROR 404 
app.use((req, res, next) => {
  return res.status(404).json({ 
    "ok": "false",
    "message": "Servicio no encontrado"});
});

// GESTIONAR ERROR 500
app.use((err, req, res, next) => {
  return res.status(500).json({ 
    "ok": "false",
    "message": "Error de conexión"});
});*/ // PONER EN EL PROPIO CONTROLADOR

// Poner al servidor a la escucha - SIEMPRE LA ÚLTIMA
app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`)
});