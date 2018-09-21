'use strict'

const { Router } = require('express')
const User = require('./userController')

const router = new Router()

router.get('/', User.list)
router.post('/', User.register)

module.exports = router
