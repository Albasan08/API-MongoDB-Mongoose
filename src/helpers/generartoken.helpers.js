// REQUERIMIENTOS DE TERCEROS
const jwt = require('jsonwebtoken');

//REQUERIMIENTOS PROPIOS
//console.log(process.env.SECRET_KEY)

const generarToken = (payload) => {
    // Como característica es que no se pueden usar funciones asíncronas
    return new Promise((resolve, reject) => {
        jwt.sign(payload,
            process.env.SECRET_KEY, 
            {expiresIn: "2h"},
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject("error");
                } else {
                    resolve(token);
                }
            }
        )
    });
};

// función para decodeToken return jwt.verify(token, process.env.SECRET_KEY)

module.exports = {generarToken};