const express = require('express');
const router = express.Router();
const tip = require('../lib/tip');
const okdevtv = require('../services/okdevtv-list');

/* GET tip listing. */
router.get('/tips', function (req, res) {
  tip.list(res);
});

/* POST save tip */
router.post('/tip', function (req, res) {
  let data = req.body;
  data.clientip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress;
  console.log('ip', req.headers['x-forwarded-for'], req.connection.remoteAddress, req.socket.remoteAddress);
  tip.save(res, data);
  res.json({
    "status": 200
  });
});

/* OKdevTV list */
router.get('/okdevtv-list', async function (req, res) {
  const items = await okdevtv.getItems(req);
  const list = items.map(item => {
    return {
      date: item.date,
      topic: item.topic,
      movie: item.movie,
      slide: item.slide,
    };
  });
  res.json(list);
});

module.exports = router;
