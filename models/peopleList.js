module.exports = function(sequelize, DataTypes) {
    var PeopleList = sequelize.define("PeopleList", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      pickUpLocation: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

    // PeopleList.associate = function(models) {
    //     // Associating PeopleList with Car
    //     // When an PeopleList is deleted, also delete any associated Car
    //     PeopleList.hasMany(models.VanList, {
    //       onDelete: "cascade"
    //     });

    //     PeopleList.hasMany(models.Van, {
    //         onDelete: "cascade"
    //     });

    //     PeopleList.hasMany(models.VanGroup, {
    //         onDelete: "cascade"
    //     });

    //   };
  
    return PeopleList;
  };