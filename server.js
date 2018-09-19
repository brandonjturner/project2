// Routes


var express = require('express');
var app = express();
var passport = require('passport');
var LocalStrategy = require ("passport-local").Strategy;
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var db = require("./models");
var PORT = process.env.PORT || 3000;

//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret

//serialize
passport.serializeUser(function(user, done) {
    debugger;
    console.log(user);
    console.log('serializeUser here ^^');
    done(null, user.id);
 
});

// deserialize user 
passport.deserializeUser(function(id, done) {
    debugger;
    console.log(user);
    console.log('deserializeUser here ^^');
    User.findById(id).then(function(user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
    });
});
console.log('hi');
passport.use(new LocalStrategy(
    // console.log()
    function (username, password, done) {
        
        console.log(username, password);
        db.User.findOne({
            username: username
        }, function (err, user) {
            console.log(user);
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

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
// app.set('views', './app/views')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.use(require('./routes/auth.js')(passport));
// app.use(require('./routes/htmlRoutes.js'));
//  require("./routes/apiRoutes")(app);



//require("./routes/peopleApiRoutes.js")(app);
//require("./routes/carApiRoutes.js")(app);
//require("./routes/carpoolApiRoutes.js")(app);
// require("./Controllers/login.js")(app);
//Models


//Routes
// var authRoute = require('./routes/auth.js')(app);
// var authRoute = require('./routes/auth.js')(app,passport);

//load passport strategies 
// require('./app/config/passport/passport.js')(passport);
 

//Sync Database
// db.sequelize.sync().then(function() {
//     console.log('Nice! Database looks fine')
// }).catch(function(err) {
//     console.log(err, "Something went wrong with the Database Update!")
// });

// app.listen(5000, function(err) {
//     if (!err)
//         console.log("Site is live");
//     else console.log(err)
// });
var syncOptions = {force: false};
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
module.exports = app;
