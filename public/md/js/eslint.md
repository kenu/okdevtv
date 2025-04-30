# eslint
- EcmaScript Lint
- https://eslint.org/
- Find and fix problems in your JavaScript code

## Install
```
npm install eslint --save-dev
```

## Run
```
npx eslint yourfile.js
# or
node_modules/.bin/eslint yourfile.js
```

## Rule
- `.eslintrc`

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['google'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    quotes: ['error', 'double']
  }
};
```

- `.eslintignore`

```
node_modules/
public/js/vendor/
```
