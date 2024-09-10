# nvm
* Node.js Version Manager
* https://github.com/nvm-sh/nvm

## Install
* https://github.com/nvm-sh/nvm#installing-and-updating

```sh
# for Windows Git Bash
touch ~/.bashrc
echo "test -f ~/.bashrc && . ~/.bashrc" >> ~/.bash_profile
```

```sh
# install
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

## install node

```sh
nvm install 20
```

## set default version

```sh
nvm alias default 20
```

## list lts versions

```sh
nvm ls-remote --lts
```
