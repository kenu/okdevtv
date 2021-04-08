#!/bin/sh
HOME=/home/dev
source $HOME/.zshrc

git pull;

SRC=.
DEST=$HOME/local/okdevtv

cp -rf $SRC/* $DEST

cd $DEST

npm install

pm2 restart all

# curl -X POST -H 'Content-type: application/json' --data '{"text":"Deployment Finished!"}' https://hooks.slack.com/services/xxxxR3xx4/B0xxDNExx11/xxxWeAVFWcFJOoJBxxxx6Bxx

# end
