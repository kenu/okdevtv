# Ollama
* https://ollama.com

## Install ec2 env
[ec2 basic install](/mib/aws/basic)

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
ollama pull llama3.1
```

```sh
ollama pull gemma2
```

```sh
ollama pull phi3
```

## Install conda
```sh
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh
~/miniconda3/bin/conda init zsh
. ~/.zshrc
conda install python=3.11.9
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
* [open-webui](/mib/ollama/webui)
