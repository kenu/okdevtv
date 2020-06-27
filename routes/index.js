const express = require('express');
const router = express.Router();
const okdevtv = require('../services/okdevtv-list');

/* GET home page. */
router.get('/', function (req, res) {
  console.log(req.session.user);
  res.render('index', { user: req.session.user });
});

router.get('/okdevtv-list', async function (req, res) {
  const items = await okdevtv.getItems(req);

  res.render('okdevtv-list', { title: '<a href="/">OKdevTV List</a>', desc: 'OKdevTV', items: items });
});
module.exports = router;

router.get('/f/:url', function (req, res) {
  const url = req.params.url;
  res.redirect(url);
});
