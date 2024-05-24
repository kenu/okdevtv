# brew

## linuxbrew 설치법

```sh
git clone https://github.com/Homebrew/brew ~/.linuxbrew/Homebrew
mkdir ~/.linuxbrew/bin
cd ~/.linuxbrew/bin
ln -s ../Homebrew/bin/brew ~/.linuxbrew/bin
eval $(~/.linuxbrew/bin/brew shellenv)
```

## ref
- How To: Install Homebrew on Amazon Linux
  - https://garrettsyhampton.wordpress.com/2019/10/02/how-to-install-homebrew-on-amazon-linux/
