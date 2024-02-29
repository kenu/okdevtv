const express = require('express')
const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy
const user_service = require('../services/user-service')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const router = express.Router()

try {
  // Passport session setup.
  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (obj, done) {
    done(null, obj)
  })

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env['GITHUB_CLIENT_ID'],
        clientSecret: process.env['GITHUB_CLIENT_SECRET'],
        callbackURL: '/login/github/return',
      },
      function (accessToken, _refreshToken, profile, cb) {
        console.log('accessToken', accessToken)
        return cb(null, profile)
      }
    )
  )
} catch (e) {
  console.error(e.message)
}

router.use(cookieParser())
router.use(bodyParser.urlencoded({ extended: false }))
router.use(
  session({
    secret: 'keyboard cat',
    key: 'sid',
    resave: true,
    saveUninitialized: true,
  })
)
router.use(passport.initialize())
router.use(passport.session())
router.use(express.static(__dirname + '/public'))

router.get('/', function (req, res) {
  console.log(req.session.passport)
  res.render('login', { user: req.user })
})

router.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', { user: req.user })
})

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
)

router.get(
  '/github/return',
  passport.authenticate('github', {
    failureRedirect: '/login',
    scope: ['user:email'],
  }),
  async function (req, res) {
    const result = await user_service.signupByGitHub(req.user._json)
    req.session.user = result.email
    req.session.userId = result.id
    let prevSession = req.session
    req.session.regenerate((_err) => {
      Object.assign(req.session, prevSession)
      res.redirect('/')
    })
  }
)

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

router.get('/', function (req, res) {
  res.render('login', { user: req.user })
})

module.exports = router
