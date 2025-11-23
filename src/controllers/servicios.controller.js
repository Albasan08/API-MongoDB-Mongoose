// CREATE A SERVICE
const createAService = (req, res, next) => {
    res.send("CREAR UN SERVICIO DESDE LOS CONTROLADORES");

    try {
        
    } catch(error) {
        // Para enviar al middleware de errores 500
        next(error);
    }
};

// GET ALL SERVICES
const getAllServices = (req, res, next) => {
    res.send("MOSTRAR TODOS LOS SERVICIOS DESDE LOS CONTROLADORES");
    try {

    } catch (error) {
        // Para enviar al middleware de errores 500
        next(error);
    }
};

// GET A SERVICE BY ID
const getAServiceById = (req, res, next) => {
    res.send("MOSTRAR UN SERVICIO POR SU ID DESDE LOS CONTROLADORES");

    try {

    } catch(error) {
        // Para enviar al middleware de errores 500
        next(error);
    }
};

// UPDATE A SERVICE BY ID
const updateAServiceById = (req, res, next) => {
    res.send("ACTUALIZAR UN SERVICIO POR SU ID DESDE LOS CONTROLADORES");

    try {

    } catch (error) {
        // Para enviar al middleware de errores 500
        next(error);
    }
};

// DELETE A SERVICE BY ID
const deleteAServiceById = (req, res, next) => {
    res.send("ELIMINA UN SERVICIO A TRAVÉS DE SU ID");

    try {


    } catch(error) {
        // Para enviar al middleware de errores 500
        next(error);
    }
};

module.exports = {
    createAService,
    getAllServices,
    getAServiceById,
    updateAServiceById,
    deleteAServiceById
}
