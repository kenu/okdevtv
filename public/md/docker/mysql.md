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

## ref
- https://hub.docker.com/_/mysql
