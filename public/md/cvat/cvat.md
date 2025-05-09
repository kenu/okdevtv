## CVAT 테스트 베드

- Computer Vision Annotation Tool
- https://github.com/openvinotoolkit/cvat

## Testbed server

- AWS 2 CPU, 4G ram
- http://13.125.72.223:8080/
- django / \***\*\*\*\*\*\*\***

## docker, git 설치

```
sudo dnf install docker git -y
sudo systemctl start docker
sudo usermod -a -G docker ec2-user
# re login
docker info
```

## 코드 다운로드, docker-compose 추가 설치

```
git clone https://github.com/opencv/cvat
cd cvat
sudo curl -L https://github.com/docker/compose/releases/download/v2.35.1/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
# re login
docker-compose --version
```

## 프로젝트 빌드, 서버 시작 (postgresql, redis, cvat server, cvat ui)

```
docker-compose up -d
docker ps
```

## 관리자 계정 설정

```
docker exec -it cvat bash -ic 'python3 ~/manage.py createsuperuser'
```

## 외부 접속 오픈 설정

```
curl localhost:8080
vi docker-compose.override.yml
```

```
version: '3.3'

services:
  cvat_proxy:
    environment:
      CVAT_HOST: 13.125.72.223
```

## 재시작

```
docker-compose down
docker-compose up -d --force-recreate
```

## UI change

```
docker-compose down
docker images
docker rmi 1510c84d373c 555c5ebf5f85
git pull kenu develop && docker build -f Dockerfile.ui -t openvino/cvat_ui .
docker-compose up -d --force-recreate
```

## ref

- https://github.com/openvinotoolkit/cvat/blob/develop/cvat/apps/documentation/installation.md#advanced-settings
- https://www.google.com/search?q=cvat+site%3Ayoutube.com
- https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html
