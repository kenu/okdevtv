// https://www.npmjs.com/package/google-spreadsheet
const { GoogleSpreadsheet } = require('google-spreadsheet')
const { JWT } = require('google-auth-library')

const sheetdb = {
  getSheet: async function (info) {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const doc = new GoogleSpreadsheet(info.sheetId, serviceAccountAuth)

    await doc.loadInfo() // loads document properties and worksheets

    return doc.sheetsById[info.id]
  },
}

module.exports = sheetdb
