var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

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
}