var db = require("../models");

module.exports = function(app) {
    // Find all VanList and return them to the user with res.json
  app.get("/api/vanlists", function(req, res) {
    console.log('hello');
    db.VanList.findAll({}).then(function(dbVanList) {
      res.json(dbVanList);
    });
  });

  app.get("/api/vanlists/:id", function(req, res) {
    // Find one VanList with the id in req.params.id and return them to the user with res.json
    db.VanList.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbVanList) {
      res.json(dbVanList);
    });
  });

  app.post("/api/vanlists", function(req, res) {
    // Create a VanList with the data available to us in req.body
    console.log(req.body);
    db.VanList.create(req.body).then(function(dbVanList) {
      res.json(dbVanList);
    });
  });

  app.delete("/api/vanlists/:id", function(req, res) {
    // Delete the VanList with the id available to us in req.params.id
    db.VanList.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbVanList) {
      res.json(dbVanList);
    });
  });
}