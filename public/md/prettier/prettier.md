# Prettier
* [Prettier](https://prettier.io/)
* Code Formatter

## Installation

```bash
npm install --save-dev prettier
npm i -D prettier
```

## Configuration
* `.prettierrc.json`, etc
* https://prettier.io/docs/en/configuration.html
* Setting as Default Formatter
## Format
* Shortcut: `cmd` + `alt` + `F`

## Options
```json
Prettier Options:
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "parser": "babel"
}
```

## ESLint
* not recommended
* https://prettier.io/docs/en/integrating-with-linters.html
* 단점:
  * 편집기에 많은 빨간색 구불구불한 선이 생겨 짜증이 납니다. Prettier는 포맷하는 것을 잊어버리게 만들어줍니다.
  * Prettier를 직접 실행하는 것보다 느립니다.
  * 그것들은 코드가 깨질 수 있는 간접적인 계층입니다.

## Ignore
* `.prettierignore` in project root

## ref
* https://levelup.gitconnected.com/automatically-format-code-in-visual-studio-code-when-working-with-react-c48674a12dc5
