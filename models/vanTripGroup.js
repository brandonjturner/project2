//VanTripGroup Table which is a record of the people that rode in carpool instances
module.exports = function(sequelize, DataTypes) {
  var VanTripGroup = sequelize.define("VanTripGroup", {
    vanTripGroup_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    passenger_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  VanTripGroup.associate = function(models) {
    // We're saying that a VanTripGroup should belong to an VanTrip
    // A VanTripGroup can't be created without an VanTrip due to the foreign key constraint
    VanTripGroup.belongsTo(models.VanTrip, {
      foreignKey: 'vanTripGroup_ID'
    });
  };
  return VanTripGroup;
};