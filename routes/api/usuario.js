const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const check_auth = require('../../middleware/auth');
require ('dotenv').config();

const Usuario = require('../../models/usuario')

//Obtiene todos los usuarios
router.get('/',check_auth, (req,res, next) => {
    // console.log('entra a metodo');
    Usuario.find().exec().then(
        docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        _id: doc._id,
                        user : doc.user,
                        password : doc.password,
                        nombre : doc.nombre,
                        apellidoP : doc.apellidoP,
                        apellidoM : doc.apellidoM,
                        email : doc.email
                    }
                })
            };
            return res.status(200).json(response);
        }
    ).catch(err => {
        return res.status(500).json({error: err});
    });
});

router.post('/signup', (req, res, next) => {
    Usuario.find( { user: req.body.user })
        .exec()
        .then(usuario => {
            if(usuario.length != 0) {
                return res.status(409).json({
                    message : 'Ya existe un usuario con ese nombre'
                });
            }
            else {
                //Se intenta hashear la contraseña
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err){ //si se obtiene error manda status 500
                        console.log("Entra error de hash: " + err);
                        return res.status(500).json({
                            error: "Error al crear usuario."
                        });
                    }
                    else {
                        const user = new Usuario({
                            _id : new mongoose.Types.ObjectId(),
                            user : req.body.user,
                            password : hash,
                            nombre : req.body.nombre,
                            email : req.body.email
                        });
                        
                        user
                            .save()
                            .then( result => {
                                return res.status(201).json({
                                    message: "Usuario creado"
                                });
                            })
                            .catch( err => {
                                console.log(err);
                                console.log("Entra error de usuario creado");
                                return res.status(500).json( { 
                                    error: err 
                                });
                            });
                    }
                })
            }
        }).catch(err => {
            return res.status(500).json({ message: "Algo inesperado ha pasado"});
        });
});

router.post('/login', (req,res,next) => {
    Usuario.find({user : req.body.user})
        .exec()
        .then( usuario => {
            // console.log("usuario:");
            // console.log(usuario);
            if (usuario.length < 1){
                return res.status(401).json({
                    message : "El nombre del usuario o la contraseña no son correctos."
                });
            }
            bcrypt.compare(req.body.password, usuario[0].password, (err, result) => {
                if (err){
                    console.log(err);
                    return res.status(401).json({
                        message : "El nombre del usuario o la contraseña no son correctos."
                    });
                }
                if (result) {
                    //Aqui se me hace que debo de devolver la vista del administrador
                    const token = jwt.sign(
                        {
                        email : usuario[0].email,
                        user : usuario[0].user
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn : "2h"
                        }
                    );
                    return res.status(201).json({
                        message: "Login exitoso",
                        token
                       }); 
                }
                return res.status(401).json({
                    message: "El nombre del usuario o la contraseña no son correctos."
                })
            });
        }).catch(err => {
            console.log("Error en ruta login" + err);
            return res.status(500).json({error : err});
        });
});

router.delete('/:usuarioId', check_auth,(req,res) => {
    Usuario.findOneAndDelete({_id : req.params.usuarioId})
        .exec()
        .then(result => {
            //Agregar parte en caso de que no haya encontrado registros
            if (!result) {
                return res.status(404).json({
                    message : "El usuario a eliminar no se ha encontrado"
                });
            }
            const user = new Usuario(result);
            return res.status(200).json({
                message : "Usuario "+ user.user  +" ha sido eliminado"
            });
        }).catch( err => {
            console.log(err);
            return res.status(500).json(
                {error : err}
            );
        });
});

module.exports = router;