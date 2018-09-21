'use strict'

const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

const auth = require('./api/v1/auth')
const people = require('./api/v1/people')
const user = require('./api/v1/user')

app.use('/api/v1/auth', auth)
app.use('/api/v1/people', people)
app.use('/api/v1/user', user)

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello Zemoga!' })
})

server.listen(5000, () => {
  console.log('Server app running on http://localhost:5000/')
})
