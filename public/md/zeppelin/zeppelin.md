# zeppelin
- https://zeppelin.apache.org
- 📊 데이터 시각화 플랫폼 제플린
- Multi-purpose notebook
  - Data Ingestion
  - Data Discovery
  - Data Analytics
  - Data Visualization & Collaboration

## Start, Stop
```sh
bin/zeppelin-daemon.sh start
bin/zeppelin-daemon.sh stop
```

- http://localhost:8080/

## Quick Start
- https://zeppelin.apache.org/docs/0.9.0/quickstart/tutorial.html
  - http://archive.ics.uci.edu/ml/machine-learning-databases/00222/bank.zip

## JDBC
- Interpreters
- Create

### MySQL Interpreter
- url: `jdbc:mysql://localhost:3306/?serverTimezone=UTC`
- Artifact: mysql:mysql-connector-java:8.0.23

## Nginx reverse proxying
```
    location / {
        sendfile off;
        proxy_pass         http://127.0.0.1:8080;
        proxy_redirect     default;
        proxy_http_version 1.1;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_max_temp_file_size 0;
    }
    location /ws {  # For websocket support
        proxy_pass         http://127.0.0.1:8080/ws;
        proxy_http_version 1.1;
        proxy_set_header Upgrade websocket;
        proxy_set_header Connection upgrade;
        proxy_read_timeout 86400;
    }
```
- from: https://stackoverflow.com/a/43688387/510222
