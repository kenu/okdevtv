const express = require('express');
const session = require('express-session');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const frameguard = require('frameguard');
const passport = require('passport');
const Sentry = require('@sentry/node');
Sentry.init({
  dsn: 'https://8b4aa37266b14f298fc101e6bc02a4d7@o1064669.ingest.sentry.io/4504407883644928',
  tracesSampleRate: 1.0,
});
let helmet = require('helmet');
const app = express();
app.use(helmet.hidePoweredBy());

const cors = require('cors');
let corsOptions = {
  origin: 'okdevtv.com',
};
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(
  favicon(path.join(__dirname, 'public', 'favicon/apple-icon-180x180.png'))
);
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(frameguard({ action: 'sameorigin' }));
app.use(express.static(path.join(__dirname, 'public')));

const sess = {
  secret: 'okdevtv cat',
  resave: true,
  saveUninitialized: true,
  cookie: {},
};
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

try {
  // Passport session setup.
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

} catch (e) {
  console.error(e.message);
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use('/', require('./routes/index'));
app.use('/apis', require('./routes/apis'));
app.use('/user', require('./routes/user'));
app.use('/users', require('./routes/users'));
app.use('/hq', require('./routes/hq'));
app.use('/login', require('./routes/login'));
app.use('/mib*', require('./routes/mib'));

// catch 404 and forward to error handler
app.use(function (_req, res) {
  const err = new Error('Page Not Found');
  err.status = 404;
  res.render('error', {
    message: err.message,
    error: {},
  });
});

// error handlers
// no stacktraces leaked to user
app.use(function (err, _req, res) {
  Sentry.captureException(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

module.exports = app;
