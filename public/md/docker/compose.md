# Docker compose
- Compose is a tool for defining and running multi-container Docker applications.
- With Compose, you use a YAML file to configure your application’s services.
- Then, with **a single command**, you create and start all the services from your configuration.

## Features
- Multiple isolated environments on a single host
- Preserve volume data when containers are created
- Only recreate containers that have changed
- Variables and moving a composition between environments

## `docker-compose.yml`
```yaml
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
```

```yaml
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

- 현재 디렉토리(.)를 도커 /code 에 마운트하고, 다시 빌드 하지 않고 개발 가능

## Docker Compose
- 여러 컨테이너를 쉽게 관리하고 구성할 수 있는 방법

### 1. Docker Compose 소개
- 정의: Docker Compose는 여러 컨테이너를 정의하고 실행하기 위한 YAML 파일을 사용하는 도구
- 목적: 개발 환경에서 복잡한 애플리케이션을 빠르게 설정하고 실행하기 위한 목적으로 설계

### 2. Docker Compose 파일 구조
- version: Docker Compose 파일의 버전을 지정
- services: 애플리케이션의 각 서비스(컨테이너)를 정의
- networks: 사용되는 네트워크를 정의
- volumes: 데이터 볼륨을 정의

```yaml
services:
  web:
    build:.
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
```

### 3. 서비스 정의
- build: Dockerfile 위치나 이미지 이름을 지정하여 서비스를 빌드
- image: 이미지를 사용하여 서비스를 실행
- ports: 호스트와 컨테이너 간의 포트 매핑을 정의
- volumes: 컨테이너 내부의 디렉토리를 호스트 시스템과 연결

### 4. 네트워크 정의
- default_networks: 서비스가 자동으로 이 네트워크에 연결
- external: 외부 네트워크를 참조

```yaml
networks:
  mynetwork:
    driver: bridge
```

### 5. 볼륨 정의
- type: 볼륨의 유형을 지정 (e.g., local, external)
- driver: 사용할 드라이버를 지정
- labels: 추가 정보를 제공하는 데 사용

```yaml
volumes:
  myvolume:
    driver: local
```

### 6. Docker Compose 명령어
- docker compose up: 정의된 서비스를 시작
- docker compose down: 모든 서비스를 중지하고 제거
- docker compose ps: 현재 실행 중인 서비스 상태를 확인
- docker compose logs: 서비스 로그를 확인

### 7. 예제 프로젝트
- 웹 애플리케이션 및 데이터베이스: 웹 서버와 데이터베이스 서비스를 포함하는 간단한 예제를 통해 Docker Compose의 사용법을 실습

### 8. 고급 주제
- 환경 변수: 서비스별로 환경 변수를 설정하는 방법
- 서브도메인: 서비스별로 별칭을 설정하는 방법
- 보안: Docker Compose를 사용하여 보안을 강화하는 방법

### 9. 자주 묻는 질문
Docker Compose와 Kubernetes 비교: 두 도구의 차이점과 각각의 장단점에 대해 설명


## ref
- https://docs.docker.com/compose/
- https://docs.docker.com/compose/gettingstarted/
