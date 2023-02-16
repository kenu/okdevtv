const express = require('express');
const router = express.Router();
const okdevtv = require('../services/okdevtv-list');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { user: req.session.user });
});

router.get('/okdevtv-list', async function (req, res) {
  const items = await okdevtv.getItems(req);

  res.render('okdevtv-list', {
    title: '<a href="/">OKdevTV List</a>',
    desc: 'OKdevTV',
    items: items,
  });
});
module.exports = router;

router.get('/f/:url', function (req, res) {
  const url = req.params.url;
  res.redirect(url);
});

router.get('/645', function (req, res) {
  function getRandomList(max, count) {
    const list = [];
    for (let i = 0; i < max; i++) {
      list.push(i + 1);
    }
    ArrayUtils.shuffle(list);
    return list.slice(0, count);
  }
  const header = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
  const lotto = getRandomList(45, 6).sort((a, b) => a - b).join(', ');
  const reloadButton = '<hr/><button onclick="location.reload()">다시 뽑기</button>';
  res.header('Content-Type', 'text/html');
  res.end(header + lotto + reloadButton);
});

const ArrayUtils = {
  shuffle: function (array) {
    // Knuth suffle
    // https://stackoverflow.com/a/2450976
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },
};
