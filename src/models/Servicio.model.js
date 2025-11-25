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
    },
    email: {
        type: String,
        required: true
    },
    descripcion_2: {
        type: String,
        required: true
    },
    precio_rebajado: {
        type: Number,
        required: true
    }
});

module.exports = model("Servicio", ServicioEsquema);