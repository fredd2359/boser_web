const express  = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');

//Borrar
const members = require('./Members');

const app = express();

//Init Middleware
app.use(logger);

//Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

 app.get('/',(req,res) => {
     res.render('index', {
         tittle: 'Member app',
         members
     });;
 });

app.use(express.static(path.join(__dirname,'public')));

//Members API site
app.use('/api/members',require('./routes/api/members'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});