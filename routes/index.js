var express = require('express');
var router = express.Router();
var sheetdb = require('../lib/sheetdb');

/* GET home page. */
router.get('/', function (req, res) {
  console.log(req.session.user);
  res.render('index', { user: req.session.user });
});

router.get('/okdevtv-list', async function (req, res) {
  const info = { sheetId: process.env.SHEET_ID, index: 1 };
  const sheet = await sheetdb.getSheet(info);
  const rows = await sheet.getRows();
  console.log(rows.length);
  const items = rows.map((row) => {
    return row;
  });

  res.render('okdevtv-list', { title: 'OKdevTV List', items: items });
});
module.exports = router;
