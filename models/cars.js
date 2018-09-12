module.exports = function(sequelize, DataTypes) {
    var Car = sequelize.define("Car", {
      make: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      model: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      mpg: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });

    Car.associate = function(models) {
        // We're saying that a Post should belong to an People
        // A Car can't be created without an People due to the foreign key constraint
        Car.belongsTo(models.People, {
          foreignKey: {
            allowNull: false
          }
        });
    };
  
    return Car;
  };