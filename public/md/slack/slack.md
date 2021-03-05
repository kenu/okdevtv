# slack api
* page about https://api.slack.com

## Auto Invitation
* you just adjust **config.js** file with **slack group name** and **oauth test token**.
* you only need these links
  * https://github.com/kenu/slack-invitomation
  * https://api.slack.com/docs/oauth-test-tokens
  * https://heroku.com
* video tutorial
  * https://www.livecoding.tv/kenu/videos/9mjwd-4min-how-to-invite-slack-automatically-4

### prerequisite
* https://toolbelt.heroku.com
* http://nodejs.org
* http://git-scm.com

## WebHook
```
curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/xxxxR3xx4/B0xxDNExx11/xxxWeAVFWcFJOoJBxxxx6Bxx
```
