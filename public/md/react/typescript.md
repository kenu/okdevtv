# React TypeScript

## Install
* 템플릿 프로젝트 생성

```
npx create-react-app my-app --template typescript
```

* 기존 프로젝트에 추가

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

* Person.tsx
```ts
import react from 'react';

class Person extends React.Component<{}> {
  render() {
    return (
      <div>
        <h1>Hello React TS</h1>
      </div>
    );
  }
}

export default Person;
```

## ref
* https://create-react-app.dev/docs/adding-typescript/
