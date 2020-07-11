const sheetdb = require('../lib/sheetdb');

let repo = '';
let lastTime = Date.now();
const okdevtvList = {
  getItems: async function (req) {
    const refresh = req.query.q;
    if (refresh && refresh === process.env.REFRESH_TOKEN) {
      repo = '';
    }
    const diff = Date.now() - lastTime;
    if (repo && diff < 24 * 60 * 60 * 1000) {
      return repo;
    }
    const info = { sheetId: process.env.SHEET_ID, id: '253705883' };
    const sheet = await sheetdb.getSheet(info);
    const rows = await sheet.getRows();
    const items = rows.map((row) => {
      return row;
    });
    repo = items;
    lastTime = Date.now();
    return items;
  }
};

module.exports = okdevtvList;
