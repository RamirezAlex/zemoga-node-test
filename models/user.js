'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    marital: {
      type: DataTypes.ENUM('Single', 'Married', 'Divorced', 'Widowed', 'Separated'),
      defaultValue: 'Single'
    }
  }, {})
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
