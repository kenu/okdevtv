# Pinia
- State management library for Vue.js applications
- https://pinia.vuejs.org/

## Install
```
npm install pinia --save
```

## example
```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```
