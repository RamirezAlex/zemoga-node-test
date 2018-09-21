'use strict'

module.exports = (sequelize, DataTypes) => {
  const VIPerson = sequelize.define('VIPerson', {
    fullname: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING
  }, {})
  VIPerson.associate = function(models) {
    // associations can be defined here
  }
  return VIPerson
}
