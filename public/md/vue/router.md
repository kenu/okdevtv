# Vue Router
* https://router.vuejs.org

## 설치

```
npm install --save vue-router
```

## 사용

```js
  import VueRouter from 'vue-router';

  // 1. Define route components.
  const Foo = { template: "<div>foo</div>" };
  const Bar = { template: "<div>bar</div>" };

  // 2. Define some routes
  const routes = [
    { path: "/foo", component: Foo },
    { path: "/bar", component: Bar }
  ];

  // 3. Create the router instance and pass the `routes` option
  const router = new VueRouter({
    routes
  });

  const app = new Vue({
    router
  }).$mount("#app");
```

## mode
* hash : `okdevtv.com/#/uri`
* history : `okdevtv.com/uri`
  * nginx 등의 웹서버 설정 필요함
  * history.popState 지원
* https://router.vuejs.org/guide/essentials/history-mode.html

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

## 예제
* [Vue Router](/md/vue/examples/vuerouter.html)
