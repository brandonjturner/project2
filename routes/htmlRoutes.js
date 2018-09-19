var db = require("../models");
var express = require('express');
var router = express.Router();

<<<<<<< HEAD
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
=======
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load create page
  app.get("/create", function(req, res) {
    res.render("create");
  });

  app.get("/create-profile", function(req, res) {
    res.render("profileCreation");
  });

  // Load join page
  app.get("/join", function(req, res) {
    res.render("join");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
>>>>>>> e7db8718e8c571c73c4d807d3d2dc642b9a246f7
