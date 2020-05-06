const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const check_auth = require('../../middleware/auth');

const Link = require('../../models/link')

//Obtiene todos los links
router.get('/',check_auth, (req,res, next) => {
    console.log('entra a metodo /api/links');
    Link.find().select('_id dirpath').exec().then(
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

router.post('/', (req,res,next) => {
    console.log("Entra en el servidor create link:" + req.body.link);
    const link = new Link({
        _id: new mongoose.Types.ObjectId(),
        ruta: req.body.ruta,
        dirpath: req.body.dirpath
    })
    link.save().then(
        result => {
            console.log(result)
            return res.status(201).json({
                message: 'Link subido exitosamente.',
                linkCreado: {
                    ruta : result.ruta,
                    dirpath: result.dirpath,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: '/api/links/' + result._id
                    }
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
router.post('/editarLink', (req,res,next) => {
    console.log("Entra en el servidor editar link:" + req.body._id);
    var link = Link.where({_id: req.body._id});
    link.findById(function  (err, res) {
        if (err) {
            return res.status(401).json({
                message: "Error de petición, revisar los datos"
            })
        }
        if (res) {
            console.log(res);
            res.ruta = req.body.newRuta;
            res.dirpath = req.body.newDirPath? req.body.newDirPath : req.dirpath;
            const nuevoLink = res.save();
            return res.status(201).json({
                message: 'Exito, el link ha sido modificado',
                newLink: nuevoLink,
                request: {
                    type: 'GET',
                    url: '/api/links/' + nuevoLink._id
                }
            })
        }
    })
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
            return res.status(200).json({
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