const huesped = []
//rutas accesibles solo sin login, redirigen al perfil ??


let huespedMiddleware = function(req,res,next) {

    huesped.forEach(user => {
        if(user == req.query.user){
            next()
        }
        
    });
    res.send('No tenes permisos')
   

}

module.exports = huespedMiddleware