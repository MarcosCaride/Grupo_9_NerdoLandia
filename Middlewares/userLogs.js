const usersController =require ('../controllers/usersController')

let usuarioLogueado =  function(req,res,next) {

    if(loginProcess.userToLogin != 0){
        redirect ('/users/:id')
            next()
        }
        
    }
    res.send('Estas logueado');

}

module.exports = huespedMiddleware


//If 