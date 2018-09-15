module.exports = function(sequelize, DataTypes) {
  var VanTripGroup = sequelize.define("VanTripGroup", {
    carpoolInstID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    passengerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isDriver: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
  VanTripGroup.associate = function(models) {
    // We're saying that a VanTripGroup should belong to an VanTrip
    // A VanTripGroup can't be created without an VanTrip due to the foreign key constraint
    VanTripGroup.belongsTo(models.VanTrip, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return VanTripGroup;
};