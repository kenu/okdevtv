# Jupyter notebook

- code in the browser
- markdown cells
- code cells
- output cells
- execute with `Shift + Enter`
- add new cell with `a`


```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh
~/miniconda3/bin/conda init bash
. ~/.bash_profile
conda install python=3.11.9
pip install jupyter notebook
```

```bash
sudo dnf install nginx -y
sudo vi /etc/nginx/nginx.conf
```

```
    location / {
        sendfile off;
        proxy_pass         http://127.0.0.1:8888;
        proxy_redirect     default;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade           $http_upgrade; # for websocket
        proxy_set_header   Connection        "upgrade"; # for websocket
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_max_temp_file_size 0;
    }
```

```bash
sudo systemctl start nginx
jupyter server --generate-config
vi /home/ec2-user/.jupyter/jupyter_server_config.py
# change `remote` to True
```

```bash
jupyter server password
# 1234 / 1234
jupyter-notebook
```
