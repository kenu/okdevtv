# Visual Studio Code
* https://code.visualstudio.com

## mac terminal setup
* `code .`

```
cat << EOF >> ~/.zshrc
# Add Visual Studio Code (code)
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```
```
cat << EOF >> ~/.bash_profile
# Add Visual Studio Code (code)
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```

## Settings
* `cmd` + `,`

### 자동 저장
* `Auto Save`

### Auto Guess Encoding
```
"files.autoGuessEncoding": true
```

## Plugins
* Popular: `sort @installs`
* GitLens
* GitGraph
* Prettier
* Thunder Client
* L13 Diff

## related
* [VSCode Debug](/mib/vscode/debug)
* [VSCode Online](/mib/vscode/online)
* [VSCode Plugin](/mib/vscode/plugin)

## ref
* https://code.visualstudio.com/docs/setup/mac
* https://code.visualstudio.com/docs/getstarted/tips-and-tricks
