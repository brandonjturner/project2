var authController = require('../controllers/authcontroller.js');
var express = require('express');
var router = express.Router();
// var passport = require ("passport");








 
module.exports = function(passport) {
    // router.get('/signup', authController.signup);
    // router.get('/signin', authController.signin);
    // router.post('/signup', passport.authenticate('local-signup', {
    //         successRedirect: '/dashboard',
    //         failureRedirect: '/signup'
    //     }
    // ));
    router.post('/login', 
        passport.authenticate('local', { failureRedirect: '/login' }), 
        function(req, res) {
            console.log('hello');
            res.redirect('/');
        }
    );

    return router;
};




