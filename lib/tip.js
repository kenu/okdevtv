const { connection } = require('./db')
const sendToSlack = require('./ajax')

const tip = {
  save: function (_res, data) {
    connection.query('insert into tip set ?', data, function (err) {
      if (err) {
        throw err
      }
      connection.end()
    })
    sendToSlack(JSON.stringify(data))
  },
  list: function (res) {
    connection.query(
      'select message,created from tip order by id desc',
      [],
      function (_err, rows) {
        res.json({
          tips: rows,
        })
        connection.end()
      }
    )
  },
}

module.exports = tip
