const express  = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const assert = require('assert');
const mongoose = require('mongoose');
require ('dotenv').config();

//Se conecta a base de datos MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:true, 
    useUnifiedTopology: true
});

//Borrar
const members = require('./Members');

const app = express();

//Init Middleware
//app.use(logger);

//Handlebars middleware
app.engine('handlebars', exphbs({
    extName : 'handlebars',
    partialsDir : [
        path.join(__dirname, 'views/partials')
    ]
}));
app.set('view engine', 'handlebars');

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res) => {
    console.log(__dirname);
    res.render('index', {
        tittle: 'Hola bianca',
        members
    });
});

app.get('/hola',(req,res) => {
    res.render('prueba');
});

//app.use(express.static(path.join(__dirname,'public')));

//Members API site www.bosersalseo.com/api/members/
app.use('/api/members',require('./routes/api/members'));
//Ruta para manejo de memes
app.use('/api/imagenes',require('./routes/api/imagenes'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});