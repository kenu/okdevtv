const express = require('express')
const router = express.Router()
const okdevtv = require('../services/okdevtv-list')

router.get('/', function (req, res) {
  res.render('index', { user: req.session.user })
})

router.get('/okdevtv-list', async function (req, res) {
  const items = await okdevtv.getItems(req)

  res.render('okdevtv-list', {
    title: '<a href="/">OKdevTV List</a>',
    desc: 'OKdevTV',
    items: items,
  })
})

// json api with cors
router.get('/api/okdevtv-list', async function (req, res) {
  const items = await okdevtv.getItems(req)
  res.header('Access-Control-Allow-Origin', '*')
  const data = {
    items: items.map((item) => {
      return item._rawData
    }),
  }
  res.json(data)
})

module.exports = router

router.get('/f/:url', function (req, res) {
  const url = req.params.url
  res.redirect(url)
})

router.get('/645', function (req, res) {
  function getRandomList(max, count) {
    const list = []
    for (let i = 0; i < max; i++) {
      list.push(i + 1)
    }
    ArrayUtils.shuffle(list)
    return list.slice(0, count)
  }
  const header = `<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body style="text-align: center;">
  <h1>로또 번호 뽑기</h1>`
  const lotto = getRandomList(45, 6)
    .sort((a, b) => a - b)
    .join(', ')
  const reloadButton =
    '<hr/><button onclick="location.reload()">다시 뽑기</button>'
  res.header('Content-Type', 'text/html')
  const html = `${header} <h1> ${lotto} </h1> ${reloadButton}`
  res.end(html)
})

const ArrayUtils = {
  shuffle: function (array) {
    // Knuth suffle: https://stackoverflow.com/a/2450976
    let currentIndex = array.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  },
}
