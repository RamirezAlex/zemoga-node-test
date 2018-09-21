'use strict'

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = http.createServer(app)

const auth = require('./api/v1/auth')
const viperson = require('./api/v1/viperson')
const user = require('./api/v1/user')

app.use('/api/v1/auth', auth)
app.use('/api/v1/viperson', viperson)
app.use('/api/v1/user', user)

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello Zemoga!' })
})

server.listen(5000, () => {
  console.log('Server app running on http://localhost:5000/')
})
