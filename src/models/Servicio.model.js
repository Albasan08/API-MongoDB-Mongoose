const {Schema, model} = require("mongoose");

const ServicioEsquema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

module.exports = model("Servicio", ServicioEsquema);