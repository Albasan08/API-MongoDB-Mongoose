const mongoose = require("mongoose");

const connection = async () => {

    try {
        // Para acceder a la variable de entorno protegida
        const respuesta = await mongoose.connect(process.env.URIDB);
        return respuesta

    } catch(error) {

        return {
            ok: false,
            mensaje: "Error al conectar con la BBDD"
        }
    }
};

module.exports = {connection};