// REQUERIMIENTOS DE TERCEROS
const bcrypt = require("bcryptjs");

// REQUERIMIENTOS PROPIOS
const User = require("../models/User.model.js");
const {generarToken} = require("../helpers/generartoken.helpers.js");

// CREAR USUARIO
const crearUsuario = async (req, res) => {

    try {
        // Recoger los parámetros del body
        const {nombre, email, password} = req.body;
        //console.log(nombre, email, password);

        // Lo tiene que buscar en el modelo, no en el body
        const usuarioExiste = await User.findOne({email});
        //console.log(usuarioExiste);

        if (usuarioExiste) {
            return res.status(400).json({
                ok: false,
                mensaje: "Usuario ya registrado, no se puede volver a crear"
            });

        } else {
            // Encriptar contraseña
            const salt = bcrypt.genSaltSync(10);
            const passwordEncriptada = bcrypt.hashSync(password, salt);
            //console.log(passwordEncriptada)

            // Para poder guardar la contraseña encriptada y poder compararla en la función del login
            const nuevoUsuario = {
                nombre,
                email,
                password: passwordEncriptada
            };

            const user = new User(nuevoUsuario);

            // Guardar usuario con la contraseña encriptada
            const usuarioGuardado = await user.save(nuevoUsuario)
            // console.log(usuarioGuardado)

            // generar token
            const payload = {
                uid: usuarioGuardado.id,
                role: usuarioGuardado.role
                // NO ENVIAR NUNCA DATOS SENSIBLES
            };

            const token = await generarToken(payload);
            console.log(token)

            return res.status(201).json({
                ok: true,
                mensaje: "Usuario creado correctamente",
                user: usuarioGuardado,
                token
            });
        };

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: "Error en la creación del usuario, contactar con el administrador del sitio"
        });  
    };
}

// REGISTRAR USUARIO
const registrarUsuario = async (req, res) => {

    try {
        // Recoger los parámetros del body
        const {email, password} = req.body;
        //console.log(email, password);

        // Lo tiene que buscar en el modelo, no en el body
        const usuarioExiste = await User.findOne({email});
        //console.log(usuarioExiste);
        if (!usuarioExiste) {
            return res.status(400).json({
                ok: false,
                mensaje: "No hay usuario con ese email"
            });
        }
            
        // Comparar contraseña guardada con la del body
        const passwordOk = bcrypt.compareSync(password, usuarioExiste.password);
            
        if (!passwordOk) {
            return res.status(401).json({
                ok: false,
                mensaje: "La contraseña es incorrecta"
            })
        } else {

            // Generar token
           const payload = {
                uid: usuarioExiste._id,
                nombre: usuarioExiste.nombre,
                role: usuarioExiste.role
            }
            
            const token = await generarToken(payload);
            //console.log(token)
            
            //Crear objeto user
            const user = {
                nombre: usuarioExiste.nombre,
                email: usuarioExiste.email,
                uid: usuarioExiste._id
            }

            return res.status(200).json({
                ok: true,
                mensaje: "Login de usuario hecho",
                user: user,
                token
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: true,
            mensaje: "Error en el registro del usuario, contactar con el administrador del sitio"
        }); 
    }; 
};

// RENOVAR TOKEN
const renovarTokenUsuario = async (req, res) => {
    try { 
        // Acceder a nombre y uid
        const userToken = req.userToken;
        //console.log(userToken)
        const {uid, nombre, role} = userToken;
        //console.log(uid, nombre, role);

        // Crear el token
        const payload = {
            uid: uid,
            nombre: nombre,
            role: role
        }

        const token = await generarToken(payload);
        //console.log(token)
            
        //Crear objeto user
        const user = {
            nombre: nombre,
            uid: uid,
            role: role
        }
        
        return res.status(200).json({
            ok: true,
            mensaje: "Token renovado correctamente",
            user: {
                uid,
                nombre
            },
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: "Error en la renovación del token, contactar con el administrador del sitio"
        });
        
    };
    
}

module.exports = {crearUsuario, registrarUsuario, renovarTokenUsuario}