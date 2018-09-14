var db = require("../models");

module.exports = function(app) {
    // Find all People and return them to the user with res.json
  app.get("/api/people", function(req, res) {
    db.People.findAll({}).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  app.get("/api/people/:id", function(req, res) {
    // Find one People with the id in req.params.id and return them to the user with res.json
    db.People.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  app.post("/api/people", function(req, res) {
    // Create a People with the data available to us in req.body
    console.log(req.body);
    db.People.create(req.body).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  app.delete("/api/people/:id", function(req, res) {
    // Delete the People with the id available to us in req.params.id
    db.People.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });
}