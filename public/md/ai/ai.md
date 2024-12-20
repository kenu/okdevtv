# AI Driven Development

## Services

### Plugin type
- CodeGPT
- Cody AI Plugin: VS Code, IntelliJ
- Copilot AI Plugin: VS Code, IntelliJ, Eclipse
- Codeium AI

### Query type
- https://phind.com : 로그인 안해도 결과 공유 가능
- https://chatgpt.com : 원조
- https://gemini.google.com : 긴 텍스트 요약 잘함
- https://claude.ai : 이미지 붙여넣어 질문 가능
- https://www.perplexity.ai/ : 지식이 시작되는 곳
- https://clova-x.naver.com/ : 한국어 잘함; 세 줄 요약
- https://groq.com : 응답속도 빠름
- https://chat.mistral.ai/ : beta

### Combined type
- https://poe.com

## features
- Refactor
- Prototype
- Code generation
- Code completion
- Test generation
- Code analysis
- Explain Code

### API
- https://platform.openai.com/
- https://console.anthropic.com/
- https://console.groq.com/
- https://www.perplexity.ai/settings/api

## AI UI/UX

### AI UI/UX Tools
- https://v0.dev/ : Vercel의 AI 기반 UI 생성 도구
- https://magicul.io/ : AI 기반 Figma to Code 변환
- https://github.com/features/preview/copilot-chat : GitHub Copilot Chat의 UI 제안 기능
- https://designer.microsoft.com/ : Microsoft Designer AI
- https://www.midjourney.com/ : AI 이미지 생성 및 디자인 도구
- https://sora.com/ : Text to Movie #openai

#### Key Features
- UI 컴포넌트 자동 생성
- 디자인 시스템 제안
- 반응형 레이아웃 생성
- 접근성(A11y) 고려한 UI 생성
- 디자인 패턴 추천
- 프로토타입 자동 생성

## VS Code AI Integration Tips

#### Browser to VS Code
- 브라우저에서 코드 가져올 때는 전체 컨텍스트(import문, 의존성 등)를 함께 복사
- 코드 블록 단위로 복사하여 구조 유지
- 주석도 함께 복사하여 코드의 의도 파악
- 필요한 경우 패키지 버전 정보도 함께 확인

#### VS Code AI Plugin Tips
- `# @param` 주석을 사용하여 AI에게 상세한 컨텍스트 제공
- 커서 위치를 활용한 인라인 코드 생성
- 테스트 코드 생성 시 `describe`/`it` 구조 활용
- 에러 메시지를 그대로 복사하여 디버깅 요청
- 기존 코드를 선택한 후 리팩토링 요청
- 주석으로 코드 설명 요청 시 영어로 받아서 번역

#### Keyboard Shortcuts
- `Ctrl + I` (macOS: `Cmd + I`): 인라인 제안
- `Ctrl + Enter` (macOS: `Cmd + Enter`): 전체 파일 컨텍스트로 질문
- 코드 선택 후 `Ctrl + Shift + P`: 명령 팔레트에서 AI 관련 명령 실행

#### 효율적인 프롬프트
- "개선해줘" 대신 구체적인 요구사항 전달
- 영어로 하면, 토큰 수도 절반이고, 응답 속도 빠름
- `한국어로` 치면, 방금 답변을 한국어로 번역해 줌
- 예상 출력 포맷 명시
- 에러 발생 시 실행 환경 정보 함께 전달
- 코드 스타일 가이드 명시
- 성능/보안 요구사항 명시
- 예
```
I made 2 folders backend and frontend
tech stacks are like these.
plz, complete it

backend:
8080, spring boot, google callback url: http://localhost:8080/login/oauth2/code/google
frontend:
5173, vite react.js, login page and profile page, sample data array
```

## Related
- [ai-digest](./digest.md)
