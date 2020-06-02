const express  = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const assert = require('assert');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require ('dotenv').config();

//Se conecta a base de datos MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:true, 
    useUnifiedTopology: true
});

const app = express();
//Se activa cors
 app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     //console.log(res);
     next();
 });
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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(cors());

//Se comienzan las rutas de front principales
app.get('/',(req,res) => {
    console.log(__dirname);
    res.render('index', {
        tittle: 'Hola bianca'
    });
});

app.get('/login',(req,res) => {
    res.render('login-view', {
        layout: 'admin'
    });
})

//Rutas para api
//Ruta para manejo de usuarios
app.use('/user/',require('./routes/api/usuario'));
//Ruta para manejo de memes
app.use('/api/imagenes',require('./routes/api/imagenes'));
//Ruta para manejo de links
app.use('/api/links',require('./routes/api/links'));

//Pubic directory
app.use('/', express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});
