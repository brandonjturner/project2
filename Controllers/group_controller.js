var db = require("../models");

module.exports = function (app) {
    
    app.get("/group", function (req, res) {
        db.VanGroup.findAll({
            where: {
                vanGroup_ID: 2058//req.body.input_vanGroup_ID
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
    })
    
    //displays groups
    app.get("/group/all", function (req, res) {
        db.VanGroup.aggregate(
            'vanGroup_ID', 'DISTINCT', {
                plain: false,
            }
        ).then(function (data) {
            var dataArray = [];
            var idArray = [];
            data.forEach(function (e) {
                idArray.push(e.vanGroup_ID);
            });

            data.forEach(function (e, index) {
                db.VanGroup.find({
                    where: {
                        vanGroup_ID: e.DISTINCT
                    }
                }).then(function (data) {
                    //console.log(data);
                    var vanGroup = {};
                    vanGroup.vanGroup_ID = data.dataValues.vanGroup_ID;
                    vanGroup.pickup_point = data.dataValues.pickup_point;
                    //console.log(vanGroup);
                    dataArray.push(vanGroup);
                    if (index === idArray.length - 1) {
                        var handlebarsObj = {
                            vanGroup: dataArray
                        }
                        //res.json(handlebarsObj);
                        res.render("groups", handlebarsObj);
                    }
                });
            });

            // console.log(dataArray);
            // res.json(dataArray);
            // //res.render("groups", data);
        });
    });

    // Joins a group
    app.post("/group/join", function (req, res) {
        db.VanGroup.findOrCreate({
            where: {
                vanGroup_ID: req.body.input_vanGroup_ID,
                passenger_ID: req.body.input_user_ID,
                pickup_point: req.body.input_pickup_point
            }
        }).then(function (data) {
            if (data[0]) {
                console.log('Already a member of Van Group');
            }
            else {
                console.log('Joined Van Group.');
            }
            
            if (data === null) {
                res.status(404).end();
            }
            res.status(200).end();
        
        });
    });
}