# express-session.md
- https://github.com/expressjs/session#readme

## install

```
npm i express-session --save
```

## Version

The latest version is compatible with Express 5.x and requires Node.js 14.0.0 or higher.

## example setting & use

```js
const session = require('express-session')

const app = express();
const sess = {
  secret: 'keyboard cat', // Ideally use a strong, environment-based secret
  resave: false, // Recommended setting for most stores
  saveUninitialized: false, // Better for GDPR compliance
  cookie: {
    httpOnly: true, // Reduces XSS attacks
    sameSite: 'strict' // CSRF protection
  }
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

// This is an example of a simplified session configuration
// Not recommended for real applications - use the more complete config above
app.use(session({ 
  secret: 'keyboard cat', 
  cookie: { 
    maxAge: 60000,
    httpOnly: true,
    sameSite: 'strict'
  }
}))

// Access the session as req.session
app.get('/', (req, res, next) => {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write(`<p>views: ${req.session.views}</p>`)
    res.write(`<p>expires in: ${req.session.cookie.maxAge / 1000}s</p>`)
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})
```

## related
- [express error handling](/mib/nodejs/error)
- [Using Session Stores](https://www.npmjs.com/package/express-session#compatible-session-stores)
- [Express 5.x documentation](https://expressjs.com/)
