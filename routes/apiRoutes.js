var db = require("../models");

//---***---Availablie API Routes---***---
//TODO: needs descriptions
//All routes prepend with /api/
//  1. /peoplelist
//  2. /peoplelist/(id to search)
//  3. /vanlist
//  4. /vanlist/(id to search)
//  5. /van                          
//  6. /van/(id to search)

module.exports = function (app) {

  //-----******-----PEOPLE API ROUTES-----*****----------******-----PEOPLE API ROUTES-----*****-----
  //Description: 

  // Find all PeopleList and return them to the user with res.json
  app.get("/api/peoplelist", function (req, res) {
    db.PeopleList.findAll({}).then(function (dbPeople) {
      res.json(dbPeople);
    });
  });

  app.get("/api/peoplelist/:id", function (req, res) {
    // Find one PeopleList with the id in req.params.id and return them to the user with res.json
    db.PeopleList.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbPeople) {
      res.json(dbPeople);
    });
  });

  app.post("/api/peoplelist", function (req, res) {
    // Create a PeopleList with the data available to us in req.body
    console.log(req.body);
    db.PeopleList.create(req.body).then(function (dbPeople) {
      res.json(dbPeople);
    });
  });

  app.delete("/api/peoplelist/:id", function (req, res) {
    // Delete the PeopleList with the id available to us in req.params.id
    db.PeopleList.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPeople) {
      res.json(dbPeople);
    });
  });
  //-----******-----END PEOPLE API ROUTES-----*****----------******-----END PEOPLE API ROUTES-----*****-----



  //-----******-----VAN API ROUTES-----*****----------******-----VAN API ROUTES-----*****-----
  //Description: 
  // Find all VanList and return them to the user with res.json
  app.get("/api/vanlists", function (req, res) {
    console.log('hello');
    db.VanList.findAll({}).then(function (dbVanList) {
      res.json(dbVanList);
    });
  });

  app.get("/api/vanlists/:id", function (req, res) {
    // Find one VanList with the id in req.params.id and return them to the user with res.json
    db.VanList.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbVanList) {
      res.json(dbVanList);
    });
  });

  app.post("/api/vanlists", function (req, res) {
    // Create a VanList with the data available to us in req.body
    console.log(req.body);
    db.VanList.create(req.body).then(function (dbVanList) {
      res.json(dbVanList);
    });
  });

  app.delete("/api/vanlists/:id", function (req, res) {
    // Delete the VanList with the id available to us in req.params.id
    db.VanList.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbVanList) {
      res.json(dbVanList);
    });
  });
  //-----******-----END VAN API ROUTES-----*****----------******-----END VAN API ROUTES-----*****-----



  //-----******-----VANPOOL API ROUTES-----*****----------******-----VANPOOL API ROUTES-----*****-----
  //Description: 
  // Find all Van and return them to the user with res.json
  app.get("/api/vans", function (req, res) {
    //   console.log('hello');
    db.Van.findAll({}).then(function (dbVan) {
      res.json(dbVan);
    });
  });

  app.get("/api/vans/:id", function (req, res) {
    // Find one Van with the id in req.params.id and return them to the user with res.json
    db.Van.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbVan) {
      res.json(dbVan);
    });
  });

  app.post("/api/vans", function (req, res) {
    // Create a Van with the data available to us in req.body
    console.log(req.body);
    db.Van.create(req.body).then(function (dbVan) {
      res.json(dbVan);
    });
  });

  app.delete("/api/vans/:id", function (req, res) {
    // Delete the Van with the id available to us in req.params.id
    db.Van.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbVan) {
      res.json(dbVan);
    });
  });
  //-----******-----END VANPOOL API ROUTES-----*****----------******-----END VANPOOL API ROUTES-----*****-----




};