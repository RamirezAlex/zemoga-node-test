'use strict'

const list = (req, res) => {
  const people = [
    {
      id: 1,
      fullName: 'Kayne West',
      positiveVotes: 45,
      negativeVotes: 12,
      category: 'Entertainment',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
    },
    {},
    {},
    {},
  ]

  res.send({ people })
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
