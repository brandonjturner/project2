//user table
module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('User', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        first_name: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
 
        last_name: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },

        // company_name: {
        //     type: Sequelize.STRING,
        //     notEmpty: true,
        //     allowNull: false
        // },

        home_address: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },

        phone_number: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.NOW()
        },

        pref_pickup: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false 
        },

        admin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }


    });

    User.associate = function(models) {
        // Associating User with Van, VanList, and VanGroup
        // When an User is deleted, also delete any associated Van, VanList, and VanGroup
        User.hasMany(models.VanList, {
          onDelete: "cascade"
        });

        User.hasMany(models.Van, {
            onDelete: "cascade"
        });

        User.hasMany(models.VanGroup, {
            onDelete: "cascade",
            foreignKey: "passenger_ID"
        });

      };

    return User;
 
}