var db = require("../models");

module.exports = function(app) {
    //gets all current trips with a link to their van trip groups
    app.get("trip/all", function (req, res) {
        db.VanTrip.findAll({}, { include: [{model: db.VanTripGroup}]})
        .then(function (data) {
            res.render("index", data);
        });
    });

    //sends to create a trip page
    app.get("/trip/create/:id", function (req, res) {
        db.VanGroup.findAll({
            where: {
                vanGroup_ID: req.params.id
            },
            include: [{model: db.User}]
        })
        .then(function (data) {
            var userData = [];

            data.forEach(function (e) {
                userData.push(e.User);
            });

            //console.log(userData);

            var handlebarsObj = {
                data: data[0],
                userData: userData
            }
            res.render("tripCreation", handlebarsObj);
        })
    });

    //gets a specific trip with links to its group
    app.get("trip/:id", function (req, res) {
        db.VanTrip.findAll({
            where: {
                id: req.params.id
            },
            include: {model: db.VanTripGroup}
        }).then(function (data) {
            res.json(data)
        });
    });

    //creates a new van trip
    app.post("/trip/create", function (req, res) {
        db.VanTrip.create({
            vanGroup_ID: req.body.input_vanGroup_ID,
            date: req.body.input_date,
            driver_ID: req.body.input_driver_ID,
            begin_time: req.body.input_begin_time,
            
        })
        .then(function (data) {
            res.json(data);
        });
    });

    //updates trip driver or times
    app.put("trip/update", function (req, res) {
        db.VanTrip.update({
            driver_ID: req.body.input_driver_ID,
            begin_time: req.body.input_begin_time,
            end_time: req.body.input_end_time
        },
        {
            where: {
                id: req.body.input_trip_ID
            }
        })
        .then(function (data) {
            res.status(200).end();
        });
    });
}