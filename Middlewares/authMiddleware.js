function authMiddleware (req, res, next) {
    console.log(req.session.userLogged);
    if (!req.session.userLogged) {
    }
    next();
}

module.exports = authMiddleware