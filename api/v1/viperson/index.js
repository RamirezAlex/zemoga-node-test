'use strict'

const { Router } = require('express')
const VIPerson = require('./vipersonController')

const router = new Router()

router.get('/', VIPerson.list)
router.get('/vote/:user_id/:people_id/:vote', VIPerson.vote)

module.exports = router
