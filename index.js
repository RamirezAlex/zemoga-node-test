'use strict'

const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello Zemoga!' })
})

server.listen(5000, () => {
  console.log('Server app running on http://localhost:5000/')
})