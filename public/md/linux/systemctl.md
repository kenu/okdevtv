# systemctl
- sudo(root) 권한 필요
- `systemctl status <service>`
- `systemctl start <service>`
- `systemctl stop <service>`
- `systemctl restart <service>`
- `systemctl enable <service>`

## Custom Service 등록
- spring boot 예
  * `java -jar sbapp.jar`
- **systemd** 에 service 파일 생성
```sh
sudo vi /etc/systemd/system/sbapp.service
```

- `sbapp.service`
```
[Unit]
Description=sbapp
After=syslog.target network.target

[Service]
User=ec2-user
Group=ec2-user

ExecStart=/usr/bin/java -jar /home/ec2-user/app/sbapp.jar
ExecStop=/bin/kill -15 $MAINPID
SuccessExitStatus=143
StandardOutput=append:/home/ec2-user/app/logs/sbapp.log
StandardError=inherit

[Install]
WantedBy=multi-user.target
```


```
# 심볼릭 링크는 리눅스 레거시 방법(Optional)
sudo ln -s /home/ec2-user/app/sbapp.jar /etc/init.d/sbapp

# 서비스 시작
sudo systemctl start sbapp

# 프로세스 확인
pgrep java

# 서비스 상태 확인
sudo systemctl status sbapp

# 재시작
sudo systemctl restart sbapp

# 리눅스 부팅시 자동 시작
sudo systemctl enable sbapp
```

## ref
- https://docs.spring.io/spring-boot/how-to/deployment/installing.html#howto.deployment.installing
