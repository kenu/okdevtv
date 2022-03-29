const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const user_service = require('../services/user-service');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('../configuration/config');
const mysql = require('mysql');
const router = express.Router();

//Define MySQL parameter in Config.js file.
const pool = mysql.createPool({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database
});

try {
  // Passport session setup.
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  // Use the FacebookStrategy within Passport.
  passport.use(
    new FacebookStrategy(
      {
        clientID: config.facebook_api_key,
        clientSecret: config.facebook_api_secret,
        callbackURL: config.callback_url
      },
      function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
          //Check whether the User exists or not using profile.id
          if (config.use_database) {
            // if sets to true
            pool.query(
              'SELECT * from user_info where user_id=' + profile.id,
              (err, rows) => {
                if (err) throw err;
                if (rows && rows.length === 0) {
                  console.log('There is no such user, adding now');
                  pool.query(
                    "INSERT into user_info(user_id,user_name) VALUES('" +
                    profile.id +
                    "','" +
                    profile.username +
                    "')"
                  );
                } else {
                  console.log('User already exists in database');
                }
              }
            );
          }
          return done(null, profile);
        });
      }
    )
  );
  passport.use(new GitHubStrategy({
      clientID: process.env['GITHUB_CLIENT_ID'],
      clientSecret: process.env['GITHUB_CLIENT_SECRET'],
      callbackURL: '/login/github/return'
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log('accessToken', accessToken);
      return cb(null, profile);
    })
  );
} catch (e) {
  console.error(e.message);
}


router.use(cookieParser());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(
  session({
    secret: 'keyboard cat',
    key: 'sid',
    resave: true,
    saveUninitialized: true
  })
);
router.use(passport.initialize());
router.use(passport.session());
router.use(express.static(__dirname + '/public'));

router.get('/', function (req, res) {
  console.log(req.session.passport);
  res.render('login', { user: req.user });
});

router.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', { user: req.user });
});

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: 'email' })
);

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }),
  function (req, res) {
    res.redirect('/');
  }
);

router.get('/github',
  passport.authenticate('github')
);

router.get('/github/return',
  passport.authenticate('github', { failureRedirect: '/login' }),
  async function(req, res) {
    const result = await user_service.signupByGitHub(req.user._json);
    req.session.user = req.user._json.email;
    res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('login', { user: req.user });
});

module.exports = router;
