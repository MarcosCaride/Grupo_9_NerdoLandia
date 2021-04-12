const express = require('express');
const path = require('path');
const app = express()
const publicPath = path.resolve('./public')
const bodyParser = require('body-parser');
const mainRoutes = require ('./routes/main');
const productsRoutes = require ('./routes/products');
const session =  require('express-session');
const usersRoutes = require ('./routes/users');
const methodOverrride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(session( {
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
}))

app.use(methodOverrride('_method'))
app.use(express.static(publicPath));
app.listen(3030, () => console.log("Nerdo Landia en funcionamiento"))

app.use('/', mainRoutes);

app.use('/Carrito', mainRoutes);

app.use('/productDetail', productsRoutes)

app.use('/users', usersRoutes);

app.post('/register', (req, res) =>{
    res.send (req.body)
});
