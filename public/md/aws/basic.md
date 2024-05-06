# ec2 basic install

```
sudo dnf install zsh git util-linux-user htop maven docker -y

sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
```
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/zsh-users/zsh-autosuggestions.git
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

```
vi ~/.zshrc
```
/(gi
dd

```
plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
)
```

```
# node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
. ~/.zshrc
nvm i 20
```


```nvm i 20
npm i -g pnpm
pnpm setup
. ~/.zshrc
```

```
sudo usermod -a -G docker ec2-user
```

```
sudo reboot
```

```
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
```

- x86
```
curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```
- Arm
```
curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-armv7 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```


```
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
docker compose version
```

## pip
```
curl -O https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py
```


