//Api para los memes
const express = require('express'); 
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const crypto = require('crypto');
const check_auth = require('../../middleware/auth');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
var url = require('url');

const Imagen = require('../../models/imagenes');
const { ReadStream } = require('fs');

const conn = mongoose.createConnection(process.env.MONGODB_URI);

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('imagenes');
});

const storage = new GridFsStorage({
    url: process.env.MONGODB_URI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(3, (err, buf) => {
                if (err) return reject(err);
                var año = new Date().getFullYear();
                var mes = new Date().getUTCMonth();
                var dia = new Date().getDate();
                const filename =año + '-' + (mes + 1) + '-' + dia + '-' + buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'imagenes',
                    metadata: {
                        url: `${req.protocol}://${req.get('host')}/api/imagenes/${filename}`
                    }
                };
                resolve(fileInfo);
            });
        });
    }
});

// Objeto callback que filtra el contenido que puedes subir
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
    fileFilter : fileFilter
});

//Obtiene todos los memes (o los que irán en el carrousel)
router.get('/', (req,res, next) => {
    gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0){
            return res.status(404).json({
                err: 'No hay imagenes'
            });
        }
        return res.status(201).json({files});
    })
    // Imagen.find().select('nombre rutaWeb createdAt').exec().then(
    //     docs => {
    //         const response = {
    //             count: docs.length,
    //             imagenes: docs.map(doc => {
    //                 return {
    //                     _id: doc._id,
    //                     nombre : doc.nombre,
    //                     rutaWeb : doc.rutaWeb,
    //                     fechaCreacion: doc.createdAt
    //                 }
    //             })
    //         };
    //         return res.status(201).json(response);
    //     }
    // ).catch(err => {
    //     return res.status(500).json({error: err});
    // });
});

//Método para subir una imagen
router.post('/', check_auth, upload.single('memeImagen'), (req,res,next) => {
    var olderDate = new Date();
    var idBorrar = '';
    var huboError= false;
    //CONFIG: Si enuentra mas de 11 u 11 imagenes va borrando la mas vieja
    // significa que solo puede subir 8 imágenes
    gfs.files.find().toArray((err, files) => {
        if (files.length >= 11){
            files.map(file => {
                if(olderDate < file.uploadDate){
                    olderDate = olderDate;
                }
                else {
                    olderDate = file.uploadDate;
                    idBorrar = file._id;
                }
            });
        }
        if(idBorrar !== ''){
            gfs.remove({_id: idBorrar, root: 'imagenes'}, (err, gridStore) => {
                if (err) {
                    huboError = true;
                }
            });
        }
    })
    if(req.file === undefined){
        return res.status(409).json({
            message: 'Error en la petición. No se envió imagen'
        });
    }
    if ( huboError){
        return res.status(500).json({
            err,
            message: 'Error en el servidor'
        })
    }
    return res.status(201).json({
        message: 'La imagen ha sido guardada!',
        file: req.file
    });
    // nombreImg = req.file.filename;
    // const imagen = new Imagen({
    //     _id: new mongoose.Types.ObjectId(),
    //     nombre: nombreImg,
    //     pathImagen : req.file.path,
    //     rutaWeb: `${req.protocol}://${req.get('host')}/imagenes/memes/${nombreImg}`
    // });
    // imagen.save().then(
    //     result => {
    //         console.log(result);
    //         return res.status(201).json({
    //             message : 'Imagen guardada exitosamente.',
    //             imagenCreada: {
    //                 nombre : result.nombre,
    //                 pathImagen: result.pathImagen, // Http://localhost:5000/fut.png
    //                 _id: result._id,
    //                 rutaWeb: result.rutaWeb
    //             },
    //             request: {
    //                 type: 'GET',
    //                 url: '/api/imagenes/' + result._id
    //             }
    //         });
    //     }
    // );
});

router.get('/:filename', (req, res) => {
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if (!file || file.length === 0){
            return res.status(404).json({
                message: 'No se encontró la imagen'
            })
        }
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
    })
});


router.delete('/:imagenId', check_auth,(req,res) => {
    gfs.remove({_id: req.params.imagenId, root: 'imagenes'}, (err, gridStore) => {
        if (err) {
            return res.status(409).json({
                message: 'Error en la petición. No se envió imagen'
            });
        }
        return res.status(201).json({
            message: 'Se ha eliminado la imagen'
        });
    });
    // Link.findOneAndDelete({_id : req.params.imagenId})
    //     .exec()
    //     .then(result => {
    //         //Agregar parte en caso de que no haya encontrado registros
    //         if (!result) {
    //             return res.status(404).json({
    //                 message : "La imagen a eliminar no se ha encontrado"
    //             });
    //         }
    //         const imagen = new Imagen(result);
    //         return res.status(201).json({
    //             message : "Imagen "+imagen._nombre  +" ha sido eliminada"
    //         });
    //     }).catch( err => {
    //         console.log(err);
    //         return res.status(500).json(
    //             {error : err}
    //         );
    //     });
});

module.exports = router;