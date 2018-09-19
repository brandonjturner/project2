var db = require("../models");

module.exports = function(app) {
    //gets all users from a specific group
    app.get("/admin/group/users", function (req,res) {
        db.VanGroup.findAll({
            where: {
                vanGroup_ID: req.body.input_group_ID
            }
        })
        .then(function (data) {
            var passengers = [];

            data.forEach(function (e) {
                passengers.push(e.dataValues.passenger_ID);
            });

            db.User.findAll({
                where: {
                    id: passengers
                }
            })
            .then(function (data) {
                res.render("index", data);
            });
        }); 
    });
    
    // creates a group with a vanGroup_ID matching the admin that created it
    app.post("/admin/group/create", function (req, res) {
        db.VanGroup.create({
            vanGroup_ID: req.body.input_user_ID,
            passenger_ID: req.body.input_user_ID,
            pickup_point: req.body.input_pickup_point
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
        });
    });

    //updates a specific group
    app.put("/admin/group/update", function (req, res) {
        
        db.VanGroup.update(
            req.body, 
            {
                where: { vanGroup_ID: req.body.input_group_ID }
            }
        )
        .then(function (data) {
            res.status(200).end();
        });
    });
}