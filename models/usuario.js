const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    user : { type : String, required : true, unique : true},
    password : { type: String, required : true},
    nombre : { type: String, required : true },
    apellidoP : { type: String, required : false},
    apellidoM : { type: String, required : false},
    email : { 
        type: String, 
        unique : true,
        required : true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Usuario', userSchema);