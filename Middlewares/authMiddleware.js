function authMiddleware (req, res, next) {
    console.log(req.session.userLogged);
    if (!req.session.userLogged) {
        return res.redirect('/users')
    }
    next();
}

module.exports = authMiddleware