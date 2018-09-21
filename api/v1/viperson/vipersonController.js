'use strict'

const { VIPerson, Vote } = require('./../../../models')

const list = (req, res) => {
  VIPerson.findAll()
    .then(vipeople => {
      return res.status(200).send(vipeople)
    })
    .catch(error => {
      return res.status(500).send({ 
        message: 'Internal server error.', 
        error
      })
    })
}

const vote = (req, res) => {
  // const { user_id, people_id, vote } = req.body
  
  console.log(req.params)
  res.send({ message: 'Successful vote' })
}

module.exports = {
  list,
  vote
}
