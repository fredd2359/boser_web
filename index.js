const express  = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const assert = require('assert');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// Cambios 2/3/21
// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// Terminan cambios

require ('dotenv').config();

//Se conecta a base de datos MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:true, 
    useUnifiedTopology: true
    
})
.then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));

//Cambios 2/3/21
// var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
// var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

// var credentials = {key: privateKey, cert: certificate};
// Terminan cambios

const app = express();
//Se activa cors
 app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
 });

//Body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

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

// Cambios 2/3/21
// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080);
// httpsServer.listen(8443);

app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});

// Terminan cambios
