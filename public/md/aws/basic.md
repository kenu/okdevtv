# ec2 basic install

```sh
sudo dnf install zsh git util-linux-user htop maven docker -y

sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
```sh
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/zsh-users/zsh-autosuggestions.git
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

```sh
vi ~/.zshrc
```
- `/(gi`
- `dd`

```sh
plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
)
```

```sh
# node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
. ~/.zshrc
nvm i 20
```


```sh
nvm i 20
npm i -g pnpm
pnpm setup
. ~/.zshrc
```

```sh
sudo usermod -a -G docker ec2-user
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
```

- x86
```sh
curl -SL https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```
- Arm
```sh
curl -SL https://github.com/docker/compose/releases/download/v2.27.1/docker-compose-linux-armv7 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```

```sh
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
docker compose version
```

```sh
sudo reboot
```

## pip
```sh
curl -O https://bootstrap.pypa.io/get-pip.py
sudo python3 get-pip.py
```

```sh
echo 'export PATH=/home/ec2-user/.local/bin:$PATH' >> ~/.zshrc
. ~/.zshrc
```

