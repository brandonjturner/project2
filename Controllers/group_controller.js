var db = require("../models");

module.exports = function(app) {
    //displays groups
    app.get("/group/all", function (req, res) {
        db.VanGroup.aggregate(
            'vanGroup_ID', 'DISTINCT', { plain: false }
        ).then(function(data) {
            res.render("index", data);
        });
    });
    
    // Joins a group
    app.post("/group/join", function (req, res) {
        db.VanGroup.create({
            vanGroup_ID: req.body.input_group_ID,
            passenger_ID: req.body.input_user_ID,
            pickup_point: req.body.input_pickup_point
        }).then(function(data) {
            res.status(200).end();
        });
    });
}