# Ollama


## Install ec2 env
[ec2 basic install](/mib/aws/basic)

## Install ollama
```
curl -fsSL https://ollama.com/install.sh | sh
```

```
ollama pull llama3
ollama pull phi3
```

## Install pip
```
curl -O https://bootstrap.pypa.io/get-pip.py
python3 get-pip.py
echo 'export PATH=$PATH:/home/ec2-user/.local/bin' >> ~/.zshrc
. ~/.zshrc
```

## Install open-webui
```
take ~/git
git clone https://github.com/open-webui/open-webui.git
cd ~/git/open-webui/

# Copying required .env file
cp -RPp .env.example .env
```

## build and run open-webui
```
# Building Frontend Using Node
pnpm i
pnpm run build

# Serving Frontend with the Backend
cd ./backend
pip install -r requirements.txt -U
bash start.sh
```

