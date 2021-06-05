function ifUserLogged (req,res,next){
    req.imagenLogeado = ""
		
    if (req.session.userLogged) {
        req.imagenLogeado = req.session.userLogged.avatar
    }
    next()
}

module.exports = ifUserLogged