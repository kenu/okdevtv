# open-webui
* https://github.com/open-webui/open-webui

## requirement
* [OLLAMA](/mib/ollama)

## build and run

```sh
git clone https://github.com/open-webui/open-webui.git
cd open-webui
pnpm i
pnpm build

cd backend
pip install -r requirements.txt
bash start.sh
```

* http://localhost:8080

## Docker

```sh
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```
