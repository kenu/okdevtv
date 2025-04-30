# Gmail API with Node.js

## Quickstart

- https://developers.google.com/gmail/api/quickstart/nodejs?hl=ko
- Just for only local test
- Create project and get credentials.json
- It shows `Labels` of your Gmail account

### quickstart

1. https://console.cloud.google.com/
2. Menu > IAM & Admin > Create a Project
3. enable the Gmail API
4. Menu menu > APIs & Services > Credentials. 사용자 인증 정보
5. Create Credentials > [OAuth client ID](/mib/google/iam).
6. Application type > Desktop app.
7. Name, Create OAuth client with Client ID & Secret.
8. Download `credentials.json` and move to working folder.
9. `npm install googleapis @google-cloud/local-auth`
10. `node index.js`

## nodemailer with gmail for OAuth2

- https://www.woolha.com/tutorials/node-js-send-email-using-gmail-with-nodemailer-oauth-2

###

1. Menu menu > APIs & Services > Credentials. 사용자 인증 정보
2. Create Credentials > [API key](/mib/google/iam).
3. Application type > Desktop app.
4. Name, Create OAuth client with Client ID & Secret.
5. Download `credentials.json` and edit `.env` file.
6. run process

## Run Process

- .env
- node generate.js
- node token.js
- node send.js

## App Password
- https://myaccount.google.com/apppasswords
  - 2 단계 인증 > 앱 비밀번호
  - `**** xzka **** gmpr`

## ref
- example
  - https://github.com/kenu/okdevtv-examples/tree/main/node/email

