'use strict'

const { Router } = require('express')
const People = require('./peopleController')

const router = new Router()

router.get('/', People.list)
router.get('/vote/:user_id/:people_id/:vote', People.vote)

module.exports = router
