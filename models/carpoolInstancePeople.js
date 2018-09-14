module.exports = function(sequelize, DataTypes) {
  var CarpoolInstancePeople = sequelize.define("CarpoolInstancePeople", {
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
  CarpoolInstancePeople.associate = function(models) {
    // We're saying that a CarpoolInstancePeople should belong to an CarpoolInstance
    // A CarpoolInstancePeople can't be created without an CarpoolInstance due to the foreign key constraint
    CarpoolInstancePeople.belongsTo(models.CarpoolInstance, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return CarpoolInstancePeople;
};