var db = require("../models");
var express = require('express');
var router = express.Router();

function isAuthenticated(req, res, next) {
  debugger;
  if (req.user.authenticated) {
    return next();
  }

  console.log('hi from isAuthenticated failed')
  res.redirect('/');
}



// Load index page
router.get("/", function(req, res) {
  res.render("index");
});


// router.use(isAuthenticated);

// Load example page and pass in an example by id
router.get("/create", function(req, res) {
  res.render("create");
});

router.get("/join", function(req, res) {
  res.render("join");
});

// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
  res.render("404");
});

module.exports = router;
