const usersController =require ('../controllers/usersController')

let usuarioLogueado =  function(req,res,next) {

    if(loginProcess.userToLogin){
        redirect ('/users/perfil')
            next()
        }
        
    }
    res.send('Estas logueado');
    
module.exports = huespedMiddleware


//If 