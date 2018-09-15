var db = require("../models");

module.exports = function(app) {
    // Find all Van and return them to the user with res.json
  app.get("/api/vans", function(req, res) {
    //   console.log('hello');
    db.Van.findAll({}).then(function(dbVan) {
      res.json(dbVan);
    });
  });

  app.get("/api/vans/:id", function(req, res) {
    // Find one Van with the id in req.params.id and return them to the user with res.json
    db.Van.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbVan) {
      res.json(dbVan);
    });
  });

  app.post("/api/vans", function(req, res) {
    // Create a Van with the data available to us in req.body
    console.log(req.body);
    db.Van.create(req.body).then(function(dbVan) {
      res.json(dbVan);
    });
  });

  app.delete("/api/vans/:id", function(req, res) {
    // Delete the Van with the id available to us in req.params.id
    db.Van.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbVan) {
      res.json(dbVan);
    });
  });
}