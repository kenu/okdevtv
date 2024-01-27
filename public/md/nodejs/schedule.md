# Node Schedule
* https://www.npmjs.com/package/node-schedule

## Example
```js
const schedule = require('node-schedule');

const job = schedule.scheduleJob('42 * * * *', () => {
  console.log('The answer to life, the universe, and everything!');
});
```

```js
const job = schedule.scheduleJob('0 1 * * *', (fireDate) => {
  console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});
```
