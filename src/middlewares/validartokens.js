const jwt = require('jsonwebtoken');

/*const validarTokens = (req, res, next) => {

    // Recoger token
    const header = req.header("Authorization") || "";
    //console.log(header)
    const token = header.split(" ")[1];
    console.log(token)
    // También se puede hacer así:
    //const token = req.headers["authorization"]?.split(" ")[1];

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No existe ningún token'
        });  
    } else {
        const tokenVerificado = jwt.verify(token, process.env.SECRET_KEY);
        console.log(tokenVerificado)
        
        if(tokenVerificado) {
            const {uid, role, nombre} = tokenVerificado;
            //console.log(uid, role, nombre)
            const payload = {
                uid,
                nombre,
                role
            };
            //console.log(payload);
            const req = payload;
            //console.log(req)

            next();

        } else {
            return res.status(401).json({
                ok: false,
                mensaje: 'El token no coincide'
            });
        }
    };
};*/

// PREGUNTAR POR TRY CATCH

const validarTokens = (req, res, next) => {

    // Recoger token
    const header = req.header("Authorization") || "";
    //console.log(header)
    const token = header.split(" ")[1];
    //console.log(token)
    // También se puede hacer así:
    //const token = req.headers["authorization"]?.split(" ")[1];

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No existe ningún token'
        });  
    } 
    try {
        const tokenVerificado = jwt.verify(token, process.env.SECRET_KEY);
        //console.log(tokenVerificado)
        
        const {uid, role, nombre} = tokenVerificado;
        //console.log(uid, role, nombre)
        const userToken = {
            uid,
            nombre,
            role
        }
  
       req.userToken = userToken;
        console.log(req.userToken)
        next();

    } catch(error) {
        //console.log(error)
        return res.status(401).json({
            ok: false,
            mensaje: 'El token no coincide'
        });
    };
};

module.exports = {validarTokens};


