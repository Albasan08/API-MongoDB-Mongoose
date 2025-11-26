const express = require("express");
const router = express.Router();
const {check} = require("express-validator");

const {crearUsuario, registrarUsuario, renovarTokenUsuario} = require("../controllers/auth.controllers.js")

const {validateInputs} = require("../middlewares/validateinputs.js");

// CREAR USUARIO
router.post('/auth/new', [    
    check("nombre")
        .notEmpty().withMessage("El campo NOMBRE no puede estar vacío")
        .isLength({min: 3}).withMessage("El campo NOMBRE tiene que tener más de 3 caracteres")
        .isString().withMessage("El campo NOMBRE no puede contener números"),
    check("email")
        .notEmpty().withMessage("El campo EMAIL no puede estar vacío")
        .isEmail().withMessage("El campo EMAIL debe ser en formato email"),
    check("password")
        .notEmpty().withMessage("El campo CONTRASEÑA no puede estar vacío"),
        // Pendiente validar los caracteres (expresión regular)
    validateInputs] , crearUsuario)

// LOGIN USUARIO
router.post('/auth/', [    
    check("nombre")
        .notEmpty().withMessage("El campo NOMBRE no puede estar vacío")
        .isLength({min: 3}).withMessage("El campo NOMBRE tiene que tener más de 3 caracteres")
        .isString().withMessage("El campo NOMBRE no puede contener números"),
    check("email")
        .notEmpty().withMessage("El campo EMAIL no puede estar vacío")
        .isEmail().withMessage("El campo EMAIL debe ser en formato email"),
    check("password")
        .notEmpty().withMessage("El campo CONTRASEÑA no puede estar vacío"),
        // Pendiente validar los caracteres (expresión regular)
    validateInputs] , registrarUsuario)

// RENOVAR TOKEN USUARIO
router.get('/auth/renew', /*validarJWT, */renovarTokenUsuario)

module.exports = router;