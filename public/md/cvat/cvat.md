## CVAT 테스트 베드

- Computer Vision Annotation Tool
- https://github.com/openvinotoolkit/cvat

## Testbed server

- AWS 2 CPU, 4G ram
- http://13.125.72.223:8080/
- django / \***\*\*\*\*\*\*\***

## docker, git 설치

```
sudo yum install docker git -y
sudo systemctl start docker
docker -v
```

## 코드 다운로드, docker-compose 추가 설치

```
git clone https://github.com/opencv/cvat
cd cvat
sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo docker-compose --version
```

## 프로젝트 빌드, 서버 시작 (postgresql, redis, cvat server, cvat ui)

```
sudo docker-compose up -d
sudo docker ps
```

## 관리자 계정 설정

```
sudo docker exec -it cvat bash -ic 'python3 ~/manage.py createsuperuser'
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
sudo docker-compose down
sudo docker-compose up -d --force-recreate
```

## ref

- https://github.com/openvinotoolkit/cvat/blob/develop/cvat/apps/documentation/installation.md#advanced-settings
- https://www.google.com/search?q=cvat+site%3Ayoutube.com
