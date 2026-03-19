# Swap File

```sh
df -h
sudo fallocate -l 8G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
free -h
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
htop
```
