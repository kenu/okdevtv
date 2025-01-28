# OKdevTV source

* https://okdevtv.com
* https://youtube.com/kenuheo
* https://mp4.okdevtv.com

## Build and Run
```
git clone https://github.com/kenu/okdevtv
cd okdevtv
npm i -g pm2
npm i
npm run serve
```

## Config
* aws configure
```
aws configure
```
* .env
```
DB_USER=devuser
DB_PASS=devpass
DB_NAME=devdb
FACEBOOK_API_KEY=
FACEBOOK_API_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
SLACK_HOOK_URL=
BASE_URL=https://okdevtv.com
BASE_MAIL=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
SHEET_ID=
REFRESH_TOKEN=
```

## Test
`npm run test`

## Deploy

## License
* MIT
