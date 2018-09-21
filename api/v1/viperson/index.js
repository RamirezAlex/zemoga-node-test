'use strict'

const { Router } = require('express')
const VIPerson = require('./vipersonController')

const router = new Router()

router.get('/', VIPerson.list)
router.post('/vote/', VIPerson.vote)

module.exports = router
