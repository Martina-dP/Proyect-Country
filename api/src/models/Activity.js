const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    difficulty: {
      type : DataTypes.DECIMAL,
      allowNull : false
    },
    duration: {
      type : DataTypes.DECIMAL,
      allowNull : false
    },
    season : {
      type : DataTypes.ENUM("summer", "autumn", "winter", "spring"),
      allowNull : false
    },
  });
};