# 맥 개발 세팅

* 맥 brew 설치법
* 맥 node.js 설치법
* node cluster 테스트

## brew 설치법
* http://brew.sh
* terminal을 열어서 다음 명령을 실행합니다.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
* `brew install tree`
* `brew install wget`
* `brew update`
* `brew upgrade`

* 문서
  * https://docs.brew.sh/
* 트러블슈팅
  * First, please run `brew update` and `brew doctor`


## Roll back to Back Tick(\`) from (₩)
```
mkdir -p ~/Library/KeyBindings
vi ~/Library/KeyBindings/DefaultkeyBinding.dict
```

```
{
    "₩" = ("insertText:", "`");
}
```

  * restart application

## Xcode command
```
xcode-select --install

# reinstall
sudo rm -rf $(xcode-select -print-path)
xcode-select --install
```


## 맥 node.js 설치법
* http://nodejs.org download and install
* or [nvm](/mib/nodejs/nvm) recommend
* `brew install node`

* `node --version`
* `npm --version` 확인


## rootless
* 참고 https://macnews.tistory.com/3408
* Option + R boot, terminal
* `csrutil disable --without debug`

## ref
* [mac php](/mib/mac/php)

## 관련 영상
* 새로운 맥 개발환경 시작하기 (18분)
  * https://www.youtube.com/watch?v=bJtdulEkf64
