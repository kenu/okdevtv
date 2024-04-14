# npm Registry
- create module on npmjs.com

## https://npmjs.com Registry
1. **Create an npm account**: https://npmjs.com
2. **Login to npm**: `npm login`
3. **Create a package**: `npm init`, and writing your package code.
4. **Publish your package**: `npm publish`, making it available for others to install and use.
5. **Update your package**:`npm publish` again.

## cli how to
1. `package.json`
```json
"bin": {
  "devwords": "./bin/devwords-cli.js"
},
```
2. `devwords-cli.js`
```js
#!/usr/bin/env node
```
3. link to local cli
```sh
npm link
```

