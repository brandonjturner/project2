var db = require("../models");

module.exports = function(app) {
    // Find all PeopleList and return them to the user with res.json
  app.get("/api/peoplelist", function(req, res) {
    db.PeopleList.findAll({}).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  app.get("/api/peoplelist/:id", function(req, res) {
    // Find one PeopleList with the id in req.params.id and return them to the user with res.json
    db.PeopleList.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  app.post("/api/peoplelist", function(req, res) {
    // Create a PeopleList with the data available to us in req.body
    console.log(req.body);
    db.PeopleList.create(req.body).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });

  app.delete("/api/peoplelist/:id", function(req, res) {
    // Delete the PeopleList with the id available to us in req.params.id
    db.PeopleList.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPeople) {
      res.json(dbPeople);
    });
  });
}