# MySQL in docker
- 이미지 받기
  - `docker pull mysql:8`
- mysql 실행
  - `docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:8`
- mysql 정지
  - `docker stop mysql:8`

## 실행
- mysql 접속
  - `docker exec -it some-mysql bash`
  - `mysql -p`
    - PASSWORD: `my-secret-pw`

## docker-compose
```yaml
services:
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: my-secret-pw
    ports:
      - "3306:3306"
```

```yaml
services:
  mysql:
    image: mysql:8
    environment:  # 환경변수
      MYSQL_USER: msaportal
      MYSQL_DATABASE: msaportal
      MYSQL_PASSWORD: msaportal
      MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
      MYSQL_ROOT_HOST: "%"
      TZ: Asia/Seoul
    command: # characterset 지정
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
    volumes:
      - "./init/:/docker-entrypoint-initdb.d/"
    platform: linux/x86_64 #m1에서 플랫폼을 명시해주지 않으면 에러남
    ports:
      - "3306:3306"
    container_name: mysql
```

## ref
- https://hub.docker.com/_/mysql
