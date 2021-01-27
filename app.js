const express = require('express');
const path = require('path');
const app = express()
const publicPath = path.resolve('./public')


app.use(express.static(publicPath));
app.listen(3030, () => console.log("Nerdo Landia en funcionamiento"))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(('./views/index.html')))
});

app.get('/Login', (req, res) => {
    res.sendFile(path.resolve(('./views/login.html')))
});

app.get('/Carrito', (req, res) => {
    res.sendFile(path.resolve(('./views/productCart.html')))
});