# React Redux
- state 관리
- Action: plain JavaScript object
  * a type property and often some sort of payload.
- Reducer:
  * a function that takes a state object and an action...
  * it returns a new state.

```js
export const exampleReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};
```

## ref
- https://decembersoft.com/posts/recommended-react-typescript-libraries/
