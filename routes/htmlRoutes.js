var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/signin", function(req, res) {
    res.render("dummyLogin");
    //res.render("index");
  });

  // Load create page
  app.get("/create", function(req, res) {
    res.render("create");
  });

  //load create profile page
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
