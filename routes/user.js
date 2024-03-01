const express = require('express')
const router = express.Router()
const user_service = require('../services/user-service')
const bookmark = require('../lib/bookmark')
const dayjs = require('dayjs')

router.post('/signup', async function (req, res) {
  let email = req.body.email
  let status = 'fail'
  let msg = ''
  try {
    const response = await user_service.signupByEmail(email)
    if (response.dataValues.id > 0) {
      status = 'ok'
    }
  } catch (e) {
    msg = e.message
  }
  let result = {
    status: status,
    msg: msg,
  }
  if (msg) {
    result.msg = msg
  }
  res.json(result)
})


router.get('/login', function (req, res) {
  res.render('user/login', { user: req.session.user, title: 'hello okdevtv' })
})

router.post('/login', async function (req, res) {
  const email = req.body.email
  const password = req.body.password
  try {
    const result = await user_service.doLogin({ email, password })
    if (result.id) {
      req.session.user = email
      req.session.userId = result.id
      res.json({ status: 'ok', msg: 'login success' })
      return
    } else {
      res.json({ status: 'fail', msg: '이메일 또는 비번이 맞지 않습니다.' })
      return
    }
  } catch (e) {
    res.json({ status: 'fail', msg: e })
    return
  }
})

router.all('/logout', async function (req, res) {
  req.session.destroy(function (err) {
    // cannot access session here
  })
  res.redirect('/')
})

router.get('/mypage', async function (req, res) {
  if (req.session.user) {
    const bookmarks = await bookmark.findAll(req.session.userId)
    bookmarks.forEach((bookmark) => {
      bookmark.created = dayjs(bookmark.createdAt).format('YYYY-MM-DD HH:mm:ss')
    })
    res.render('user/mypage', {
      user: req.session.user,
      bookmarks: bookmarks || [],
    })
  } else {
    res.redirect('/user/login')
  }
})

module.exports = router
