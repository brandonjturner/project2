var db = require("../models");

module.exports = function(app) {
    // Find all Carpool and return them to the user with res.json
  app.get("/api/carpool", function(req, res) {
    //   console.log('hello');
    db.Carpool.findAll({}).then(function(dbCarpool) {
      res.json(dbCarpool);
    });
  });

  app.get("/api/carpool/:id", function(req, res) {
    // Find one Carpool with the id in req.params.id and return them to the user with res.json
    db.Carpool.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCarpool) {
      res.json(dbCarpool);
    });
  });

  app.post("/api/carpool", function(req, res) {
    // Create a Carpool with the data available to us in req.body
    console.log(req.body);
    db.Carpool.create(req.body).then(function(dbCarpool) {
      res.json(dbCarpool);
    });
  });

  app.delete("/api/carpool/:id", function(req, res) {
    // Delete the Carpool with the id available to us in req.params.id
    db.Carpool.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCarpool) {
      res.json(dbCarpool);
    });
  });
}