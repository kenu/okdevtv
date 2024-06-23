# Ollama
* https://ollama.com

## Install ec2 env
[ec2 basic install](/mib/aws/basic)

## Install ollama
```sh
curl -fsSL https://ollama.com/install.sh | sh
```

```sh
ollama pull llama3
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
# conda install python=3.10.14
```

## Install open-webui
```sh
take ~/git
git clone https://github.com/open-webui/open-webui.git
cd ~/git/open-webui/

# Copying required .env file
cp -RPp .env.example .env
```

## build and run open-webui
```sh
# Building Frontend Using Node
pnpm i
pnpm run build

# Serving Frontend with the Backend
cd ./backend
pip install -r requirements.txt -U
bash start.sh
```

## related
* [open-webui](/mib/ollama/webui)
