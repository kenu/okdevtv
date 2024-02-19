# Oracle Cloud
- https://cloud.oracle.com
- 상시 무료 인스턴스 2개 제공

## feat
- 외부 네트워크 포트 열고, 인스턴스의 포트 열기 필요
  - `sudo iptables -I INPUT -j ACCEPT`

- SELinux 설정 필요
  - `sudo setsebool -P httpd_can_network_connect 1`
  - https://stackoverflow.com/a/24830777/510222
