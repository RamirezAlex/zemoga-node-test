'use strict'

const { Router } = require('express')
const Auth = require('./authController')

const router = new Router()

router.get('/:username', Auth.logout)
router.post('/', Auth.login)

module.exports = router
