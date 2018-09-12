module.exports = function(sequelize, DataTypes) {
  var CarpoolInstance = sequelize.define("CarpoolInstance", {
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
  return CarpoolInstance;
};