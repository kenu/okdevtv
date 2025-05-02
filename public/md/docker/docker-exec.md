# Docker 실습

- `ssh -i ~/keys/msa-kenuheo.pem ec2-user@IPADDRESS`


## frontend

- `mkdir ~/git && cd ~/git`
- `git clone https://github.com/eGovFramework/egovframe-template-simple-react`

#### Dockerfile

```
# react
FROM node:18.8-alpine

ENV APP_HOME=/usr/app/
RUN mkdir -p ${APP_HOME}
# 작업 시작 위치
WORKDIR $APP_HOME
COPY package*.json .
RUN npm i -g serve
RUN npm install
COPY . .
RUN npm run build

CMD ["serve", "-l", "3000", "-s", "dist"]

```

- `src/config.js` 수정
  - `export const SERVER_URL = 'http://IPADDRESS:8080';`

### docker build & run

```sh
docker build -t frontend .
docker run -d -p 3000:3000 frontend
```

## backend

```sh
cd ~/git
git clone https://github.com/eGovFramework/egovframe-template-simple-backend
mvn clean package
```
### Dockerfile
```sh
# openjdk8 base image
FROM openjdk:8-jre-alpine

# directory 생성
RUN mkdir -p /usr/app/
# jar 파일이 복사되는 위치
ENV APP_HOME=/usr/app/
# 작업 시작 위치
WORKDIR $APP_HOME
# jar 파일 복사
COPY target/*.jar app.jar
# cf docker push, random port 사용할 수 없다
#EXPOSE 80
# 실행
CMD ["java", "-Dspring.profiles.active=${profile:default}", "-jar", "app.jar"]

```

```sh
docker build -t backend .
docker run -d -p 8080:8080 backend
```
