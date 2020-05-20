const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const check_auth = require('../../middleware/auth');

const Link = require('../../models/link')

//Obtiene todos los links
router.get('/', (req,res, next) => {
    Link.find().select('_id ruta').exec().then(
        docs => {
            const response = {
                count: docs.length,
                links: docs.map(doc => {
                    return {
                        _id: doc._id,
                        dirpath : doc.dirpath,
                        ruta : doc.ruta
                    }
                })
            };
            return res.status(200).json(response);
        }
    ).catch(err => {
        console.log("Error al consultar links: " +  err);
        return res.status(500).json({error: err});
    });
});

router.post('/', check_auth, (req,res,next) => {
    const link = new Link({
        _id: new mongoose.Types.ObjectId(),
        ruta: req.body.ruta
    })
    link.save().then(
        result => {
            console.log(result)
            return res.status(201).json({
                message: 'Link guardado exitosamente.',
                linkCreado: {
                    ruta : result.ruta,
                    _id: result._id
                },
                request: {
                    type: 'GET',
                    url: '/api/links/' + result._id
                }
            })
        }
    ).catch(err => {
        console.log(err);
        return res.status(500).json({
            message: "Error en el servidor"
        })
    })
});
router.post('/editarLink', check_auth, (req,res,next) => {
    console.log(req.body._id);
    const filtro = { _id: req.body._id}
    Link.findOneAndUpdate(filtro, {ruta: req.body.ruta}, {
        // Linea para que retorne el link modificado
        new: true,
        useFindAndModify : false
    })
    .exec()
    .then(newLink => {
        console.log(newLink)
        if (!newLink){
            return res.status(401).json({
                message: "Error de petición, revisar los datos"
            });
        }
        //Si todo va bien
        return res.status(201).json({
            message: 'Exito, el link ha sido modificado',
            newLink: newLink,
            request: {
                type: 'GET',
                url: '/api/links/' + newLink._id
            }
        })
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
});

router.delete('/:linkId', check_auth,(req,res) => {
    Link.findOneAndDelete({_id : req.params.linkId})
        .exec()
        .then(result => {
            //Agregar parte en caso de que no haya encontrado registros
            if (!result) {
                return res.status(404).json({
                    message : "El link a eliminar no se ha encontrado"
                });
            }
            const link = new Link(result);
            return res.status(201).json({
                message : "Link "+ link._id  +" ha sido eliminado"
            });
        }).catch( err => {
            console.log(err);
            return res.status(500).json(
                {error : err}
            );
        });
});

module.exports = router;