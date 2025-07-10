# Ollama
- https://ollama.com

## Install ec2 env
[ec2 basic install](/mib/aws/basic)

## Install nvidia
- https://developer.nvidia.com/cuda-downloads
- https://developer.nvidia.com/cuda-toolkit-archive
- CUDA and NVidia GPU Driver
```sh
wget https://developer.download.nvidia.com/compute/cuda/12.9.0/local_installers/cuda-repo-amzn2023-12-9-local-12.9.0_575.51.03-1.x86_64.rpm
sudo rpm -i cuda-repo-amzn2023-12-9-local-12.9.0_575.51.03-1.x86_64.rpm
sudo dnf clean all
sudo dnf -y install cuda-toolkit-12-9
```

```sh
echo "export PATH=/usr/local/cuda-12.9/bin:$PATH" >> ~/.zshrc
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
ollama pull llama3.3
```

```sh
ollama pull gemma3
```

```sh
ollama pull phi4
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

## Install uv
```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
uv init example -p 3.11
cd example
uv venv
source .venv/bin/activate
```

## Install open-webui
```sh
uv pip install open-webui
```

## run open-webui
```sh
open-webui serve
```

- 8080 port

## related
- [open-webui](/mib/ollama/webui)
