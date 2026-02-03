# OpenClaw (오픈클로) 기본 정보

OpenClaw는 사용자 기기에서 로컬로 실행되며 다양한 메시징 플랫폼과 통합되는 오픈 소스 자율 인공지능(AI) 개인 비서 소프트웨어입니다.

## 개요
- **이력**: 초기에는 "Clawdbot"으로 출시되었으나, 이후 "Moltbot"을 거쳐 현재의 "OpenClaw"로 브랜딩되었습니다.
- **라이선스**: MIT 라이선스 (자유로운 사용, 수정 및 배포 가능)
- **주요 특징**: 고공 성장을 기록 중인 오픈 소스 AI 프로젝트 중 하나입니다.

## 주요 기능
- **작업 실행 및 자동화**: 자연어 상호작용을 통해 웹 자동화, 파일 시스템 관리, 쉘 명령 실행 등을 수행합니다.
- **메시징 통합**: WhatsApp, Telegram, Discord와 같은 인기 메시징 앱을 통해 소통할 수 있습니다.
- **다양한 모델 지원**: 특정 모델에 종속되지 않으며 Anthropic Claude, OpenAI GPT 모델, 그리고 Ollama를 통한 로컬 모델을 지원합니다.

## 기술 요구 사항
- **Node.js**: 버전 22 이상 필요
- **설치 방식**: npm 또는 pnpm을 통해 설치 가능
- **플랫폼 지원**: Windows (WSL2), Linux, macOS, iOS, Android 지원

## 설치 방법 (curl)

터미널에서 다음 명령어를 실행하여 OpenClaw를 설치할 수 있습니다.

### Linux / macOS / WSL2
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### Windows (PowerShell)
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

설치 후 `openclaw onboard` 명령어를 통해 초기 설정을 진행할 수 있습니다.

## 비용 및 보안
- **비용**: 소프트웨어 자체는 무료이지만, 통합된 AI 모델의 API 사용료는 사용자가 부담해야 합니다. (Ollama 등을 통한 로컬 모델 사용 시 비용 절감 가능)
- **보안 주의사항**: 원격 코드 실행(RCE) 취약점 등의 보안 이슈가 보고된 바 있으므로, 설정 및 사용 시 최신 업데이트와 보안 권장 사항을 준수해야 합니다.

## ref
- **GitHub**: [openclaw/openclaw](https://github.com/openclaw/openclaw)


---
◇  Existing config detected ───────────╮
│                                      │
│  workspace: ~/.openclaw/workspace    │
│  model: google/gemini-3-pro-preview  │
│  gateway.mode: local                 │
│  gateway.port: 18789                 │
│  gateway.bind: loopback              │
│  skills.nodeManager: pnpm            │
│                                      │
├──────────────────────────────────────╯
│
◇  Where will the Gateway run?
│  Local (this machine)
│
◇  Select sections to configure
│  Gateway
│
◇  Gateway port
│  18789
│
◇  Gateway bind mode
│  LAN (All interfaces)
│
◇  Gateway auth
│  Token
│
◇  Tailscale exposure
│  Off
│
◆  Gateway token (blank to generate)
│  353


