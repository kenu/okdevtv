# OKdevTV source

- https://okdevtv.com
- https://youtube.com/kenuheo

## Build and Run
```
git clone https://github.com/kenu/okdevtv
cd okdevtv

# Install
npm install

# Development (auto-reloads)
npm run dev

# Production
npm start

# Optional: Run with pm2
# npm i -g pm2
# pm2 start ./bin/www --name okdevtv
```

## Config
- aws configure
```
aws configure
```
- .env
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
- MIT
