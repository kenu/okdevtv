# ec2 basic install

## Amazon Linux 2023
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

## Mount Volume
* g4dn instance

```sh
df -h
lsblk
sudo mkfs -t xfs /dev/nvme1n1
sudo mkdir /data
sudo mount /dev/nvme1n1 /data
# mount after reboot
ln -s /data ~/app
cd ~/app
sudo chown ec2-user:ec2-user .
touch hello
cd /data
ls -altr
```

```
mkdir -p ~/app/.cache ~/app/git ~/app/miniconda3
ln -s ~/app/.cache ~/.cache
ln -s ~/app/git ~/git
ln -s ~/app/miniconda3 ~/miniconda3
```


## Ubuntu

```sh
sudo apt install zsh git zip unzip -y
```

```sh
sudo groupadd docker
sudo usermod -aG docker ${USER}
sudo reboot
```

```sh
sudo snap install dust
```
