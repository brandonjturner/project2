module.exports = function(sequelize, DataTypes) {
    var VanList = sequelize.define("VanList", {
      make: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      model: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      mpg: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });

    VanList.associate = function(models) {
        // We're saying that a Post should belong to an PeopleList
        // A VanList can't be created without an PeopleList due to the foreign key constraint
        VanList.belongsTo(models.PeopleList, {
          foreignKey: {
            allowNull: false
          }
        });
    };
  
    return VanList;
  };