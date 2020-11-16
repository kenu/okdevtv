# Code Tips

* JS sleep

```js
function sleep(timeMillis, callback) {
    var stop = Date.now();
    while (Date.now() < stop + timeMillis) {
        // This is intentional
    }
    callback();
}
```
