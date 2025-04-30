# LetsEncrypt SSL
- SSL 무료 서비스
  - Secure Socket Layer
- 세계적인 루트 인증기관이 도메인을 안전하다고 보증하는 서비스
  - DigiCert, VeriSign, Thawte, ...
  - 고비용, 도메인값 * 10, 대략 20만원/1년
- https://letsencrypt.org/
- https 프로토콜을 무료로 서비스
  - 네트워크 패킷을 암호화
  - 중간에 패킷을 가로채서 볼 수 없음
  - 보안성이 좋아짐
- 90일마다 갱신이 필요함(/etc/crontab)

## 필요사항
- 도메인 (예 okdevtest.net)
- 서버 aws EC2 Amazon Linux 2023, Amazon Linux 2

## nginx 설치
- [nginx 설치](/mib/nginx)

## certbot 이용
- https://certbot.eff.org/
- https://certbot.eff.org/lets-encrypt/centosrhel7-nginx

```sh
# Amazon Linux 2023
sudo su -
dnf install python3 augeas-libs -y
# dnf remove certbot
python3 -m venv /opt/certbot/
/opt/certbot/bin/pip install --upgrade pip
/opt/certbot/bin/pip install certbot certbot-nginx
ln -s /opt/certbot/bin/certbot /usr/bin/certbot

certbot --nginx
systemctl restart nginx
```

```sh
# Amazon Linux 2
sudo su -
yum -y install yum-utils
yum-config-manager --enable rhui-REGION-rhel-server-extras rhui-REGION-rhel-server-optional
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install certbot python2-certbot-nginx

certbot --nginx
```

## Set up automatic renewal
```sh
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew" | sudo tee -a /etc/crontab > /dev/null
```

## certbot renew issue
- `certbot renew` 안되는 경우

```sh
certbot certonly -d v.okdevtv.com --manual --preferred-challenges dns
```

```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name
_acme-challenge.v.okdevtv.com with the following value:

oRq2CDAXdLYxyoKUNYatfQqx1KWy8M29fPSgbkhka80

Before continuing, verify the record is deployed.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
```

- TXT 레코드 생성
  - _acme-challenge.v.okdevtv.com
  - oRq2CDAXdLYxyoKUNYatfQqx1KWy8M29fPSgbkhka80
- 그리고 위에서 엔터를 누르면 자동으로 생성됨
- https://ddil-ddil.tistory.com/67

## 참고
- SSL Test
  - https://www.ssllabs.com/ssltest/analyze.html
- 설치 동영상
  - https://youtu.be/sWl8W0ILUmE
- [Letsencrypt Detailed](/mib/letsencrypt/letsencrypt-detailed)
