var db = require("../models");

module.exports = function(app) {
    //displays groups
    app.get("/all/group", function (req, res) {
        db.VanGroup.aggregate(
            'vanGroup_ID', 'DISTINCT', { plain: false }
        ).then(function(data) {
            res.render("index", data);
        });
    });
    
    // Joins a group
    app.post("/join/group", function (req, res) {
        db.VanGroup.create({
            vanGroup_ID: req.body.group_ID,
            passenger_ID: req.body.user_ID,
            pickup_point: req.body.pickup_point
        }).then(function(data) {
            res.status(200).end();
        });
    });
}