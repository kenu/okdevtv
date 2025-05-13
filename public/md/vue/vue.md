# Vue.js
- https://vuejs.org/
- https://ko.vuejs.org/guide/introduction.html
- The Progressive JavaScript Framework
- Current version: Vue 3

```html
<!-- Development version -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<!-- Production version -->
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
```

```html
<div id="app">
  {{ message }}
</div>

<!-- Vue 3 Options API -->
<script>
const { createApp } = Vue

createApp({
  data() {
    return {
      message: '안녕하세요 Vue 3!'
    }
  }
}).mount('#app')
</script>
```

### 컴포지션 API (Composition API)

```html
<div id="app">
  {{ message }}
</div>

<!-- Vue 3 Composition API -->
<script>
const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('안녕하세요 Vue 3 Composition API!')
    
    return {
      message
    }
  }
}).mount('#app')
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
const { createApp } = Vue

createApp({
  data() {
    return {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
  }
}).mount('#app-2')
</script>
```

<!-- 단축 문법 -->
```html
<span :title="message">단축 문법 사용</span>
```

### 조건문

```html
<div id="app-3">
  <p v-if="seen">이제 나를 볼 수 있어요</p>
</div>
<script>
const { createApp } = Vue

createApp({
  data() {
    return {
      seen: true
    }
  }
}).mount('#app-3')
</script>
```

### 반복문

```html
<div id="app-4">
  <ol>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
  </ol>
</div>
<script>
const { createApp } = Vue

createApp({
  data() {
    return {
      todos: [
        { id: 1, text: 'JavaScript 배우기' },
        { id: 2, text: 'Vue 배우기' },
        { id: 3, text: '무언가 멋진 것을 만들기' }
      ]
    }
  }
}).mount('#app-4')
</script>
```

### 입력 핸들링

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">메시지 뒤집기</button>
</div>
<script>
const { createApp } = Vue

createApp({
  data() {
    return {
      message: '안녕하세요! Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}).mount('#app-5')
</script>
```

<!-- 단축 문법 -->
```html
<button @click="reverseMessage">클릭 이벤트 단축 문법</button>
```

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
<script>
const { createApp } = Vue

createApp({
  data() {
    return {
      message: '안녕하세요 Vue!'
    }
  }
}).mount('#app-6')
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
    <todo-item 
      v-for="item in groceryList" 
      :todo="item" 
      :key="item.id">
    </todo-item>
  </ol>
</div>
<script>
const { createApp } = Vue

// Vue 3 방식으로 컴포넌트 등록
const app = createApp({
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
})

app.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

app.mount('#app-7')
</script>
```

## 디렉티브(Directive)
- 라이브러리가 DOM 엘리먼트에 무엇인가를 하도록 지시하는 특별한 토큰
- `v-if`, `v-for`, `v-show`, `v-model`, `v-bind`, `v-on` 등
- 문법

```js
<element
  v-directiveName:[argument]="value">
</element>
```

### 주요 디렉티브
- `v-if`, `v-else-if`, `v-else`: 조건부 렌더링
- `v-for`: 리스트 렌더링
- `v-show`: 표시 여부 토글 (CSS display 속성 사용)
- `v-model`: 양방향 데이터 바인딩
- `v-bind` (단축 문법 `:`): 속성 바인딩
- `v-on` (단축 문법 `@`): 이벤트 바인딩

## Composition API
Vue 3에서 도입된 새로운 API로, 코드 재사용성과 조직화를 개선합니다.

```js
import { ref, reactive, computed, onMounted } from 'vue'

export default {
  setup() {
    // 반응형 상태
    const count = ref(0)
    const user = reactive({ 
      name: 'John', 
      age: 30 
    })
    
    // 계산된 속성
    const doubleCount = computed(() => count.value * 2)
    
    // 메서드
    function increment() {
      count.value++
    }
    
    // 생명주기 훅
    onMounted(() => {
      console.log('Component is mounted!')
    })
    
    // 템플릿에서 사용할 항목 반환
    return {
      count,
      user,
      doubleCount,
      increment
    }
  }
}
```

## <script setup> 문법 (Vue 3.2+)
Composition API를 더 간결하게 사용할 수 있는 문법입니다.

```html
<script setup>
import { ref, computed } from 'vue'

// 상태는 직접 선언
const count = ref(0)
const doubleCount = computed(() => count.value * 2)

// 메서드도 직접 선언
function increment() {
  count.value++
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

## 개발 환경 설정

### Vue 프로젝트 생성
```bash
# Vite를 사용하여 Vue 프로젝트 생성 (권장)
npm create vite@latest my-vue-app -- --template vue

# Vue CLI (레거시)
npm install -g @vue/cli
vue create my-vue-app
```

### 필수 도구
- Vite: 빠른 개발 서버와 빌드 툴
- Vue DevTools: 크롬/파이어폭스 확장 프로그램
- VS Code + Volar: 편집기 지원

## 싱글 파일 컴포넌트 (SFC)
`.vue` 파일 형식으로 구성요소를 작성합니다.

```vue
<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue 3!')
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="message += '!'">Add !</button>
  </div>
</template>

<style scoped>
h1 {
  color: #42b883;
}
</style>
```

## ref
- [Vue Router](/mib/vue/router)
- [Vue GA](/mib/vue/mkt)
- [Vue Performance](/mib/vue/perf)
- [Pinia](/mib/vue/pinia) (Vue 3 권장 상태 관리)
- [Vuex](/mib/vue/vuex) (Vue 2 레거시 상태 관리)
- [NuxtJS](/mib/nuxt)

## 외부 링크
- [Vue 공식 문서](https://vuejs.org/)
- [Vue 3 한글 문서](https://ko.vuejs.org/)
- [Vite 문서](https://vitejs.dev/)
- [Vue Router 문서](https://router.vuejs.org/)
- [Pinia 문서](https://pinia.vuejs.org/)

## example
- 01: https://okdevtv.com/md/vue/examples/vue01.html

