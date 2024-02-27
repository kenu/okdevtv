require('dotenv').config()
const axios = require('axios')

async function sendToSlack(text) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    text,
  }
  const response = await axios.post(process.env.SLACK_HOOK_URL, options)
  return response.data
}

module.exports = sendToSlack
