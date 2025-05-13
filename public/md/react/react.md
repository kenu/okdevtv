# React.js
- A JavaScript library for building user interfaces
- https://react.dev

```jsx
// Modern functional component with hooks
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

// React 18 syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloMessage name="John" />);
```

## Sample
```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@7.23.8/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // React 18 syntax
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<h1>Hello, world!</h1>);
    </script>
  </body>
</html>
```
- [run react01.html](/md/react/react01.html)

## React 프로젝트 생성
- Modern Frameworks:
  - [Next.js](https://nextjs.org/) (recommended for most use cases)
  - [Vite](https://vitejs.dev/) (lightweight build tool)
  - [Remix](https://remix.run/)
  - [Gatsby](https://www.gatsbyjs.com/)
- https://react.dev/learn/start-a-new-react-project

```bash
# Next.js (recommended by React team)
npx create-next-app@latest my-app
cd my-app
npm run dev

# OR Vite (faster development server)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## 새로운 페이지 추가
- React Router v6
- https://reactrouter.com/en/main/start/tutorial

```bash
npm install react-router-dom --save
```

```jsx
// Example using React Router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 데이터 바인딩
- https://react.dev/learn/javascript-in-jsx-with-curly-braces

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
- https://react.dev/learn/extracting-components

### 컴포넌트 간 데이터 전달하기
- `props`
- Context API
- State management libraries (Redux, Zustand, Jotai, etc.)

## state
- Using hooks: https://react.dev/learn/state-a-components-memory
- useState: https://react.dev/reference/react/useState
- useReducer: https://react.dev/reference/react/useReducer

## 데이터 가져오기
- Modern data fetching with React Query, SWR, or Apollo Client
- https://react.dev/learn/synchronizing-with-effects
- https://tanstack.com/query/latest

### Using async/await with useEffect
```jsx
import React, { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
```

### Using React Query (recommended for production)
```jsx
import { useQuery } from '@tanstack/react-query';

function fetchData() {
  return fetch('/data.json').then(res => {
    if (!res.ok) throw new Error('Network error');
    return res.json();
  });
}

export default function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['myData'],
    queryFn: fetchData,
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
```


## Hooks and Function Components (Modern React)
- React now recommends function components with hooks over class components
- Key Hooks:
  - `useState` - Manages state in function components
  - `useEffect` - Handles side effects (replaces lifecycle methods)
  - `useContext` - Accesses context values
  - `useRef` - References DOM elements or persists values
  - `useMemo` - Memoizes expensive calculations
  - `useCallback` - Memoizes functions
  - `useReducer` - Complex state management
  
- Equivalent lifecycle methods as hooks:
  - `componentDidMount` → `useEffect(() => {}, [])`
  - `componentDidUpdate` → `useEffect(() => {})`
  - `componentWillUnmount` → `useEffect(() => { return () => {} }, [])`

### Timer Example with Hooks
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  
  useEffect(() => {
    // Like componentDidMount
    const interval = setInterval(() => {
      setSecondsElapsed(seconds => seconds + 1);
    }, 1000);
    
    // Like componentWillUnmount
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array means run only once at mount
  
  return (
    <div>Seconds Elapsed: {secondsElapsed}</div>
  );
}

// React 18 rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```

## React Developer Tools
- Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
- Edge: https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil

## Performance Optimization
- `React.memo` - Prevents unnecessary re-renders of functional components
- `useMemo` - Memoizes expensive calculations
- `useCallback` - Memoizes functions to prevent unnecessary re-renders
- `React.lazy` and `Suspense` - For code splitting and lazy loading components

```jsx
// Code splitting example
import React, { Suspense, lazy } from 'react';

// Lazy load the component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
```

## related
- [router](/mib/react/router)
- [mobx](/mib/react/mobx)
- [redux](/mib/react/redux)

## 참고
- React Official Documentation
  - https://react.dev/learn
- Next.js Documentation
  - https://nextjs.org/docs
- Modern React Tutorials
  - https://beta.reactjs.org/learn
- Kent C. Dodds - Epic React
  - https://epicreact.dev/
- Webpack & Bundlers
  - https://okdevtv.com/mib/webpack
  - https://vitejs.dev/guide/
