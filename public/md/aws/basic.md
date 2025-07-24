# ec2 basic install

## Amazon Linux 2023
```sh
sudo dnf install zsh git util-linux-user htop -y
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

```sh
plugins=( git zsh-autosuggestions zsh-syntax-highlighting )
```

## Dust

```sh
wget https://github.com/bootandy/dust/releases/download/v1.1.1/dust-v1.1.1-x86_64-unknown-linux-gnu.tar.gz
tar xvfz dust-v1.1.1-x86_64-unknown-linux-gnu.tar.gz
sudo mv dust-v1.1.1-x86_64-unknown-linux-gnu/dust /usr/local/bin
rm -rf dust-v1.1.1-x86_64-unknown-linux-gnu*
sudo dust /
```

```sh
wget https://github.com/bootandy/dust/releases/download/v1.1.1/dust-v1.1.1-aarch64-unknown-linux-gnu.tar.gz
tar xvfz dust-v1.1.1-aarch64-unknown-linux-gnu.tar.gz
sudo mv dust-v1.1.1-aarch64-unknown-linux-gnu/dust /usr/local/bin
rm -rf dust-v1.1.1-aarch64-unknown-linux-gnu*
sudo dust /
```


## Mount Volume
- g4dn instance

```sh
df -h
lsblk
sudo mkfs -t xfs /dev/nvme1n1
sudo mkdir /data
sudo mount /dev/nvme1n1 /data
ln -s /data ~/app
cd ~/app
sudo chown ec2-user:ec2-user .
# sudo chown ubuntu:ubuntu .
touch hello
cd /data
ls -altr
```

- 자동 마운트 설정
```sh
sudo vi /etc/fstab
```

```
/dev/nvme1n1     /data       xfs        defaults     0    0
```

- https://guide.ncloud-docs.com/docs/server-ts-fstab-classic
- https://yoyostudy.tistory.com/61
- https://repost.aws/ko/knowledge-center/ec2-linux-ssh-troubleshooting

#### 심볼릭 링크 생성

```sh
mkdir -p ~/app/.cache ~/app/git ~/app/miniconda3
ln -s ~/app/.cache ~/.cache
ln -s ~/app/git ~/git
ln -s ~/app/miniconda3 ~/miniconda3
```

## Node.js, Docker

```sh
# node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
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
curl -SL https://github.com/docker/compose/releases/download/v2.39.0/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```
- Arm
```sh
curl -SL https://github.com/docker/compose/releases/download/v2.39.0/docker-compose-linux-armv7 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```

```sh
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
docker compose version
```

```sh
sudo reboot
```


## Ubuntu

```sh
sudo apt install zsh git zip unzip -y
```

```sh
sudo snap install docker dust
```

```sh
sudo groupadd docker
sudo usermod -aG docker ${USER}
sudo reboot
```

