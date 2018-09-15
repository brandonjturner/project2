var db = require("../models");

module.exports = function(app) {
    // Find all Cars and return them to the user with res.json
  app.get("/api/cars", function(req, res) {
    //   console.log('hello');
    db.Car.findAll({}).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.get("/api/cars/:id", function(req, res) {
    // Find one Car with the id in req.params.id and return them to the user with res.json
    db.Car.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.post("/api/cars", function(req, res) {
    // Create a Car with the data available to us in req.body
    console.log(req.body);
    db.Car.create(req.body).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.delete("/api/cars/:id", function(req, res) {
    // Delete the Car with the id available to us in req.params.id
    db.Car.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });
}