//Van table which is the class for a car pool trip
module.exports = function(sequelize, DataTypes) {
  var Van = sequelize.define("Van", {
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departureTime: {
      type: DataTypes.TIME,
      allowNull: false
    }
  });
  Van.associate = function(models) {
    // We're saying that a Van should belong to an User
    // A Van can't be created without a User due to the foreign key constraint
    Van.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Van;
};