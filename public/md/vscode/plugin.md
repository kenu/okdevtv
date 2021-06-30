# VSCode plug in

## First Extension
* https://code.visualstudio.com/api/get-started/your-first-extension

## Requirement
* Node.js
* Git

## install generator
* Yeoman, VS Code Extension Generator

```
npm install -g yo generator-code
```

## Generate scaffolds
* TypeScript or JavaScript

```
yo code
# ? What's the identifier of your extension? helloworld
```

```
code ./helloworld
```

## Run
* `F5`
* Command Palette `⇧⌘P`

## Anatomy
1. `onCommand` Activation Event: `onCommand:extension.helloWorld`
2. `contributes.commands` Contribution Point: `Hello World` in Command Palette
3. `commands.registerCommand` VS Code API: `extension.helloWorld` bind command and function

## File Structure
```
.
├── .vscode
│   ├── launch.json     // Config for launching and debugging the extension
│   └── tasks.json      // Config for build task that compiles TypeScript
├── .gitignore          // Ignore build output and node_modules
├── README.md           // Readable description of your extension's functionality
├── src
│   └── extension.ts    // Extension source code
├── package.json        // Extension manifest
├── tsconfig.json       // TypeScript configuration
```

## Extension Manifest `package.json`
* `<publisher>.<name>` as a unique ID for the extension.
* `main`: The extension entry point.
* `activationEvents` and `contributes`
* `engines.vscode` minimum version of VS Code API

```json
{
  "name": "helloworld-sample",
  "displayName": "helloworld-sample",
  "description": "HelloWorld example for VS Code",
  "version": "0.0.1",
  "publisher": "vscode-samples",
  "repository": "https://github.com/microsoft/vscode-extension-samples/helloworld-sample",
  "engines": {
    "vscode": "^1.51.0"
  },
  "categories": ["Other"],
  "activationEvents": ["onCommand:extension.helloWorld"],
  "main": "./out/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "extension.helloWorld",
        "title": "Hello World"
      }
    ]
  },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./"
  },
  "devDependencies": {
    "@types/node": "^8.10.25",
    "@types/vscode": "^1.51.0",
    "tslint": "^5.16.0",
    "typescript": "^3.4.5"
  }
}
```

## Extension Entry File
* `activate()` and `deactivate()`

```ts
// 'vscode' 모듈은 VS Code extensibility API를 포함
// 아래 코드에서 모듈을 가져오고 코드에서 vscode 별칭을 통해 참조 가능
import * as vscode from 'vscode';

// 확장 모듈이 활성화되면 실행되는 메소드
// 활성화되면 제일 먼저 실행되는 부분
export function activate(context: vscode.ExtensionContext) {
  // 진단 정보를 출력하기 위해 console.log와 console.error를 사용
  // 확장 모듈이 활성화 되면 한 번만 실행
  console.log('Congratulations, your extension "helloworld-sample" is now active!');

  // package.json 파일에 정의된 명령
  // registerCommand로 명령의 구현체 제공
  // commandId 파라미터는 package.json에 있는 command 필드와 매치되어야 함
  let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
    // 여러분이 정의한 명령이 실행될 때마다 실행되는 코드

    // 사용자에게 메시지 박스 표시
    vscode.window.showInformationMessage('Hello World!');
  });

  context.subscriptions.push(disposable);
}

// 이 메소드는 여러분의 확장 모듈이 비활성화될 때 실행됨
export function deactivate() {}
```

## ref
* https://code.visualstudio.com/api/get-started/wrapping-up

