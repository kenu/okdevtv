# Vue 3
- https://vuejs.org/ (official documentation)
- Current standard version of Vue.js
- Key Features:
  - Composition API
  - TypeScript support
  - Faster rendering with Virtual DOM improvements
  - Smaller bundle size
  - Better tree-shaking
  - Vite build tool
    - https://vitejs.dev/

## QuickStart

### Create a New Project

```bash
# Using Vite (recommended)
npm create vite@latest my-vue-app -- --template vue

# Using Vue CLI
npm install -g @vue/cli
vue create my-vue-app
```

### Try Online
- [Vue SFC Playground](https://play.vuejs.org/)
- [StackBlitz Vue Template](https://stackblitz.com/edit/vitejs-vite-3fthyy)
- [CodeSandbox Vue Template](https://codesandbox.io/p/sandbox/vue)

## Composition API

Vue 3's headline feature is the Composition API, which provides a more flexible way to organize and reuse logic in components:

```js
<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive state
const count = ref(0)

// Computed properties
const doubleCount = computed(() => count.value * 2)

// Methods
function increment() {
  count.value++
}

// Lifecycle hooks
onMounted(() => {
  console.log('Component mounted!')
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

## Single-File Components (SFC)

Vue 3 enhances the SFC format with:
- `<script setup>` - Simpler component syntax
- CSS v-bind - Using reactive variables in CSS
- CSS Modules improvements

## related
- [Vue Router](/mib/vue/router) - Official router for Vue
- [Vue Performance](/mib/vue/perf) - Performance optimization techniques
- [Pinia](/mib/vue/pinia) - Recommended state management library for Vue 3
- [Vuex](/mib/vue/vuex) - Legacy state management (Pinia recommended for new projects)
- [NuxtJS](/mib/nuxt) - Vue framework for SSR, SSG, and more
- [Vue.js core docs](/mib/vue) - Main documentation

## Ecosystem Tools

- **Devtools**: [Vue.js Devtools](https://devtools.vuejs.org/)
- **IDE Support**: [VS Code + Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- **Testing**: [Vitest](https://vitest.dev/) & [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Forms**: [VeeValidate](https://vee-validate.logaretm.com/v4/) & [FormKit](https://formkit.com/)
- **Component Libraries**: [Vuetify](https://next.vuetifyjs.com/), [PrimeVue](https://primevue.org/), [Quasar](https://quasar.dev/)

## ref
- [Vue 3 Official Documentation](https://vuejs.org/guide/introduction.html)
- [Vue 3 API Reference](https://vuejs.org/api/)
- [Migration Guide from Vue 2](https://v3-migration.vuejs.org/)
- [Vue Mastery Courses](https://www.vuemastery.com/)
- [Awesome Vue Resources](https://github.com/vuejs/awesome-vue)
