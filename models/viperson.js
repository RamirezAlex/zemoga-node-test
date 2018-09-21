'use strict'

module.exports = (sequelize, DataTypes) => {
  const VIPerson = sequelize.define('VIPerson', {
    fullname: DataTypes.STRING,
    positive: DataTypes.INTEGER,
    negative: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.STRING
  }, {})
  VIPerson.associate = function(models) {
    // associations can be defined here
  }
  return VIPerson
}
