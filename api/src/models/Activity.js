const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull : false
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    severity : {
      type : DataTypes.DECIMAL,
      allowNull : false
    },
    duration : {
      type : DataTypes.DECIMAL,
      allowNull : false
    },
    season : {
      type : DataTypes.ENUM("summer", "autumn", "winter", "spring"),
      allowNull : false
    },
  });
};