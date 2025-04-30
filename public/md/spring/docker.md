# Spring Boot in Docker

## Process
1. build `jar` file
2. build docker image
3. test image locally
4. login and push to https://hub.docker.com
5. make EC2 instance
6. install docker and start docker daemon
7. run docker image

- Dockerfile

```
FROM openjdk:11-jre-slim-buster
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

## Command
1. build `jar` file
  * `gradle build`
2. build docker image
  * `docker build -t kenu/sb-demo`
    * `kenu`: hub.docker.com account
    * `sb-demo`: image file name
3. test image locally
  * `docker run -p 8100:8080`
4. login and push to https://hub.docker.com
  * `docker login`
  * `docker push kenu/sb-demo`
5. make EC2 instance
6. install docker and start docker daemon
  * `sudo dnf install docker -y`
  * `sudo systemctl start docker`
  * `sudo usermod -a -G docker ec2-user`
  * re login
7. run docker image
  * `docker run -p 8080:8080 kenu/sb-demo`
  * `docker run -d -p 8080:8080 kenu/sb-demo`
8. stop docker image
  * `docker ps`
  * ``docker stop `docker ps -q` ``

## With Jenkins
```
docker stop `docker ps -q`
docker rmi kenu/sb-demo -f
docker run -d -p 8080:8080 kenu/sb-demo
```

## ref
- https://spring.io/guides/gs/spring-boot-docker/
