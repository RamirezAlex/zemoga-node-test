'use strict'

const { Router } = require('express')
const User = require('./userController')

const router = new Router()

router.get('/', User.list)

module.exports = router
