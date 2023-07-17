const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Diet", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncremet: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
