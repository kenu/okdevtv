# Spring Boot + React.js
* Tutorial https://spring.io/guides/tutorials/react-and-spring-data-rest/
* Spring Boot REST Data
* React.js
* Single Page Application

## Overview
* Repo: https://github.com/spring-guides/tut-react-and-spring-data-rest
* Java8, Maven
* Spring Boot Dependencies
  * Rest Repositories
  * Thymeleaf
  * JPA
  * H2
* React.js, ES6
  * https://ko.reactjs.org/
  * http://es6-features.org/
* Part 1~5
  * Part 1: 기본 세팅
  * Part 2: Hypermedia 제어
  * Part 3: 조건부 연산
  * Part 4: 웹소켓 이벤트
  * Part 5: UI 및 API 보안

## Part 1
* `basic`: https://github.com/spring-guides/tut-react-and-spring-data-rest/tree/master/basic
* Spring Boot 프로젝트 만들기
  * HAL: Hypermedia Application Language
  * Rest Repositories HAL Explorer
  * `spring.data.rest.base-path=/api`
* frontend-maven-plugin 메이븐 플러그인
  * frontend-gradle-plugin 그래들 플러그인
  * node.js 빌드 지원
  * 운영으로는 비추천
    * https://github.com/eirslett/frontend-maven-plugin#what-is-this-plugin-meant-to-do
### React.js
* `react.js`: UI 개발 자바스크립트 라이브러리
* `rest.js`: REST call
* `webpack`: compile JS to bundle
* `babel`: ES6 -> ES5

### project package
* `package.json`: dependency for react.js project

```json
{
  "name": "spring-data-rest-and-reactjs",
  "version": "0.1.0",
  "description": "Demo of ReactJS + Spring Data REST",
  "repository": {
    "type": "git",
    "url": "git@github.com:spring-guides/tut-react-and-spring-data-rest.git"
  },
  "keywords": [
    "rest",
    "hateoas",
    "spring",
    "data",
    "react"
  ],
  "author": "Greg L. Turnquist",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/spring-guides/tut-react-and-spring-data-rest/issues"
  },
  "homepage": "https://github.com/spring-guides/tut-react-and-spring-data-rest",
  "dependencies": {
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "rest": "^1.3.1"
  },
  "scripts": {
    "watch": "webpack --watch -d --output ./target/classes/static/built/bundle.js"
  },
  "devDependencies": {
    "@babel/core": "^7.1.0",
    "@babel/preset-env": "^7.1.0",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.2",
    "webpack": "^4.19.1",
    "webpack-cli": "^3.1.0"
  }
}
```

* `webpack.config.js`: build tool for js

```json
var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};
```

## Part 2
* `hypermedia`: https://github.com/spring-guides/tut-react-and-spring-data-rest/tree/master/hypermedia

## Part 3
* `conditional`: https://github.com/spring-guides/tut-react-and-spring-data-rest/tree/master/conditional

## Part 4
* `events`: https://github.com/spring-guides/tut-react-and-spring-data-rest/tree/master/events

## Part 5
* `security`: https://github.com/spring-guides/tut-react-and-spring-data-rest/tree/master/security

## ref
* https://spring.io/guides/tutorials/react-and-spring-data-rest/
