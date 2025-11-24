// Requerir el modelo (esquema)
const Servicio = require("../models/Servicio.model");

// CREATE A SERVICE
const createAService = async (req, res) => {
    
    //console.log(req.body);
    const body = req.body;

    try {

        const servicio = new Servicio(body);
        //console.log(servicio);

       const servicioAlmacenado = await servicio.save();
        console.log({servicioAlmacenado});

        return res.status(201).json({
            ok: true,
            mensaje: "Servicio creado correctamente",
            data: servicioAlmacenado
        });
        
    } catch(error) {
        // Siempre poner un console.log para el administrador poder identificar el error
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: "Contacte con el administrador"
        });
    }
};

// GET ALL SERVICES
const getAllServices = async (req, res) => {
    
    try {
        const serviciosBuscados = await Servicio.find();
        console.log(serviciosBuscados);

        if(serviciosBuscados) {
            return res.status(200).json({
            ok: true,
            mensaje: "Servicios encontrados correctamente",
            data: serviciosBuscados
        })
        } else {
            return res.status(404).json(
                {
                    ok: false,
                    message: "Servicios no encontrados"
            })
        }

    } catch (error) {
        // Siempre poner un console.log para el administrador poder identificar el error
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: "Contacte con el administrador"
        });

    }
};

// GET A SERVICE BY ID
const getAServiceById = async (req, res) => {
    
    const {id} = req.params;
    //console.log(id);

    try {

        const servicioBuscado = await Servicio.findById(id);
        console.log(servicioBuscado);

        if(servicioBuscado) {
            return res.status(200).json({
            ok: true,
            mensaje: "Servicio encontrado correctamente por su ID",
            data: servicioBuscado
        })
        } else {
            return res.status(404).json(
                {
                    ok: false,
                    message: "Servicio no encontrado"
            })
        }


    } catch(error) {
        // Siempre poner un console.log para el administrador poder identificar el error
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: "Contacte con el administrador"
        });

    }
};

// UPDATE A SERVICE BY ID
const updateAServiceById = async (req, res) => {
    
    const {id} = req.params;
    //console.log(id);

    const body = req.body;
    //console.log(body);
    try {

        const servicioActualizado = await Servicio.findByIdAndUpdate(id, body, {returnDocument: "after"});
        console.log(servicioActualizado);

        if(servicioActualizado) {
            return res.status(200).json({
            ok: true,
            mensaje: "Servicio modificado correctamente",
            data: servicioActualizado
        })
        } else {
            return res.status(404).json(
                {
                    ok: false,
                    message: "Servicio no encontrado"
            })
        }
    } catch (error) {
        // Siempre poner un console.log para el administrador poder identificar el error
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: "Contacte con el administrador"
        });
    }
};

// DELETE A SERVICE BY ID
const deleteAServiceById = async (req, res) => {

    const {id} = req.params;
    //console.log(id);

    try {
        const servicioEliminado = await Servicio.findByIdAndDelete(id);
        console.log(servicioEliminado);

        if(servicioEliminado) {
            return res.status(200).json({
            ok: true,
            mensaje: "Servicio eliminado correctamente",
            data: servicioEliminado
        })
        } else {
            return res.status(404).json(
                {
                    ok: false,
                    message: "Servicio no encontrado"
            })
        }
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: "Contacte con el administrador"
        });
    }
};

module.exports = {
    createAService,
    getAllServices,
    getAServiceById,
    updateAServiceById,
    deleteAServiceById
}
