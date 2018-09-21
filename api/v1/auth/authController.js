'use strict'

const { User } = require('./../../../models')
const { encrypt } = require('../user/userHelper')

const login = (req, res) => {
  const { username, password } = req.body

  User.findOne({where: {username}})
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `User ${email} doesn't exist!`
        })
      }

      if (user.password !== encrypt(password)) {
        return res.status(404).send({
          message: `Username ${username} and password entered don't are incorrect`
        })
      }
      
      return res.send({ message: 'User logged in'})
    })
    .catch(error => {
      return res.status(500).send({ 
        message: 'Internal server error.', 
        error
      })
    })
}

const logout = (req, res) => {
  const { username } = req.params

  return res.status(404).send({
    message: `User ${username} has logout`
  })
}

module.exports = {
  login,
  logout
}
