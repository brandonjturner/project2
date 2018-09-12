module.exports = function(sequelize, DataTypes) {
    var CarpoolInstance = sequelize.define("CarpoolInstance", {
      carpool: {
        type: DataTypes.JSON,
        allowNull: false
      },
      car: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      beginTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endTime: {
          type: DataTypes.DATE,
          allowNull: false
      },
      distanceTraveled: {
          type: DataTypes.FLOAT,
          allowNull: false
      }
    });
  
    return CarpoolInstance;
  };