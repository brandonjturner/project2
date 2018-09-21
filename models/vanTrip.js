//VanTrip Table which is a record of carpool trip instances
module.exports = function(sequelize, DataTypes) {
  var VanTrip = sequelize.define("VanTrip", {
    van_ID: {
      type: DataTypes.INTEGER,
      //TODO: change when vans are created
      allowNull: true
    },
    driver_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    begin_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    distance_traveled: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  });

  VanTrip.associate = function(models) {
    // Associating VanTrip with VanTripGroup
    // When an VanTrip is deleted, also delete any associated VanTripGroup
    VanTrip.hasMany(models.VanTripGroup, {
      onDelete: "cascade",
      foreignKey: "vanTripGroup_ID"
    });
  }

  return VanTrip;
};