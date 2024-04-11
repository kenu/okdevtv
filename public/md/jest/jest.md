# Jest
* https://jestjs.io/
* 테스트 파일 확장자는 *.test.js 또는 *.spec.js

## jest 설치
npm i -g jest

## 파일 테스트
* 개별 파일

```
jest --watch test/DateUtils.test.js
```

* 전체 파일

```
jest --watchAll test/
```

## Sample

```js
// sum.js

function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

```js
// sum.test.js

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## Function
* toBe
* toBeCloseTo
* toEqual
* toStrictEqual
* toHaveProperty
* toMatchSnapshot
* toThrowError

## test ajax
* `jest.config.js`

```js
const config = {
  testEnvironment: 'node'
}
module.exports = config;
```

## Coverage
```
jest --coverage
```

## Timeout
* `test('title', () => {}, timeout);`
* https://exerror.com/timeout-async-callback-was-not-invoked-within-the-5000-ms-timeout-specified-by-jest-settimeout/

## ESM module
* install babel
```sh
npm i -D jest @babel/core @babel/preset-env
```

* `babel.config.json`
```json
{
  "presets": ["@babel/preset-env"]
}
```

* test file
* add.js
```js
export default function add(a, b) {
  return a + b;
}
```

* add.test.js
```js
import add from './add';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
})
```

## ref
* https://poiemaweb.com/jest-esm
