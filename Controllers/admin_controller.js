var db = require("../models");

module.exports = function(app) {
    app.post("/create/group", function (req, res) {
        var adminID = req.body.user_ID;

        db.VanGroup.create({
            passenger_ID: adminID,
            pickup_point: req.body.pickup_point
        }).then(function(data) {
            // console.log(data);
            // db.User.findAll({ 
            //     where: {
            //         id: 1
            //     },
            //     include: [{model: db.VanGroup}]
            // }).then(function(data) {
            //     console.log(data[0].dataValues.VanGroups);
            // })
            res.status(200).end();
        })
    });
}