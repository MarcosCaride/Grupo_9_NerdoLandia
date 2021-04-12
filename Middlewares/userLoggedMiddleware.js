function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;
};

module.exports = userLoggedMiddleware