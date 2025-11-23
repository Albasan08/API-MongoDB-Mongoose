const express = require("express");
const router = express.Router();

// EXPORTAR LAS FUNCIONES CONTROLADORAS
const {createAService,
    getAllServices,
    getAServiceById,
    updateAServiceById,
    deleteAServiceById} = require('../controllers/servicios.controller.js');

// DIVISIÓN DE RESPONSABILIDADES - CONTROLLERS
// CREATE A SERVICE
router.post('/crearservicio', createAService);

// GET ALL SERVICES
router.get('/servicios', getAllServices);

// GET A SERVICE BY ID
router.get('/servicios/:id', getAServiceById);

// UPDATE A SERVICE BY ID
router.put('/actualizarservicio/:id', updateAServiceById);

// DELETE A SERVICE BY ID
router.delete('/eliminarservicio/:id', deleteAServiceById);

// Se exporta TODO el objeto ROUTER
module.exports = router;

