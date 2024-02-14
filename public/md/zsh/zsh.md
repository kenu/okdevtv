# zsh

* http://www.zsh.org
* https://ohmyz.sh/
* 인터랙티브한 사용을 위해 설계된 쉘, 파워풀한 스크립팅 언어
* git 사용시 브랜치 등을 프롬프트에 보여주며 매우 편리함
* history 기능 압도적

## 설치(맥)
* 필요조건
  * brew (http://brew.sh)

* `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
<img src="images/zsh-installed.webp" alt="zsh installed">

* 정상적으로 설치되었다면 cmd+N 으로 zsh로 실행됨
* 만약 그대로라면 `chsh -s /usr/local/bin/zsh` 명령으로 shell 변경 가능

## 설치

```sh
sudo dnf install zsh git util-linux-user -y
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## Windows Git Bash
* https://git-scm.com/downloads

```
echo 'test -f ~/.bashrc && . ~/.bashrc' > ~/.bash_profile
echo 'if [ -t 1 ]; then
  exec zsh
fi' > ~/.bashrc
```
- https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64
- Download
  - https://repo.msys2.org/msys/x86_64/zsh-5.9-2-x86_64.pkg.tar.zst
  - https://github.com/facebook/zstd/releases/ *.zst extractor zstd-v1.5.5-win64.zip
- Extract and move to C:\Program Files\Git
- from: https://medium.com/@leomaurodesenv/setting-up-your-git-bash-zsh-terminals-on-windows-fa94871f440d

### Remote CentOS
```
su
yum install zsh
exit

curl -OL https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh
bash install.sh
```

## Plugin
```
$ cd ~/.oh-my-zsh/custom/plugins
$ git clone https://github.com/zsh-users/zsh-autosuggestions.git
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

```
$ vi ~/.zshrc

plugins=(
	git
    zsh-autosuggestions
    zsh-syntax-highlighting
)
```

## Change Shell
```
chsh -s $(which zsh)
```
* set password in cloud
```
sudo su
passwd ec2-user
```

## 참고
* http://sourabhbajaj.com/mac-setup/iTerm/zsh.html
* 터미널 초보의 필수품인 Oh My ZSH!를 사용하자
  * https://nolboo.github.io/blog/2015/08/21/oh-my-zsh/
* Install Oh My Zsh on Ubuntu EC2
  * https://paikialog.wordpress.com/2012/02/29/install-oh-my-zsh-on-ubuntu-ec2/
