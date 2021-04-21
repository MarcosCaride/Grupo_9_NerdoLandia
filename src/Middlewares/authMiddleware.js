function authMiddleware (req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/users')
    }
    next();
}

module.exports = authMiddleware