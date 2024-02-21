const { connection } = require('./db');
const sendToSlack = require('./ajax');

const asset = {
  // columns: seq, datetime, income, outlay, description
  save: function (_res, data) {
    connection.query('insert into asset set ?', data, function (err) {
      if (err) {
        throw err;
      }
      connection.end();
    });
    sendToSlack(JSON.stringify(data));
  },
  list: function (res) {
    connection.query(
      'select datetime, income, outlay, description from asset order by seq desc',
      [],
      function (_err, rows) {
        console.log(rows);
        res.json({
          asset: rows,
        });
        connection.end();
      }
    );
  },
};

module.exports = asset;
