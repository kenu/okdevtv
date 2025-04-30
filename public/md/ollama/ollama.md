# Ollama
- https://ollama.com

## Install ec2 env
[ec2 basic install](/mib/aws/basic)

## Install nvidia
- https://developer.nvidia.com/cuda-downloads
- https://developer.nvidia.com/cuda-toolkit-archive
- CUDA and NVidia GPU Driver
```sh
wget https://developer.download.nvidia.com/compute/cuda/12.6.2/local_installers/cuda-repo-amzn2023-12-6-local-12.6.2_560.35.03-1.x86_64.rpm
sudo rpm -i cuda-repo-amzn2023-12-6-local-12.6.2_560.35.03-1.x86_64.rpm
sudo dnf clean all
sudo dnf -y install cuda-toolkit-12-6
```

```sh
echo "export PATH=/usr/local/cuda-12.6/bin:$PATH" >> ~/.zshrc
. ~/.zshrc
nvcc -V
```

```sh
sudo dnf -y install kernel-devel-$(uname -r) kernel-headers-$(uname -r) kernel-modules-extra-$(uname -r) -y
sudo dnf -y module install nvidia-driver:latest-dkms
```

## Install ollama
```sh
curl -fsSL https://ollama.com/install.sh | sh
```
- `NVIDIA installed` message check
- or run again

```sh
sudo su
```

```sh
mv /usr/share/ollama/.ollama/ /data/.ollama/
ln -s /data/.ollama /usr/share/ollama/.ollama
ls -al /usr/share/ollama
exit
```

```sh
ollama pull llama3.2
```

```sh
ollama pull gemma2
```

```sh
ollama pull phi3.5
```

## Ollama Network Open

```sh
sudo systemctl stop ollama
sudo vi /etc/systemd/system/ollama.service
```

- [Service] Environment 부분 수정
```sh
Environment="OLLAMA_HOST=0.0.0.0:11434"
```

- ollama service 재실행
```sh
sudo systemctl daemon-reload
sudo systemctl start ollama
```

- 열린 포트 확인 TCP *:11434 (LISTEN) 확인
```sh
sudo lsof -i :11434
```

## Install conda
```sh
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh
~/miniconda3/bin/conda init zsh
. ~/.zshrc
conda install python=3.11.9 -y
```

## Install open-webui
```sh
pip install open-webui
```

## run open-webui
```sh
open-webui serve
```

- 8080 port

## related
- [open-webui](/mib/ollama/webui)
