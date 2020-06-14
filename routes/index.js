const express = require('express');
const router = express.Router();
const sheetdb = require('../lib/sheetdb');

/* GET home page. */
router.get('/', function (req, res) {
  console.log(req.session.user);
  res.render('index', { user: req.session.user });
});

let repo = '';
let lastTime = Date.now();
async function getItems() {
  const diff = Date.now() - lastTime;
  if (repo && diff < 24 * 60 * 60 * 1000) {
    return repo;
  }
  const info = { sheetId: process.env.SHEET_ID, index: 1 };
  const sheet = await sheetdb.getSheet(info);
  const rows = await sheet.getRows();
  const items = rows.map((row) => {
    return row;
  });
  repo = items;
  lastTime = Date.now();
  return items;
}

router.get('/okdevtv-list', async function (req, res) {
  const items = await getItems();

  res.render('okdevtv-list', { title: 'OKdevTV List', items: items });
});
module.exports = router;
