'use strict'

const { Router } = require('express')
const Auth = require('./authController')

const router = new Router()

router.get('/', Auth.login)

module.exports = router
