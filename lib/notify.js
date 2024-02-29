const axios = require('axios')
require('dotenv').config()

function notify(message) {
  axios({
    method: 'post',
    url: process.env.WEBHOOK_DISCORD,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      content: '=====\n' + message,
    }),
  })
    .then((response) => {
      console.log(response.status, response.headers.date)
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = notify
