module.exports = function(sequelize, DataTypes) {
  var VanTrip = sequelize.define("VanTrip", {
    carpool: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    car: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    beginTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    distanceTraveled: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  VanTrip.associate = function(models) {
    // Associating VanTrip with VanTripGroup
    // When an VanTrip is deleted, also delete any associated VanTripGroup
    VanTrip.hasMany(models.VanTripGroup, {
      onDelete: "cascade"
    });
  }

  return VanTrip;
};