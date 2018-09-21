
'use strict'

const { User } = require('./../../../models')
const { encrypt } = require('./userHelper')

const register = (req, res) => {
  const { username, password, age, marital } = req.body

  return User.find({where: {username}})
    .then(user => {
      if(user) {
        return res.status(404).send({ message: `${username} already exist` })
      }

      User.create({
        username,
        password: encrypt(password),
        age,
        marital
      }).then(result => {
        const user = result.toJSON()
        delete user.password

        return res.status(200).send({ 
          message: `${username} has been registered successfully`, 
          user
        })
      })
    })
    .catch(error => {
      return res.status(500).send({ 
        message: 'Internal server error.', 
        error
      })
    })
  
  res.send({ username, password, age, marital })
}

module.exports = {
  register
}
