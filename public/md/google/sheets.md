# Sheets API

## Quick Start
* https://developers.google.com/sheets/api/quickstart/nodejs
* credentials.json
* get token.json
* Sample: https://github.com/kenu/oksheets

## google spreadsheet Module
```
npm i google-spreadsheet --save
```
* Create Google Service Account
  * https://console.cloud.google.com/apis/credentials
  * In the sidebar on the left, select APIs & Services > Credentials
  * Click blue "+ CREATE CREDENITALS" and select "Service account" option
  * Enter name, description, click "CREATE"
  * You can skip permissions, click "CONTINUE"
  * Click "+ CREATE KEY" button
  * Select the "JSON" key type option
  * Click "Create" button
  * your JSON key file is generated and downloaded to your machine (it is the only copy!)
  * click "DONE"
  * note your service account's email address (also available in the JSON key file)

* Add Service Account email to SpreadSheets permission list

## Ref
* Reading & Writing Cell Values
  * https://developers.google.com/sheets/api/guides/values#node.js_4
* Writing to Google Sheets using Node JS
  * https://blog.peterplucinski.com/writing-to-google-sheets-using-node/
* npm google spreadsheet
  * https://www.npmjs.com/package/google-spreadsheet
