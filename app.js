const express = require('express');
const path = require('path');
const app = express()
const publicPath = path.resolve('./public')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(('./views/productDetail.html')))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(('./views/register.html')))
});

app.post('/register', (req, res) =>{
    res.send (req.body)
});
app.get('/adminstrator', (req, res) => {
    res.sendFile(path.resolve(('./views/administrator.html')))
});
app.post('/administrator', (req, res) =>{
    res.send (req.body)
});
