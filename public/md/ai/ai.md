# AI Driven Development

## Services

### Plugin type
- GitHub Copilot: VS Code, IntelliJ, Eclipse, Vim, Neovim
- Cody (Sourcegraph): VS Code, IntelliJ, Neovim
- CodeGPT: VS Code, JetBrains, Vim
- Codeium: VS Code, IntelliJ, Vim, Eclipse, Browser
- Amazon CodeWhisperer: VS Code, IntelliJ, JupyterLab, AWS Cloud9
- Tabnine: VS Code, IntelliJ, Vim, Sublime

### Query type
- https://phind.com : 개발자 친화적 검색, 결과 공유 가능
- https://chatgpt.com : OpenAI 모델, GPT-4o 지원
- https://gemini.google.com : Google의 최신 모델, 멀티모달 지원
- https://claude.ai : Anthropic 모델, Claude 3 Opus/Sonnet/Haiku
- https://www.perplexity.ai/ : 실시간 웹 검색, Pro는 Claude/GPT-4
- https://clova-x.naver.com/ : 한국어 최적화, 코드 생성
- https://groq.com : 초고속 추론 속도, LLama3/Mixtral/Claude 지원
- https://chat.mistral.ai/ : Mixtral/Mistral Large 모델
- https://deepseek.ai : 코드 특화 모델
- https://ollama.com : 로컬 오픈소스 모델 실행, 다양한 모델 지원
- https://pi.ai : 대화형 개인 AI 비서

### Combined type
- https://poe.com : 다양한 모델 통합 인터페이스, 커스텀 봇 지원
- https://kimi.ai : 고급 문서 이해 및 멀티모달 지원
- https://huggingface.co/chat : 여러 오픈소스 모델 테스트

## features
- Refactor
- Prototype
- Code generation
- Code completion
- Test generation
- Code analysis
- Explain Code

### API
- https://platform.openai.com/ : OpenAI API (GPT-4o, GPT-4, GPT-3.5, DALL-E 3, TTS, Whisper)
- https://console.anthropic.com/ : Claude API (Claude 3 Opus/Sonnet/Haiku)
- https://console.groq.com/ : Groq Cloud (초고속 LLM 추론)
- https://www.perplexity.ai/settings/api : Perplexity API (검색 증강)
- https://ai.google.dev/ : Google AI (Gemini Pro/Ultra, PaLM)
- https://mistral.ai/api/ : Mistral AI (Mistral, Mixtral 모델)
- https://www.cohere.com/api : Cohere (Command 모델군)
- https://huggingface.co/docs/api-inference : Hugging Face 추론 API

## AI UI/UX

### AI UI/UX Tools
- https://v0.dev/ : Vercel의 AI 기반 UI 생성 도구 (React, Tailwind CSS)
- https://magicul.io/ : AI 기반 Figma to Code 변환
- https://github.com/features/copilot/chat : GitHub Copilot Chat의 UI 제안 기능
- https://designer.microsoft.com/ : Microsoft Designer AI
- https://www.midjourney.com/ : AI 이미지 생성 및 디자인 도구
- https://www.ando.studio/ : 제품 디자인 AI 도구
- https://sora.com/ : Text to Movie #openai
- https://www.framer.com/ai : AI 기반 웹사이트 생성
- https://runwayml.com/ : 비디오 편집 및 생성 AI
- https://gen-1.com/ : Runway의 이미지/비디오 생성 모델
- https://blocks.site/ : AI 기반 웹사이트 빌더

#### Key Features
- UI 컴포넌트 자동 생성
- 디자인 시스템 제안
- 반응형 레이아웃 생성
- 접근성(A11y) 고려한 UI 생성
- 디자인 패턴 추천
- 프로토타입 자동 생성
- 코드 설명 및 문서화
- 이미지/비디오 생성 통합
- 다국어 UI 번역

## VS Code AI Integration Tips

#### Browser to VS Code
- 브라우저에서 코드 가져올 때는 전체 컨텍스트(import문, 의존성 등)를 함께 복사
- 코드 블록 단위로 복사하여 구조 유지
- 주석도 함께 복사하여 코드의 의도 파악
- 필요한 경우 패키지 버전 정보도 함께 확인
- 에러 메시지 전체 스택트레이스 포함

#### VS Code AI Plugin Tips
- `# @param` 주석을 사용하여 AI에게 상세한 컨텍스트 제공
- `@file:` 주석으로 현재 파일 설명 추가
- 커서 위치를 활용한 인라인 코드 생성
- 테스트 코드 생성 시 `describe`/`it` 구조 활용
- 에러 메시지를 그대로 복사하여 디버깅 요청
- 기존 코드를 선택한 후 리팩토링 요청
- 주석으로 코드 설명 요청 시 영어로 받아서 번역
- `/explain`, `/test`, `/fix` 슬래시 명령어 활용

#### Keyboard Shortcuts
- `Ctrl + I` (macOS: `Cmd + I`): 인라인 제안
- `Ctrl + Enter` (macOS: `Cmd + Enter`): 전체 파일 컨텍스트로 질문
- `Alt + \` (macOS: `Option + \`): Copilot Chat 패널 열기
- `Ctrl + Shift + I` (macOS: `Cmd + Shift + I`): Workspace Chat
- 코드 선택 후 `Ctrl + Shift + P`: 명령 팔레트에서 AI 관련 명령 실행

#### 효율적인 프롬프트
- "개선해줘" 대신 구체적인 요구사항 전달 (더 빠른속도, 시간복잡도 개선, 보안 개선 등)
- 영어로 하면, 토큰 수도 절반이고, 응답 속도 빠름
- `한국어로` 치면, 방금 답변을 한국어로 번역해 줌
- 예상 출력 포맷 명시 (JSON, 테이블, 마크다운 등)
- 에러 발생 시 실행 환경 정보 함께 전달 (OS, 버전, 라이브러리 등)
- 코드 스타일 가이드 명시 (Google 스타일, Airbnb 스타일 등)
- 성능/보안 요구사항 명시 (시간복잡도, OWASP 가이드라인 등)
- 단계별 작업 분할 (큰 작업은 작은 단위로 나누어 요청)
- 프롬프트 템플릿 활용

#### 고급 프롬프트 예시
```
I made 2 folders backend and frontend
tech stacks are like these.
plz, complete it

backend:
8080, spring boot 3.2, Java 17, google callback url: http://localhost:8080/login/oauth2/code/google, JWT authentication, Spring Data JPA with H2 database

frontend:
5173, vite react.js, TypeScript, TailwindCSS, React Router v6, login page and profile page, sample data array, Axios for API calls
```

## Local AI Development

### 로컬 AI 모델 실행
- **Ollama**: https://ollama.com/ - 다양한 오픈소스 모델 로컬 실행
- **LM Studio**: https://lmstudio.ai/ - 직관적인 UI로 로컬 모델 실행
- **Jan**: https://jan.ai/ - 오픈소스 로컬 AI 어시스턴트
- **GPT4All**: https://gpt4all.io/ - 경량 로컬 모델 실행기
- **LocalAI**: https://localai.io/ - OpenAI 호환 로컬 API

### 로컬 모델 추천
- **Llama 3 8B**: 경량 모델이지만 성능 우수
- **Mistral 7B**: 작은 크기 대비 좋은 성능
- **Mixtral 8x7B**: 8개 전문가 모델 결합, 다양한 능력
- **CodeLlama**: 코딩 특화 모델
- **Phi-3 Mini**: 마이크로소프트의 경량 모델
- **Nous-Hermes**: 코딩 및 일반 작업 균형

### 로컬 AI 하드웨어 요구사항
- **최소**: 16GB RAM, 8GB VRAM
- **권장**: 32GB RAM, 12+GB VRAM
- **고성능**: 64GB RAM, 24+GB VRAM (대규모 모델용)

## AI 애플리케이션 개발

### RAG (Retrieval Augmented Generation)
- **ChromaDB**: https://www.trychroma.com/ - 벡터 데이터베이스
- **LangChain**: https://langchain.com/ - LLM 애플리케이션 프레임워크
- **LlamaIndex**: https://www.llamaindex.ai/ - 데이터 인덱싱 및 쿼리
- **Weaviate**: https://weaviate.io/ - 벡터 검색 엔진
- **Pinecone**: https://www.pinecone.io/ - 벡터 데이터베이스

### 앱 개발 도구
- **Streamlit**: https://streamlit.io/ - Python 기반 AI 앱 개발
- **Gradio**: https://gradio.app/ - AI 데모 인터페이스
- **Vercel AI SDK**: https://sdk.vercel.ai/ - AI 웹 앱 개발
- **Replit AI**: https://replit.com/ai - 온라인 코딩 환경
- **Colab Enterprise**: https://colab.research.google.com/ - 노트북 기반 개발

## Related
- [ai-digest](./digest.md)
- [langchain](/mib/langchain)
- [llamaindex](/mib/llamaindex)
