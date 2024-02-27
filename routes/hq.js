const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  const user = req.session.user
  res.render('hq/index', { user: user })
})

module.exports = router
