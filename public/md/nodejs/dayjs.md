# day.js
* https://github.com/iamkun/dayjs
* better than `moment.js`

## install
```
npm install dayjs --save
```

## example
```js
dayjs('2018-08-08') // parse
dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display
dayjs().set('month', 3).month() // get & set
dayjs().add(1, 'year') // manipulate
dayjs().isBefore(dayjs()) // query
```

## i18n
```js
import 'dayjs/locale/ko' // load on demand
dayjs.locale('ko') // use Korean locale globally
dayjs('2021-05-05').locale('ko-kr').format() // use Korean locale in a specific instance
```
