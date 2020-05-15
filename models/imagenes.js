const mongoose = require('mongoose');

const imagenSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    nombre : {type: String, required : true},
    pathImagen : {type: String, required: true},
    rutaWeb: {type:String, required: true}
});

module.exports = mongoose.model('Imagen', imagenSchema);