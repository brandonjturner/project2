module.exports = function(sequelize, DataTypes) {
    var CarpoolPeople = sequelize.define("CarpoolPeople", {
      carpoolID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      passengerID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      currentRider: {
          type: DataTypes.BOOLEAN,
          allowNull: true
      }
    });

    CarpoolPeople.associate = function(models) {
        // We're saying that a CarpoolPeople should belong to an People
        // A CarpoolPeople can't be created without an People due to the foreign key constraint
        CarpoolPeople.belongsTo(models.People, {
          foreignKey: {
            allowNull: false
          }
        });

        CarpoolPeople.belongsTo(models.Carpool, {
            foreignKey: {
                allowNull: false
            }
        });
    };
  
  
    return CarpoolPeople;
  };