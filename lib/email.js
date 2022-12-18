require('dotenv').config();
const fs = require('fs').promises;
const readline = require('readline');
const { google } = require('googleapis');

const SCOPES = [
  'https://mail.google.com/',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.send',
];
const TOKEN_PATH = 'token.json';

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
async function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  try {
    const token = await fs.readFile(TOKEN_PATH);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  } catch (err) {
    if (err) return getNewToken(oAuth2Client, callback);
  }
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (error) => {
        if (error) return console.error(error);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
  console.log(auth);
  const gmail = google.gmail({ version: 'v1', auth });
  gmail.users.labels.list(
    {
      userId: 'me',
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const labels = res.data.labels;
      if (labels.length) {
        console.log('Labels:');
        labels.forEach((label) => {
          console.log(`- ${label.name}`);
        });
      } else {
        console.log('No labels found.');
      }
    },
  );
}

function storeAuthToken(auth) {
  global.auth = auth;
}

async function init() {
  try {
    const content = await fs.readFile('config/gmail-auth.json');
    await authorize(JSON.parse(content), storeAuthToken);
  } catch (err) {
    if (err) return console.log('Error loading client secret file:', err);
  }
}

async function sendEmail(mailOptions) {
  await init();
  const auth = global.auth;
  const authData = {
    type: 'OAuth2',
    user: process.env.GMAIL_ADDRESS,
    clientId: auth._clientId,
    clientSecret: auth._clientSecret,
    refreshToken: auth.credentials.refresh_token,
    accessToken: auth.credentials.access_token,
    expires: auth.credentials.expiry_date,
  };

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: authData,
  });
  await transporter.sendMail(mailOptions);
}
init();
module.exports = { sendEmail };
