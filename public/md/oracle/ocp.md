# Oracle Cloud
- https://cloud.oracle.com
- 상시 무료 인스턴스 2개 제공

## feat
- 외부 네트워크 포트 열고, 인스턴스의 포트 열기 필요
  - `sudo iptables -I INPUT -j ACCEPT`

- SELinux 설정 필요
  - `sudo setsebool -P httpd_can_network_connect 1`
  - https://stackoverflow.com/a/24830777/510222

## CentOS 8 Stream
- err
```
[root@##### ~]# dnf update
CentOS-8 - AppStream 70 B/s | 38 B 00:00
Error: Failed to download metadata for repo 'AppStream': Cannot prepare internal mirrorlist: No URLs in mirrorlist
```

- solution
```sh
sudo su
cd /etc/yum.repos.d/

sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
```
- https://velog.io/@wangjh789/Error-Failed-to-download-metadata-for-repo-appstream-Cannot-prepare-internal-mirrorlist-No-URLs-in-mirrorlist
