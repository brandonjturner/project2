var db = require("../models");

module.exports = function(app) {
    
    //creates a new van group for an instance of a trip
    app.post("/trip/group/create", function (req, res) {
        db.VanTripGroup.findOrCreate({
            where: {
                vanTripGroup_ID: req.body.input_vanTripGroup_ID,
                passenger_ID: req.body.input_passenger_ID,
            
            }
        })
        .then(function (data) {
            res.status(200).end;
        });
    });

    //updates a specific van group for an instance of a trip
    app.put("/trip/group/update", function (req, res) {
        db.VanTripGroup.update({
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