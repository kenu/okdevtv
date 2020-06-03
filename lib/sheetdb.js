// https://www.npmjs.com/package/google-spreadsheet
// Basic Example

const { GoogleSpreadsheet } = require('google-spreadsheet');

// spreadsheet key is the long id in the sheets URL

const sheetdb = {
  getSheet: async function (info) {
    const doc = new GoogleSpreadsheet(info.sheetId);
    const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n');
    // use service account creds
    // simply go in your browser to the Google sheet you want to interact with
    // go to SHARE on the top right of your screen
    // go to advanced settings and share it with email address of your service account
    console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[info.index]; // or use doc.sheetsById[id]
    return sheet;
  }
}

module.exports = sheetdb;
