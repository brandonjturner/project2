var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var db = require("../models");

//passport login
module.exports = function (app) {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.findOne({
                username: username
            }, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                if (!user.verifyPassword(password)) {
                    return done(null, false);
                }
                return done(null, user);
            });
        }
    ));

    //if login failure
    app.post('/login',
        passport.authenticate('local', {
            failureRedirect: '/login'
        }),
        function (req, res) {
            res.redirect('/');
        });

    //code to make dummy login work for current testing
    app.post('/dummyLogin', function (req, res) {
        console.log(req.body.input_email);
        console.log(req.body.input_password);
        db.User.findOrCreate({
            where: {
                email: req.body.input_email,
                password: req.body.input_password
            }
        })
        .then(function (data) {
            if (!data[1]) {
                res.json(data[0]);
            }
        });
    });
}