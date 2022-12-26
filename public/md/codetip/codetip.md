# Code Tips

* JS sleep

```js
function sleep(timeMillis, callback) {
  var stop = Date.now();
  while (Date.now() < stop + timeMillis) {}
  callback();
}
```

* List of global custom functions

```js
function QQQ() {
  console.log('QQQ');
}
function QQQ2() {
  console.log('QQQ2');
}
var list = Object.keys(window).filter(function (x) {
  return window[x] instanceof Function && !/\[native code\]/.test(window[x].toString());
});
console.log(list);
```
* ref: https://stackoverflow.com/questions/493833/list-of-global-user-defined-functions-in-javascript
