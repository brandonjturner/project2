var db = require("../models");

module.exports = function(app) {
    // Joins a group
    app.post("/join/group", function (req, res) {
        var groupID = req.body.group_ID;
        var userID = req.body.user_ID;

        db.VanGroup.create({
            passenger_ID: req.body.user_ID,
            pickup_point: req.body.pickup_point
        }).then(function(data) {
            res.status(200).end();
        });
    });
}