//requiring dontenv
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");
var app = express();
var passport = require('passport') , LocalStrategy = require('passport-local').Strategy;
var PORT = process.env.PORT || 3000;

var session    = require('express-session')
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// For Passport
//app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static("public"));
app.use(express.static(__dirname+'/public'));

var DateFormats = {
  short: "DD MMMM - YYYY",
  long: "MMM Do HH:mm"
};

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    helpers: {
      formatDate: function (datetime, format) {
        if (moment) {
          format = DateFormats[format] || format;
          return moment(datetime).format(format);
        }
        else {
          return datetime;
        }
      }
    },
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./Controllers/login_controller")(app);
require("./Controllers/profile_controller")(app);
require("./Controllers/trip_controller")(app);
require("./Controllers/tripGroup_controller")(app);
require("./Controllers/admin_controller")(app);
require("./Controllers/group_controller")(app);
require("./routes/htmlRoutes")(app);
require("./routes/auth")(app, passport);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//PASSPORT Authentication setup
app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});
// app.listen(3000, function(err) {
//     if (!err)
//         console.log("Site is live");
//     else console.log(err)
// });

// var passport   = require('passport')
// var session    = require('express-session')
// //For BodyParser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // For Passport
// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

var env = require('dotenv').load();

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
