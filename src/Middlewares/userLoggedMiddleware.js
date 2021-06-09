const User = require('../models/User')
const db = require ("../database/models");


function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;
    
    let userFromCookie = db.Users.findOne({
        where:{
            email: emailInCookie,
        }
    })
    
    Promise.all([userFromCookie]).then( function(user){
        if(user){
            req.session.userLogged = user
        }
    }).catch((e)=> console.log(e))

    // if (userFromCookie){
    //     req.session.userLogged = userFromCookie;
    // }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

   
    next();
};

module.exports = userLoggedMiddleware