# Vite
* https://vitejs.dev/
* /vit/, french word for 'fast'

## First vite project
```
# npm 6.x
npm init vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm init vite@latest my-vue-app -- --template vue
```

* template preset list
  * vanilla
  * vanilla-ts
  * vue
  * vue-ts
  * react
  * react-ts
  * preact
  * preact-ts
  * lit-element
  * lit-element-ts
  * svelte
  * svelte-ts

## vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
```

## ref
* 13 minutes Vite by Evan You
  * https://youtu.be/DkGV5F4XnfQ
* CRA 2 Vite
  * https://okdevtv.com/mib/vite/cra
