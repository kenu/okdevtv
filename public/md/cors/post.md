# CORS window.postMessage

* The window.postMessage() method safely enables cross-origin communication between Window objects;
* e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.

## sample

* parent

```js
var frame = document.getElementById('ac');
frame.contentWindow.postMessage({ call: 'sendValue', value: 'value'}, /*frame domain url or '*'*/);
```

* child

```js
window.addEventListener('message', function(event) {
  var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
  if (origin !== '/*the containers domain url*/')
    return;
  if (typeof event.data == 'object' && event.data.call=='sendValue') {
    // Do something with event.data.value;
  }
}, false);
```

## ref
* https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
* https://githiub.com/kenu/ajaxcookie
