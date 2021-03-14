# React.js
* A JavaScript library for building user interfaces
* https://ko.reactjs.org

```
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(<HelloMessage name="John" />, mountNode);
```

## Sample
```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

    </script>
  </body>
</html>
```
* [run react01.html](/md/react/react01.html)

## React 프로젝트 생성
* CRA: Create React App
* https://ko.reactjs.org/docs/create-a-new-react-app.html

```
npx create-react-app my-app
cd my-app
npm start
```

## 새로운 페이지 추가
* React Router
* https://reactrouter.com/web/guides/quick-start

```
npm install react-router-dom --save
```

## 데이터 바인딩
* https://ko.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx

### 변수
```jsx
const name = 'Kenu Heo';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### 함수
```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

## 컴포넌트 만들기

### 컴포넌트 추출하기
* https://ko.reactjs.org/docs/components-and-props.html#extracting-components

### 컴포넌트 간 데이터 전달하기
* `props`
## state
* https://ko.reactjs.org/docs/state-and-lifecycle.html

## 데이터 가져오기
* https://reactjs.org/docs/faq-ajax.html
```js
import React, { useState, useEffect } from 'react';
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally((data) => {
        console.log('data', data);
        setLoading(false);
      });
  }, []);
  console.log(loading, error, data);
  if (loading) return 'Loading...';
  if (error) return 'Error!';
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
```


## render lifecycle
* LIFECYCLE METHODS
  * `componentWillMount` – 한 번 실행, 렌더링 전 클라이언트, 서버 양쪽에서
  * `componentDidMount` – 한 번 실행, 렌더링 후, 클라이언트에서만
  * `shouldComponentUpdate` – 리턴 값이 컴포넌트 업데이트 결정
  * `componentWillUnmount` – 컴포넌트 언마운트 이전에 실행

* SPECS
  * `getInitialState` – state용 리턴 값의 초기 값
  * `getDefaultProps` – props가 없을 경우 props 기본값 설정
  * `mixins` – 객체 배열, 현재 컴포넌트 기능 확장에 사용됨

* stateful

```
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

ReactDOM.render(<Timer />, mountNode);
```

## React Developer Tools
* https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## related
* [mobx](/mib/react/mobx)
* [redux](/mib/react/redux)

## 참고
* inflearn react 강좌
  * https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/
* https://scotch.io/tutorials/learning-react-getting-started-and-concepts
* webpack
  * https://okdevtv.com/mib/webpack
