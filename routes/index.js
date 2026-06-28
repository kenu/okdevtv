const express = require('express')
const router = express.Router()
const okdevtv = require('../services/okdevtv-list')
const axios = require('axios')

// Health check endpoint for Docker
router.get('/health', function (req, res) {
  res.status(200).json({ status: 'ok' })
})

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

router.get('/645', async function (req, res) {
  function getRandomList(max, count) {
    const list = []
    for (let i = 0; i < max; i++) {
      list.push(i + 1)
    }
    ArrayUtils.shuffle(list)
    return list.slice(0, count)
  }
  const lotto = getRandomList(45, 6)
    .sort((a, b) => a - b)
    .join(', ')

  let latestLotto = null
  try {
    const response = await axios.get(
      'https://www.dhlottery.co.kr/lt645/selectPstLt645Info.do?_=' + Date.now(),
      {
        timeout: 3000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      }
    )
    if (response.data && response.data.data && response.data.data.list && response.data.data.list.length > 0) {
      latestLotto = response.data.data.list[0]
    }
  } catch (error) {
    console.error('Failed to fetch latest lotto numbers:', error.message)
  }

  res.render('645', { lotto, latestLotto })
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
