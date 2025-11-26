const jwt = require('jsonwebtoken');

const generarToken = (role) => {
    // Como característica es que no se pueden usar funciones asíncronas
    return new Promise((resolve, reject) => {
        jwt.sign({})
    })
}

module.exports = {generarToken};