var db = require("../models");

module.exports = function(app) {

    // Returns user profile with provided ID from body
    app.get("/profile", function(req, res) {
        db.User.findAll({
            where: {
                id: req.body.userId
            }
        })
        .then(function(data) {
            var handlebarsObj = {
                user_data: data
            };

            res.render("index", handlebarsObj);
        });
    });

    // Posts a new user to user table
    app.post("/api/user", function (req,res) {
        var adminCheck = req.body.input_admin;
        var adminCode = 'admin';
        var isUserAdmin = false;
        if (adminCheck === adminCode) { var isUserAdmin = true; }
        
        db.User.create({
            email: req.body.input_email,
            password: req.body.input_password,
            first_name: req.body.input_firstname,
            last_name: req.body.input_lastname,
            home_address: req.body.input_homeAddress,
            phone_number: req.body.input_phoneNumber,
            about: req.body.input_about,
            pref_pickup: req.body.input_prefPickup,
            admin: isUserAdmin
        })
        .then(function(data) {
            if (data === null) {
                res.status(404).end();
            }
            res.status(200).end();
        });
    });
}