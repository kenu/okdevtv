#!/bin/sh

source $HOME/.bash_profile
DEST=/home/ec2-user/git/10ynews
cd $DEST/web
git pull
npm install --only=production

pm2 restart 10ynews

# curl -X POST -H 'Content-type: application/json' \
# --data '{"text":"10ynews Deployment Finished!"}' \
# https://hooks.slack.com/services/xxxxR3xx4/B0xxDNExx11/xxxWeAVFWcFJOoJBxxxx6Bxx

# end
