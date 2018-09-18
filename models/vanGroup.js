module.exports = function(sequelize, DataTypes) {
    var VanGroup = sequelize.define("VanGroup", {
      cpID: {
        type: DataTypes.INTEGER,
        allowNull: false
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

    VanGroup.associate = function(models) {
        // We're saying that a VanGroup should belong to an User
        // A VanGroup can't be created without a User due to the foreign key constraint
        VanGroup.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

        VanGroup.belongsTo(models.Van, {
            foreignKey: {
                allowNull: false
            }
        });
    };
  
  
    return VanGroup;
  };