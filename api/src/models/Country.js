const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
  // defino el modelo
module.exports = (sequelize) => {
    sequelize.define('country', {
    id : {
      type : DataTypes.STRING(3),
      primaryKey: true,
      allowNull : false
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    flagsImg : {
      type : DataTypes.STRING,
      allowNull : false
    },
    continent : {
      type : DataTypes.STRING,
      allowNull : false
    },
    capital : {
      type : DataTypes.STRING,
      allowNull : false
    },
    subregión : {
      type : DataTypes.STRING,
    },
    area : {
    type : DataTypes.DECIMAL,
    },
    population : {
    type : DataTypes.INTEGER,
    },
  });
};
