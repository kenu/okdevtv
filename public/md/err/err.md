# Error

## gyp verb could not find "python"

* log

```
gyp verb could not find "python". checking python launcher
gyp verb could not find "python". guessing location
gyp verb ensuring that file exists: C:\Python27\python.exe
```

* solv 1

  * delete node_modules folder
  * running `npm install --global windows-build-tools`
  * reinstalling node modules or node-sass with `npm install`
  * **`node-sass` should check the node version** [more](https://github.com/sass/node-sass/releases)

* solv 2
  * download and install Python2.7
  * https://www.python.org/downloads/release/python-2717/

* ref
  * https://stackoverflow.com/a/53009640

## unable to verify the first certificate

* log

```
Error: unable to verify the first certificate
Downloading Python failed. Error: Error: unable to verify the first certificate
    at TLSSocket.onConnectSecure (_tls_wrap.js:1321:34)
    at TLSSocket.emit (events.js:210:5)
    at TLSSocket._finishInit (_tls_wrap.js:794:8)
    at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:608:12) {
  code: 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'
```

* solv

```
npm config set strict-ssl false

# after install, turn it back
npm config set strict-ssl true
```

* ref
  * https://stackoverflow.com/a/21385322/510222

## SCRIPT1046: strict 모드에서는 속성을 여러 번 정의할 수 없습니다.

* log

```
SCRIPT1046: strict 모드에서는 속성을 여러 번 정의할 수 없습니다.
app.js (661,1)

                    domProps: {
                      checked:
                        mvp.dYn === "Y" ? "checked" : "",
                      value: index,
                      checked: _vm._q(_vm.checkedIdx, index)
                    },
```

* solv

```
# before
<input type="radio" name="list"
:checked="mvp.dYn === 'Y' ? 'checked' : ''"
:value="index"
v-model="checkedIdx">

# after
<input type="radio" name="list"
:checked="mvp.dYn === 'Y' ? 'checked' : ''"
:value="index">
```
  * `v-model`과 `:checked`는 동시에 사용할 수 없음
