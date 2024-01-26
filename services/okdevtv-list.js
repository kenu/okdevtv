const sheetdb = require('../lib/sheetdb');

let repo = {};
let lastTime = Date.now();
const okdevtvList = {
  getPageId: function (code) {
    const sheetMap = {
      MainPage: '0',
      Broadcast: '253705883',
      CastAll: '1239319537',
      Article: '435315161',
      Courses: '1382680615',
    };
    return sheetMap[code] || sheetMap.Broadcast;
  },
  getItems: async function (req) {
    const refresh = req.query.q;
    const pageCode = req.query.p || 'Broadcast';
    if (refresh && refresh === process.env.REFRESH_TOKEN) {
      repo[pageCode] = '';
    }
    const diff = Date.now() - lastTime;
    if (repo[pageCode] && diff < 24 * 60 * 60 * 1000) {
      return repo[pageCode];
    }
    const pageId = okdevtvList.getPageId(pageCode);
    const info = { sheetId: process.env.SHEET_ID, id: pageId };
    const sheet = await sheetdb.getSheet(info);
    const rows = await sheet.getRows();
    const items = rows.map((row) => {
      return row._rawData;
    });
    repo[pageCode] = items;
    lastTime = Date.now();
    return items;
  },
};

module.exports = okdevtvList;
