const mongoose = require("mongoose");

const connection = async () => {

    try {
        // Para acceder a la variable de entorno protegida
        const respuesta = await mongoose.connect(process.env.URIDB);
        console.log("Conectado a la BBDD")
        return respuesta
        
    } catch(error) {
        console.log("Error al conectar con la BBDD")
        return {
            ok: false,
            mensaje: "Error al conectar con la BBDD"
        }
    }
};

module.exports = {connection};