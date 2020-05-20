//Api para los memes
const express = require('express'); 
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const check_auth = require('../../middleware/auth');
var url = require('url');

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

const upload = multer(  {
    storage: storage,
    limits : {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter : fileFilter
});

//Obtiene todos los memes (o los que irán en el carrousel)
router.get('/', (req,res, next) => {
    Imagen.find().select('nombre rutaWeb').exec().then(
        docs => {
            const response = {
                count: docs.length,
                imagenes: docs.map(doc => {
                    return {
                        _id: doc._id,
                        nombre : doc.nombre,
                        rutaWeb : doc.rutaWeb
                    }
                })
            };
            return res.status(200).json(response);
        }
    ).catch(err => {
        return res.status(500).json({error: err});
    });
});

//Método para subir una imagen
router.post('/', upload.single('memeImagen'), check_auth,(req,res,next) => {
    if(req.file === undefined){
        return res.status(409).json({
            message: 'Error en la petición. No se envió imagen'
        });
    }
    nombreImg = req.file.filename;
    const imagen = new Imagen({
        _id: new mongoose.Types.ObjectId(),
        nombre: nombreImg,
        pathImagen : req.file.path,
        rutaWeb: `${req.protocol}://${req.get('host')}/imagenes/${nombreImg}`
    });
    imagen.save().then(
        result => {
            console.log(result);
            return res.status(201).json({
                message : 'Imagen guardada exitosamente.',
                imagenCreada: {
                    nombre : result.nombre,
                    pathImagen: result.pathImagen, // Http://localhost:5000/fut.png
                    _id: result._id,
                    rutaWeb: result.rutaWeb
                },
                request: {
                    type: 'GET',
                    url: '/api/imagenes/' + result._id
                }
            });
        }
    );
});

router.delete('/:imagenId', check_auth,(req,res) => {
    Link.findOneAndDelete({_id : req.params.imagenId})
        .exec()
        .then(result => {
            //Agregar parte en caso de que no haya encontrado registros
            if (!result) {
                return res.status(404).json({
                    message : "La imagen a eliminar no se ha encontrado"
                });
            }
            const imagen = new Imagen(result);
            return res.status(201).json({
                message : "Imagen "+imagen._nombre  +" ha sido eliminada"
            });
        }).catch( err => {
            console.log(err);
            return res.status(500).json(
                {error : err}
            );
        });
});

module.exports = router;