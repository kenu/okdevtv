# CRA 2 Vite
1. CRA 프로젝트 clone 하기
2. 브랜치 생성
3. react-scripts, package.json에서 제거
`yarn remove react-scripts`
4. vite 추가
`yarn add vite @vitejs/plugin-react -D`
5. node-sass 제거, sass 추가
```
yarn remove node-sass
yarn add sass -D
```
6. vite.config.ts 추가
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': 'bootstrap'
    }
  },
})
```
7. package.json 에 scripts 수정
  * react-scripts 삭제
  * vite 추가
```
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
```
8. tsconfig.json 의 es5 수정
```
  * "target": "es6",
```
9. index.html 위치 변경, `%PUBLIC_URL%` 삭제, `script` 추가
```html
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
```
10. src/index.js 를 jsx 로 확장자 변환
11. react, react-dom, @types/react 버전 일치
  * `Failed to resolve import "react/jsx-dev-runtime" ` 에러 수정
12. REACT_ 환경변수 VITE_ 로 변환
  * .env 파일과 호출부분
  * `process.env`를 `import.meta.env` 로 변환
13. sass-migrator 적용
  * `npx sass-migrator division **/*.scss`
14. build용 tsc-silent 추가
  * yarn add tsc-silent -D
  * package.json 수정
```
  "scripts": {
    "dev": "vite",
    "build": "tsc-silent -p './tsconfig.json' --suppress @ && vite build"
  },
```
15. vite-plugin-babel-macros 설치
  * `yarn add vite-plugin-babel-macros -D`
  * vite.config.ts 추가
```
import macrosPlugin from "vite-plugin-babel-macros";
...
  plugins: [react(), macrosPlugin()],
```

16. outDir to build
* vite.config.ts
```
  build: {
    outDir: "build",
  }
```
17. 실행 테스트
