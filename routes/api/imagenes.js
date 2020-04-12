//Api para los memes
const express = require('express'); 
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const check_auth = require('../../middleware/auth');

const Imagen = require('../../models/imagenes');

const storage = multer.diskStorage({
    destination : function(req,file,cb) {
        cb(null, './public/imagenes');
    },
    filename: function(req,file,cb){
        var año = new Date().getFullYear();
        var mes = new Date().getUTCMonth();
        var dia = new Date().getDate();
        cb(null, año + '-' + (mes + 1) + '-' + dia + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true);
    }
    else {
        cb(new Error('El formato de la imagen no es valido, solo puedes subir .jpeg, .jpg y .png'), false);
    }
}

const upload = multer({
    storage: storage,
    limits : {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter : fileFilter
});

//Obtiene todos los memes (o los que irán en el carrousel)
router.get('/', (req,res, next) => {
    Imagen.find().select('nombre pathImagen').exec().then(
        docs => {
            const response = {
                count: docs.length,
                imagenes: docs.map(doc => {
                    return {
                        _id: doc._id,
                        nombre : doc.nombre,
                        pathImagen : doc.pathImagen
                    }
                })
            };
            res.status(200).json(response);
        }
    ).catch(err => {
        console.log("Error al consultar imagenes: " +  err);
        res.status(500).json({error: err});
    });
});

//Método para subir una imagen
router.post('/', upload.single('memeImagen'), check_auth,(req,res,next) => {
    const imagen = new Imagen({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.file.originalname,
        pathImagen : req.file.path
    });
    imagen.save().then(
        result => {
            console.log(result);
            res.status(201).json({
                message : 'Imagen subida exitosamente',
                imagenCreada: {
                    nombre : result.nombre,
                    pathImagen: result.pathImagen,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: '/api/imagenes/' + result._id
                    }
                }
            });
        }
    );
});

module.exports = router;