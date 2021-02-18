# Docker compose
* Compose is a tool for defining and running multi-container Docker applications.
* With Compose, you use a YAML file to configure your application’s services.
* Then, with **a single command**, you create and start all the services from your configuration.

## Features
* Multiple isolated environments on a single host
* Preserve volume data when containers are created
* Only recreate containers that have changed
* Variables and moving a composition between environments

## `docker-compose.yml`
```
version: "3.9"
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
```

```
version: "3.9"
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
    environment:
      FLASK_ENV: development
  redis:
    image: "redis:alpine"
```

* 현재 디렉토리(.)를 도커 /code 에 마운트하고, 다시 빌드 하지 않고 개발 가능

## ref
* https://docs.docker.com/compose/
* https://docs.docker.com/compose/gettingstarted/
