#!/bin/zsh
source ~/.zshrc
cd ~/git/okdevtv/
git pull origin main
pnpm i
pm2 restart www --update-env
sleep 2;
pm2 list

curl -X POST -H 'Content-type: application/json' --data '{"content":"Job Finished!\nhttps://okdevtv.com/"}' $WEBHOOK_DISCORD_MP4_URL

cd -
