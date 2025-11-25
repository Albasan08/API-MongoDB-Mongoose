const express = require("express");
const router = express.Router();
const {check} = require("express-validator");

// EXPORTAR LAS FUNCIONES CONTROLADORAS
const {createAService,
    getAllServices,
    getAServiceById,
    updateAServiceById,
    deleteAServiceById} = require('../controllers/servicios.controller.js');

// EXPORTAR FUNCIÓN VALIDATE INPUTS E IDS (MIDDLEWARE)
const {validateInputs} = require("../middlewares/validateinputs.js");
const {validateIds} = require("../middlewares/validateids.js")
   
// DIVISIÓN DE RESPONSABILIDADES - CONTROLLERS
// CREATE A SERVICE
router.post('/crearservicio', [
    check("nombre").notEmpty().withMessage("El campo NOMBRE no puede estar vacío"), // Para comprobar que no este vacío,
    check("nombre").isLength({min: 3}).withMessage("El campo NOMBRE tiene que tener más de 3 caracteres"), // Para comprobar el mínimo de caracteres
    check("nombre").isString().withMessage("El campo NOMBRE no puede contener números"),
    check("descripcion").notEmpty().withMessage("El campo DESCRIPCION no puede estar vacío"),
    check("descripcion").isLength({min: 3}).withMessage("El campo DESCRIPCIÓN debe tener al menos tres caracteres"),
    check("descripcion").isString().trim().withMessage("El campo DESCRIPCIÓN tiene que estar en formato texto"),
    check("precio").notEmpty().withMessage("El campo PRECIO no puede estar vacío "),
    check("precio").isLength({min: 1}).withMessage("El campo PRECIO tiene que tener al menos 1 caracter"),
    //check("precio").contains("€").withMessage("El campo PRECIO no puede tener unidades de moneda"), // Para comprobar que no se mete € como unidad de moneda, pero solo coge en formato STRING si es formato numérico da error de sintaxis y lo convierte a STRING
    check("precio").isNumeric().withMessage("El campo PRECIO tiene que ser numérico"),
    check("email").notEmpty().withMessage("El campo EMAIL no puede estar vacío"),
    check("email").isEmail().withMessage("El campo EMAIL debe ser en formato email"),
    check("descripcion_2").notEmpty().withMessage("El campo DESCRIPCION ADICIONAL no puede estar vacío"),
    check("descripcion_2").isLength({min: 3}).withMessage("El campo DESCRIPCIÓN ADICIONAL debe tener al menos 3 caracteres"),
    check("descripcion_2").isString().trim().withMessage("El campo DESCRIPCIÓN ADICIONAL tiene que estar en formato texto"),
    check("precio_rebajado").notEmpty().withMessage("El campo PRECIO REBAJADO no puede estar vacío "),
    check("precio_rebajado").isLength({min: 1}).withMessage("El campo PRECIO REBAJADO debe tener al menos un caracter"),
    //check("precio_rebajado").contains("€").withMessage("El campo PRECIO REBAJADO no puede tener unidades de moneda"),
    check("precio_rebajado").isNumeric().withMessage("El campo PRECIO REBAJADO tiene que numérico"),
    validateInputs] , createAService);
// PENDIENTE GESTIONAR REPETIDOS

// GET ALL SERVICES
router.get('/servicios', getAllServices);

// GET A SERVICE BY ID
router.get('/servicios/:id', [
    check("id").notEmpty().withMessage("El id no puede estar vacío"),
    check("id").isAlphanumeric().withMessage("El ID no puede tener caracteres no alfanuméricos"),
    check("id").isLength({min: 24, max: 24}).withMessage("El ID tiene que tener 24 caracteres"),
    check("id").isLowercase().withMessage("El ID no puede tener mayúsculas"),
    check("id").isMongoId().withMessage("El ID tiene que tener la estrcutura de MongoDB"),
    validateIds], getAServiceById);

// UPDATE A SERVICE BY ID
router.put('/actualizarservicio/:id', [
    check("nombre").notEmpty().withMessage("El campo NOMBRE no puede estar vacío"), // Para comprobar que no este vacío,
    check("nombre").isLength({min: 3}).withMessage("El campo NOMBRE tiene que tener más de 3 caracteres"), // Para comprobar el mínimo de caracteres
    check("nombre").isString().withMessage("El campo NOMBRE no puede contener números"),
    check("descripcion").notEmpty().withMessage("El campo DESCRIPCION no puede estar vacío"),
    check("descripcion").isLength({min: 3}).withMessage("El campo DESCRIPCIÓN debe tener al menos tres caracteres"),
    check("descripcion").isString().trim().withMessage("El campo DESCRIPCIÓN tiene que estar en formato texto"),
    check("precio").notEmpty().withMessage("El campo PRECIO no puede estar vacío "),
    check("precio").isLength({min: 1}).withMessage("El campo PRECIO tiene que tener al menos 1 caracter"),
    //check("precio").contains("€").withMessage("El campo PRECIO no puede tener unidades de moneda"), // Para comprobar que no se mete € como unidad de moneda
    check("precio").isNumeric().withMessage("El campo PRECIO tiene ser que numérico"), // Si metes números como string te lo convierte a valor numérico
    check("email").notEmpty().withMessage("El campo EMAIL no puede estar vacío"),
    check("email").isEmail().withMessage("El campo EMAIL debe ser en formato email"),
    check("descripcion_2").notEmpty().withMessage("El campo DESCRIPCION ADICIONAL no puede estar vacío"),
    check("descripcion_2").isLength({min: 3}).withMessage("El campo DESCRIPCIÓN ADICIONAL debe tener al menos tres caracteres"),
    check("descripcion_2").isString().trim().withMessage("El campo DESCRIPCIÓN ADICIONAL tiene que estar en formato texto"),
    check("precio_rebajado").notEmpty().withMessage("El campo PRECIO REBAJADO no puede estar vacío "),
    check("precio_rebajado").isLength({min: 1}).withMessage("El campo PRECIO REBAJADO tiene que tener al menos 1 caracter"),
    //check("precio_rebajado").contains("€").withMessage("El campo PRECIO REBAJADO no puede tener unidades de moneda"),
    check("precio_rebajado").isNumeric().withMessage("El campo PRECIO REBAJADO tiene que numérico"),
    check("id").notEmpty().withMessage("El id no puede estar vacío"),
    check("id").isAlphanumeric().withMessage("El ID no puede tener caracteres no alfanuméricos"),
    check("id").isLength({min: 24, max: 24}).withMessage("El ID tiene que tener 24 caracteres"),
    check("id").isLowercase().withMessage("El ID no puede tener mayúsculas"),
    check("id").isMongoId().withMessage("El ID tiene que tener la estrcutura de MongoDB"),
    validateIds, validateInputs] , updateAServiceById);

// DELETE A SERVICE BY ID
router.delete('/eliminarservicio/:id',[
    check("id").notEmpty().withMessage("El id no puede estar vacío"),
    check("id").isAlphanumeric().withMessage("El ID no puede tener caracteres no alfanuméricos"),
    check("id").isLength({min: 24, max: 24}).withMessage("El ID tiene que tener 24 caracteres"),
    check("id").isLowercase().withMessage("El ID no puede tener mayúsculas"),
    check("id").isMongoId().withMessage("El ID tiene que tener la estrcutura de MongoDB"),
    validateIds], deleteAServiceById);

// Se exporta TODO el objeto ROUTER
module.exports = router;

