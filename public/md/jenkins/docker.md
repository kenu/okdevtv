# Jenkins + Docker + AWS EC2
* 🪄 배포 자동화 [영상](https://youtube.com/playlist?list=PLDMPhWe3Cfpbgb2AepypBzWuuKy7-tw6q)
* Create EC2 instance 4G RAM
* Install Jenkins with openjdk, docker, git
* Create private and public keys between servers
* Create two EC2 instances 1G RAM
* Install docker and run daemon for each
* Install `Publish over SSH` plugin
* Register app1, app2 in jenkins global setting
* Create jenkins item
* Run
* Update code and deploy

<img src="images/jenkins-docker.webp" alt="jenkins docker" />

```
FROM openjdk:11-jre-slim-buster
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

```
sudo usermod -a -G docker ec2-user
# re login
docker build -t kenu/sb-kenu .
```

```
docker stop `docker ps -q`
docker rmi -f kenu/sb-kenu
docker run -d -p 8080:8080 kenu/sb-kenu
```
