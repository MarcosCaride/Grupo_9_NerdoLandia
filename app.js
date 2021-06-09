const express = require('express');
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const session =  require('express-session');
const methodOverrride = require('method-override')
const cookies = require('cookie-parser');

const publicPath = path.resolve('./public')


// ROUTES
const usersRoutes = require ('./src/routes/users');
const mainRoutes = require ('./src/routes/main');
const productsRoutes = require ('./src/routes/products');

//USERS API ROUTES
const usersAPIroutes = require('./src/routes/api/usersAPIroutes')

//PRODUCTS API ROUTES
const productsAPIroutes = require("./src/routes/api/productsAPIroutes")



// MIDDLEWARES
const userLoggedMiddleware = require ('./src/Middlewares/userLoggedMiddleware')
const ifLoggedUser = require ('./src/Middlewares/ifLoggedUser')


app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use(session( {
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
}))

app.use(cookies());

app.use(userLoggedMiddleware);
app.use(ifLoggedUser);

app.use(methodOverrride('_method'))
app.use(express.static(publicPath));
app.listen(3030, () => console.log("Nerdo Landia en funcionamiento"))

// Ruteadores

app.use('/', mainRoutes);

app.use('/Carrito', mainRoutes);

app.use('/detail', productsRoutes)

app.use('/users', usersRoutes);

// Colección de recursos de usuarios (APIs)

app.use('/api/users', usersAPIroutes)
app.use('/api/products', productsAPIroutes)