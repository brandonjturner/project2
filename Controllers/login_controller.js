var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var db = require("../models");

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

    app.post('/login',
        passport.authenticate('local', {
            failureRedirect: '/login'
        }),
        function (req, res) {
            res.redirect('/');
        });

    //code to make dummy login work for current testing
    app.get('/dummylogin', function (req, res) {
        console.log(req.body.input_email);
        console.log(req.body.input_password);
        db.User.findOne({
            where: {
                email: req.body.input_email,
                password: req.body.input_password
            }
        })
        .then(function (data) {
            res.json(data);
        });
    });
}