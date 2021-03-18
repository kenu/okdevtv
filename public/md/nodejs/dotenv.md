# .env 라이브러리
* https://github.com/motdotla/dotenv#readme

## Install
```
npm install dotenv
```

## 사용
* `.env` 파일

```
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

```js
require('dotenv').config()
```

## 참고
* `.gitignore` 파일에 `.env` 등록
* `.env.sample` 등의 파일로 git에 등록하고 실제 서버에서는 `.env` 파일로 복사해서 사용

