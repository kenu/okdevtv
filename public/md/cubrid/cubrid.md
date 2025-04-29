# CUBRID
* 오픈 소스 국산 큐브리드 데이터베이스
* https://www.cubrid.org/

## 개발자 가이드
* https://dev.cubrid.org/dev-guide/


## build env commands for `CUBRID/cubrid` on EC2
```sh
sudo dnf groupinstall 'Development Tools'
sudo dnf install libcurl-devel openssl-devel libuuid-devel pulseaudio-libs-devel
wget http://mirror.centos.org/centos/7/os/x86_64/Packages/libgfortran5-8.3.1-2.1.1.el7.x86_64.rpm
sudo dnf install libgfortran5-8.3.1-2.1.1.el7.x86_64.rpm -y
sudo dnf-config-manager --add-repo http://mirror.centos.org/centos/7/sclo/x86_64/rh/
sudo dnf install -y devtoolset-8 --nogpgcheck
scl enable devtoolset-8 bash
sudo dnf install htop cmake dtrace systemtap-sdt-devel ncurses-devel java-1.8.0-openjdk-devel.x86_64 -y ant
```

## install cgdb
```sh
# install epel
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
# install cgdb
sudo dnf install cgdb -y
```

## clone cubrid source
```sh
git clone https://github.com/CUBRID/cubrid
cd cubrid/
sh build.sh -t 64 -m debug
```

## related
* https://github.com/innovationacademy-kr/dbstudy
