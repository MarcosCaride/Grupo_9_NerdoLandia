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



// MIDDLEWARES
const userLoggedMiddleware = require ('./src/Middlewares/userLoggedMiddleware')


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

app.use(methodOverrride('_method'))
app.use(express.static(publicPath));
app.listen(3030, () => console.log("Nerdo Landia en funcionamiento"))

// Ruteadores

app.use('/', mainRoutes);

app.use('/Carrito', mainRoutes);

app.use('/productDetail', productsRoutes)

app.use('/users', usersRoutes);

// Ruteadores