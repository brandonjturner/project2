var db = require("../models");
const Sequelize = require("sequelize");

module.exports = function (app) {

    // Returns user profile with provided email from body
    app.get("/profile/email=:email", function (req, res) {
        db.User.findAll({
                where: {
                    email: req.params.email
                },
                include: [{
                    model: db.VanGroup
                }]
            })
            .then(function (data) {
                res.json(data);
            });
    });

    // Returns user profile with provided ID from body
    app.get("/profile/:id", function (req, res) {
        db.User.findAll({
                where: {
                    id: req.params.id
                },
                include: [{
                        model: db.VanGroup
                    },
                    {
                        model: db.VanTripGroup,
                        include: [{
                            model: db.VanTrip,
                        }]
                    }
                ]
            })
            .then(function (data) {
                
                if (data === undefined || data === []) {
                    res.render("dummyLogin");
                }
                else {
                    
                    var isAdmin = data[0].admin;
                    var handlebarsObj = {
                        user: data[0],
                        admin: data[0]
                    };

                    if (isAdmin === true) {
                        handlebarsObj.user = false;
                    } else {
                        handlebarsObj.admin = false;
                    }
                    //console.log(handlebarsObj.user);
                    //res.json(data);
                    res.render("index", handlebarsObj);
                }
            });
    });

    // Posts a new user to user table
    app.post("/profile/create", function (req, res) {
        var adminCheck = req.body.input_admin;
        var adminCode = 'admin';
        var isUserAdmin = false;
        if (adminCheck == adminCode) {
            isUserAdmin = true;
        }

        db.User.findOrCreate({
                where: {
                    email: req.body.input_email
                },
                defaults: {
                    email: req.body.input_email,
                    password: req.body.input_password,
                    first_name: req.body.input_firstName,
                    last_name: req.body.input_lastName,
                    //company_name: req.body.input_companyName,
                    home_address: req.body.input_homeAddress,
                    phone_number: req.body.input_phoneNumber,
                    pref_pickup: req.body.input_prefPickup,
                    admin: isUserAdmin
                }
            })
            .then(function (data) {
                //console.log(adminCheck);
                if (data[1]) {
                    console.log('User already exists');
                } else {
                    console.log('Created User');
                }

                if (data === null) {
                    res.status(404).end();
                }
                res.status(200).end();
            });
    });
}