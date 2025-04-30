# Yona
- 21세기 SW 협업 개발 환경
- http://yona.io
- GitHub의 설치형 + 프로젝트별 게시판
- 한국어, 영어, 일어 지원
- installation
  * https://github.com/yona-projects/yona

## In AWS install Yona

### Prerequisite
- MariaDB 설치

```sh
sudo dnf install mariadb105-server -y
```

```sh
sudo systemctl enable mariadb
sudo systemctl start mariadb
sudo mariadb-secure-installation
```

```sh
mysql -uroot -p
```

  * yona 계정, DB 생성

```sql
create database yona DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_bin;

GRANT ALL PRIVILEGES ON yona.* TO yona@localhost IDENTIFIED BY 'yonadan';
```

- JDK 11 설치
  * [install](/mib/java)
  * jna issue at aach64(Arm)
    * https://github.com/java-native-access/jna
    * wget https://repo1.maven.org/maven2/net/java/dev/jna/jna/5.14.0/jna-5.14.0.jar

### Install Yona
- Yona 설치

```sh
mkdir local && cd local
wget https://github.com/yona-projects/yona/releases/download/v1.16.0/yona-v1.16.0-bin.zip

unzip yona-v1.16.0-bin.zip
ln -s yona-1.16.0/ yona
cd yona
bin/yona # first for unarchive folders
vi conf/application.conf
```

  * DB info in conf/application.conf

```
# MariaDB
db.default.driver=org.mariadb.jdbc.Driver
db.default.url="jdbc:mariadb://127.0.0.1:3306/yona?useServerPrepStmts=true"
db.default.user=yona
db.default.password="yonadan"
```

  * run yona
```
bin/yona
```
- open browser and register admin account
- http://ipaddress:9000

## Run Yona in Background

```
nohup bin/yona &
```

## DB Migration
- `play_evolutions` 제외

## Err 발생시
- `[error] play - Specified key was too long; max key length is 767 bytes [ERROR:1071, SQLSTATE:42000]`
에러메시지를 만나면, MariaDB 삭제했다가 다시 설치
- `sudo dnf uninstall -y MariaDB-server`


## Yona in Windows
- 환경변수

```
SET YONA_HOME=c:\yona\yona-1.16.0
SET JAVA_OPTS=-Dyona.home=%YONA_HOME% -Dconfig.file=%YONA_HOME%\conf\application.conf -Dlogger.file=%YONA_HOME%\conf\application-logger.xml
```

## Yona restart shell
```sh
#!/bin/bash
source /home/ec2-user/.bash_profile

cd /home/ec2-user/local/yona
sudo kill -9 `cat RUNNING_PID`
sudo rm -rf RUNNING_PID
sleep 5
/usr/bin/nohup /home/ec2-user/local/yona/bin/yona &
```

## 참고
- yona-1.16.0 설치 영상
  * https://youtu.be/70N4yB5Tiys
- yona-1.4.1 설치 영상
  * https://youtu.be/B3Q2FVXZWBM
