module.exports = function(sequelize, DataTypes) {
  var Carpool = sequelize.define("Carpool", {
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
  Carpool.associate = function(models) {
    // We're saying that a Carpool should belong to an People
    // A Carpool can't be created without an People due to the foreign key constraint
    Carpool.belongsTo(models.People, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Carpool;
};