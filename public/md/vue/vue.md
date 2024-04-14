# Vue.js
* https://vuejs.org/
* https://kr.vuejs.org/v2/guide/
* The Progressive JavaScript Framework

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

```html
<div id="app">
  {{ message }}
</div>
<script>
const app = new Vue({
  el: '#app',
  data: {
  message: '안녕하세요 Vue!'
  }
});
</script>
```

### 동적 바인딩

```html
<div id="app-2">
  <span v-bind:title="message">
  내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
  </span>
</div>
<script>
const app2 = new Vue({
  el: '#app-2',
  data: {
  message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
  }
});
</script>
```

### 조건문

```html
<div id="app-3">
  <p v-if="seen">이제 나를 볼 수 있어요</p>
</div>
<script>
const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});
</script>
```

### 반복문

```html
<div id="app-4">
  <ol>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
  </ol>
</div>
<script>
const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'JavaScript 배우기' },
      { text: 'Vue 배우기' },
      { text: '무언가 멋진 것을 만들기' }
    ]
  }
});
</script>
```

### 입력 핸들링

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">메시지 뒤집기</button>
</div>
<script>
const app5 = new Vue({
  el: '#app-5',
  data: {
    message: '안녕하세요! Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
</script>
```

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
<script>
const app6 = new Vue({
  el: '#app-6',
  data: {
    message: '안녕하세요 Vue!'
  }
});
</script>
```

```html
<div id="app-7">
  <ol>
    <!--
      이제 각 todo-item 에 todo 객체를 제공합니다.
      화면에 나오므로, 각 항목의 컨텐츠는 동적으로 바뀔 수 있습니다.
      또한 각 구성 요소에 "키"를 제공해야 합니다 (나중에 설명 됨).
      -->
    <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
    </todo-item>
  </ol>
</div>
<script>
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});
</script>
```

## 디렉티브(Directive)
* 라이브러리가 DOM 엘리먼트에 무엇인가를 하도록 지시하는 특별한 토큰
* `v-if`, `v-for`, `v-show`, `v-model` 등
* 문법

```js
<element
  prefix-directiveId="[argument:] expression [| filters...]">
</element>
```

## ref
* [Vue 3](/mib/vue/vue3)
* [Vue Router](/mib/vue/router)
* [Vue GA](/mib/vue/mkt)
* [Vue Performance](/mib/vue/perf)
* [Pinia](/mib/vue/pinia)
* [Vuex](/mib/vue/vuex)
* [NuxtJS](/mib/nuxt)

## example
* 01: https://okdevtv.com/md/vue/examples/vue01.html

