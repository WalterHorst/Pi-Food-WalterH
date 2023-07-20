const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: { type: DataTypes.STRING, allowNull: false },
      resumen: { type: DataTypes.TEXT, allowNull: false },
      healtScore: { type: DataTypes.INTEGER, allowNull: false },
      Pasos: { type: DataTypes.TEXT, allowNull: false },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

//
