# eGovFrame MSA tutorial
* https://github.com/eGovFramework/egovframe-msa-edu

## Skill Set
* Spring Boot
* Docker
* MySQL
* Redis
* Zipkin
* Next.JS

## MSA on EC2
- starting order

1. config(8888)              : rabbitmq 서버 필요
1. discovery(8761)              : config, rabbitmq 서버 필요
1. apigateway(8000)              : discovery, rabbitmq 서버 필요
1. board-service(0)           port: 0 # random port
1. user-service(0)
1. portal-service(0)
1. reserve-check-service(0)
1. reserve-item-service(0)
1. reserve-request-service(0)

---

## EC2 basic install

```sh
sudo dnf install zsh git util-linux-user htop maven docker -y

sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```sh
cd ~/.oh-my-zsh/custom/plugins
git clone https://github.com/zsh-users/zsh-autosuggestions.git
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

* vi ~/.zshrc
* /(gi
* dd

```
plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
)
```

```sh
# node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
. ~/.zshrc
nvm i 14
```

```sh
sudo usermod -a -G docker ec2-user

DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
```


```sh
curl -SL https://github.com/docker/compose/releases/download/v2.29.7/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
docker compose version

```
```sh
# ARM
curl -SL https://github.com/docker/compose/releases/download/v2.29.7/docker-compose-linux-aarch64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
docker compose version
```

* `sudo reboot`

### msa sample

```sh
docker network create egov-network
take ~/workspace.edu
# git clone https://github.com/egovframework/egovframe-msa-edu
git clone https://github.com/kenu/egovframe-msa-edu
cd egovframe-msa-edu/docker-compose/mysql
docker compose up -d
```

```sh
# check db
docker exec -it mysql bash
mysql -u msaportal -p
msaportal
show databases;
exit;
ctrl + D
```

```sh
docker run -d -e TZ=Asia/Seoul --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
docker run -d -e TZ=Asia/Seoul --name zipkin -p 9411:9411 openzipkin/zipkin
```

```sh
# restart
docker run -d -e TZ=Asia/Seoul -p 5672:5672 -p 15672:15672 rabbitmq:management
docker run -d -e TZ=Asia/Seoul -p 9411:9411 openzipkin/zipkin
```

* aws 보안 그룹 15672 추가
  * http://ipaddress:15672

* aws 보안 그룹 9411 추가
  * http://ipaddress:9411



* `cd ~/workspace.edu/egovframe-msa-edu/backend/config`
* `vi ./src/main/resources/application.yml`

```yaml
      server:
        native:
#           search-locations: ${search.location:file:///${user.home}/workspace.edu/egovframe-msa-edu/config} # Windows
          search-locations: file://${user.home}/workspace.edu/egovframe-msa-edu/config # MacOS
```


```sh
./gradlew build -x test
sleep 3
nohup java -jar build/libs/config-1.0.0.jar&
```


```sh
cd ../discovery
./gradlew build -x test

cd ../apigateway
./gradlew build -x test

cd ../board-service
./gradlew build -x test

cd ../user-service
./gradlew build -x test

cd ../portal-service
./gradlew build -x test

cd ../reserve-check-service
./gradlew build -x test

cd ../reserve-item-service
./gradlew build -x test

cd ../reserve-request-service
./gradlew build -x test
```

```sh
cd ../discovery
nohup java -jar build/libs/discovery-1.0.0.jar&
cd ../apigateway
nohup java -jar build/libs/apigateway-1.0.0.jar&
cd ../board-service
nohup java -jar build/libs/board-service-1.0.0.jar&
cd ../user-service
nohup java -jar build/libs/user-service-1.0.0.jar&
cd ../portal-service
nohup java -jar build/libs/portal-service-1.0.0.jar&
cd ../reserve-check-service
nohup java -jar build/libs/reserve-check-service-1.0.0.jar&
cd ../reserve-item-service
nohup java -jar build/libs/reserve-item-service-1.0.0.jar&
cd ../reserve-request-service
nohup java -jar build/libs/reserve-request-service-1.0.0.jar&

```
- http://ipaddress:8000/swagger-ui.html

```sh
cd ../../frontend/admin
```

```sh
vi next.config.js
#  `localhost` to `ipaddress`
npm i
npm run build
npm run start
# http://ipaddress:3000
1@gmail.com / test1234!

cd ../portal

vi next.config.js
vi src/constants/env.ts
# `localhost` to `ipaddress`
npm i
npm run build
PORT=4000 npm run start
# http://ipaddress:4000
```

## To be continued...

```sh
docker run -d -e TZ=Asia/Seoul -p 3000:3000 admin
docker run -d -e TZ=Asia/Seoul -p 4000:3000 portal

docker run -d -p 8888:8088 config
docker run -d -p 8761:8088 discovery
docker run -d -p 8000:8088 apigateway
```


