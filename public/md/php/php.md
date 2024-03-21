# PHP
* A popular general-purpose scripting language
* https://www.php.net/

## Installation
* EC2

```sh
sudo dnf install php php-fpm php-zip nginx -y
sudo systemctl start php-fpm
```

* composer
  * php package manager

```sh
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
composer -v
```

* nginx

```sh
sudo mkdir /etc/nginx/sites-available
sudo vi /etc/nginx/sites-available/default
```

```sh
index index.php;

location ~ \.php$ {
    fastcgi_pass unix:/run/php/php8.2-fpm.sock;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
}
```

```sh
sudo nginx -t
sudo systemctl restart nginx
```

```sh
cd /usr/share/nginx/html
sudo su
echo "<?php phpinfo(); ?>" > info.php
curl localhost/info.php
```

## related
* [nginx-php](/mib/php/nginx-php)
* [win-php](/mib/php/win-php)
