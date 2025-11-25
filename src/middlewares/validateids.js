const {validationResult} = require("express-validator");

const validateIds = (req, res, next) => {
    
    const errors = validationResult(req);
    console.log(errors);

    // En caso de haber algún error se para
    if(!errors.isEmpty()){
        return res.status(400).json({
        ok: false,
        mensaje: "Ha habido algún error en el ID",
        errores: errors.mapped()
    })
    };

    // Pasa a la siguiente función, en este caso el controlador (por ejemplo, createAService)
    next();

}

module.exports = {validateIds};