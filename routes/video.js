const express = require('express')
const router = express.Router()
const videoDao = require('../dao/videoDao')

// Video listing by category
router.get('/', async (req, res) => {
  const category = req.query.category || 'dev'
  const lang = req.query.lang || 'ko'
  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.pageSize) || 60

  try {
    const result = await videoDao.getPagedVideosWithSearch({
      category,
      lang,
      page,
      pageSize,
      searchKeyword: req.query.search || '',
      accountId: req.user?.accountId,
    })

    const list = result.rows.map(item => {
      const plainItem = item.get ? item.get({ plain: true }) : item
      return {
        ...plainItem,
        pubdate: plainItem.publishedAt ? new Date(plainItem.publishedAt).toISOString().split('T')[0] : '',
        profile: plainItem.Channel?.thumbnail,
        channame: plainItem.Channel?.title,
        customUrl: plainItem.Channel?.customUrl,
      }
    })

    const totalPages = Math.ceil(result.count / pageSize)

    if (req.query.format === 'json') {
      res.json({
        videos: list,
        totalCount: result.count,
        totalPages,
        currentPage: page,
      })
    } else {
      res.render('videos/list', {
        title: `Videos - ${category}`,
        list,
        totalCount: result.count,
        totalPages,
        currentPage: page,
        category,
        lang,
        user: req.user,
      })
    }
  } catch (error) {
    console.error('Error fetching videos:', error)
    res.status(500).json({ error: 'Failed to fetch videos', details: error.message })
  }
})

// Get videos by category
router.get('/category/:category', async (req, res) => {
  const { category } = req.params
  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.pageSize) || 60

  try {
    const result = await videoDao.getPagedVideosWithSearch({
      category,
      lang: 'ko',
      page,
      pageSize,
      searchKeyword: req.query.search || '',
      accountId: req.user?.accountId,
    })

    res.json({
      category,
      videos: result.rows,
      totalCount: result.count,
      totalPages: Math.ceil(result.count / pageSize),
    })
  } catch (error) {
    console.error('Error fetching videos by category:', error)
    res.status(500).json({ error: 'Failed to fetch videos' })
  }
})

// Get video statistics
router.get('/stats/category', async (req, res) => {
  try {
    const stats = await videoDao.getCategoryStats()
    res.json(stats)
  } catch (error) {
    console.error('Error fetching category stats:', error)
    res.status(500).json({ error: 'Failed to fetch stats' })
  }
})

router.get('/stats/yearly', async (req, res) => {
  try {
    const stats = await videoDao.getYearlyVideoStats()
    res.json(stats)
  } catch (error) {
    console.error('Error fetching yearly stats:', error)
    res.status(500).json({ error: 'Failed to fetch stats' })
  }
})

router.get('/stats/monthly', async (req, res) => {
  try {
    const stats = await videoDao.getMonthlyVideoStats(req.query.months || 12)
    res.json(stats)
  } catch (error) {
    console.error('Error fetching monthly stats:', error)
    res.status(500).json({ error: 'Failed to fetch stats' })
  }
})

// Get top channels
router.get('/top-channels', async (req, res) => {
  try {
    const channels = await videoDao.getTopChannels(req.query.limit || 10)
    res.json(channels)
  } catch (error) {
    console.error('Error fetching top channels:', error)
    res.status(500).json({ error: 'Failed to fetch channels' })
  }
})

module.exports = router
