const connection = require('./db');
const sendToSlack = require('./ajax');

const bookmark = {
  save: async function (_res, data) {
    try {
      await connection.query('insert into bookmark set ?', data);
    } catch (e) {
      console.error(e.message);
    }
    await connection.end();
    sendToSlack(JSON.stringify(data));
  },
  list: function (res) {
    connection.query(
      'select pathname, created from bookmark order by id desc',
      [],
      function (_err, rows) {
        res.json({
          tips: rows,
        });
        connection.end();
      }
    );
  },
};

module.exports = bookmark;
