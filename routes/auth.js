var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/create-profile', authController.create-profile);

app.get('/signin', authController.signin);

app.post('/create-profile', passport.authenticate('local-signup',  { successRedirect: '/profile/:id',
                                                    failureRedirect: '/create-profile'}
                                                    ));

app.get('/profile/:id',isLoggedIn, authController.dashboard);

app.get('/signin',authController.logout);

app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/profile/:id',
                                                    failureRedirect: '/signin'}
                                                    ));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
    }
}
