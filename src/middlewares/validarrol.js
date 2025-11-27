const validarRoles = (req, res, next) => {

    try { 
        // Acceder a rol
        const userToken = req.userToken;
        //console.log(userToken)
        const {role} = userToken;
        //console.log(role);

        // Si el rol es diferente a user lo para
        if (role !== "user") {
            return res.status(401).json({
                ok: false,
                mensaje: "El rol del usuario no es user, no tiene los permisos necesarios"
            });
        };

        // Si el rol es user, pasa a la siguiente función
        next();
        
    } catch (error) {
        console.log(error);
            return res.status(500).json({
                ok: false,
                mensaje: "Error en la comprobación del rol del usuario, contactar con el administrador del sitio"
            });
            
    };
};

module.exports = {validarRoles};


