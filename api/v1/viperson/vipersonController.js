'use strict'

const Sequelize = require('sequelize')
const { VIPerson, Vote } = require('./../../../models')

const sequelize = new Sequelize({
  "username": "postgres",
  "password": "root",
  "database": "zemoga",
  "host": "127.0.0.1",
  "dialect": "postgres"
})

const list = (req, res) => {
  sequelize.query(
    `SELECT "VIPeople".*, count("Votes"."vote") FILTER (WHERE "Votes"."vote" = TRUE) AS "positive",
    count("Votes"."vote") FILTER (WHERE "Votes"."vote" = FALSE) AS "negative" FROM "VIPeople"
    LEFT JOIN "Votes" ON "VIPeople"."id" = "Votes"."viperson_id" GROUP BY "VIPeople"."id" ORDER BY "VIPeople"."id"`,
    { type: sequelize.QueryTypes.SELECT}
  )
  .then(vipeople => {
    return res.status(200).send(vipeople)
  })
}

/*
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
*/

const vote = (req, res) => {
  const { user_id, viperson_id, vote } = req.body
  
  Vote.create({
    vote,
    user_id,
    viperson_id
  })
    .then(() => {
      return res.status(200).send({ message: 'Successful vote' })
    })
    .catch(error => {
      return res.status(500).send({ 
        message: 'Internal server error.', 
        error
      })
    })
}

module.exports = {
  list,
  vote
}
