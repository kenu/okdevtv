# nginx, php

```
sudo amazon-linux-extras install nginx1.12
sudo systemctl start nginx
```

```
sudo amazon-linux-extras |grep php
NOTE: The livepatch extra is in public preview, not meant for production use

 15  php7.2                   available    \
 17  lamp-mariadb10.2-php7.2  available    \
 31  php7.3                   available    \
 42  php7.4                   available    [ =stable ]
sudo amazon-linux-extras install php7.4
sudo yum install php-cli php-common php-gd php-mbstring  php-mysqlnd php-pdo php-fpm php-xml php-opcache php-zip php-bcmath
sudo vi /etc/nginx/fastcgi_params
```

```
fastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;
#EOF
```

```
sudo vi /etc/php-fpm.d/www.conf
```

```
; RPM: apache user chosen to provide access to the same directories as httpd
; user = apache
user = nginx
; RPM: Keep a group allowed to write in log dir.
; group = apache
group = nginx


listen = /var/run/php-fpm/php-fpm.sock;


listen.owner = nginx
listen.group = nginx
listen.mode = 0660
```

```
sudo systemctl start php-fpm
```

## ref:
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-on-centos-7
* https://www.lesstif.com/lpt/amazon-linux-ami-php-7-3-77955353.html
