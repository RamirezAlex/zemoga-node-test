'use strict'

const crypto = require('crypto')

const encrypt = (password) => {
  const salt = 'Zemoga2018@'

  let hash = crypto.createHmac('sha256', salt)
  hash.update(password)
  return hash.digest('hex')
}

module.exports = {
  encrypt,
}
