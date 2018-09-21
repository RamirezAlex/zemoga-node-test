'use strict'

module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    vote: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    viperson_id: DataTypes.INTEGER
  }, {})
  Vote.associate = function(models) {
    // associations can be defined here
  }
  return Vote
}