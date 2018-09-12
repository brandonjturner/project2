module.exports = function(sequelize, DataTypes) {
    var People = sequelize.define("People", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      pickUpLocation: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

    People.associate = function(models) {
        // Associating People with Car
        // When an People is deleted, also delete any associated Car
        People.hasMany(models.Car, {
          onDelete: "cascade"
        });

        People.hasMany(models.Carpool, {
            onDelete: "cascade"
        });

        People.hasMany(models.CarpoolPeople, {
            onDelete: "cascade"
        });

      };
  
    return People;
  };