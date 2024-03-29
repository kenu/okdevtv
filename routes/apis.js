const express = require('express')
const router = express.Router()
const tip = require('../lib/tip')
const bookmark = require('../lib/bookmark')
const okdevtv = require('../services/okdevtv-list')

/* GET tip listing. */
router.get('/tips', function (_req, res) {
  tip.list(res)
})

/* POST save tip */
router.post('/tip', function (req, res) {
  let data = req.body
  data.clientip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  console.log('ip', req.headers['x-forwarded-for'], req.socket.remoteAddress)
  tip.save(res, data)
  res.json({
    status: 200,
  })
})

/* OKdevTV list */
router.get('/okdevtv-list', async function (req, res) {
  const items = await okdevtv.getItems(req)
  const list = items.map((item) => {
    return {
      date: item.date,
      topic: item.topic,
      movie: item.movie,
      slide: item.slide,
    }
  })
  res.json(list)
})

router.post('/bookmark', async function (req, res) {
  let data = { pathname: req.body.pathname, userId: req.session.userId }
  await bookmark.create(data)
  res.json({
    status: 200,
  })
})

module.exports = router
