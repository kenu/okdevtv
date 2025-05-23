# UV (Ultrafast Python Package Installer)
- https://github.com/astral-sh/uv
- Python 패키지 설치 및 환경 관리를 위한 초고속 도구
  - pip 및 conda의 대안으로 Rust로 작성되어 매우 빠른 속도를 제공
  - Python 패키지 설치, 가상환경 관리, 의존성 해결을 위한 통합 도구

## UV 설치하기
```sh
# macOS, Linux, WSL에 설치
curl -sSf https://astral.sh/uv/install.sh | sh

# Windows에 설치 (PowerShell)
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Homebrew를 통한 설치
brew install uv
```

## Quick Start
```sh
uv init example -p 3.10
cd example
uv venv

# 가상환경 활성화 (macOS, Linux, WSL)
source .venv/bin/activate
# Windows
.venv\Scripts\activate

# VSCode로 열기
code .
uv add requests
# pyproject.toml 파일 확인

# 가상환경 비활성화
deactivate
```

## 기본 사용법
1. 가상환경 만들기
  - `uv venv .venv` (현재 디렉토리에 .venv 이름으로 가상환경 생성)
  - `uv venv .venv --python=3.11` (특정 Python 버전으로 가상환경 생성)

2. 가상환경 활성화하기
  - `source .venv/bin/activate` (macOS/Linux)
  - `.venv\Scripts\activate` (Windows)

3. 패키지 설치하기
  - `uv pip install requests` (단일 패키지 설치)
  - `uv pip install -r requirements.txt` (requirements.txt 파일에서 패키지 설치)

4. 가상환경 비활성화하기
  - `deactivate`

5. 패키지 관리
  - `uv pip freeze > requirements.txt` (설치된 패키지 목록 저장)
  - `uv pip list` (설치된 패키지 목록 확인)

## UV의 장점
- 속도: pip보다 최대 10-100배 빠른 패키지 설치 속도
- 호환성: 기존 pip 명령어와 호환되어 쉽게 전환 가능
- 의존성 해결: 향상된 의존성 해결 알고리즘으로 충돌 최소화
- 캐싱: 효율적인 캐싱으로 반복 설치 시 속도 향상

## Conda와 UV 비교
| 기능 | Conda | UV |
|------|-------|-----|
| 언어 지원 | 다양한 언어 지원 (Python, R, C++ 등) | Python 전용 |
| 설치 속도 | 보통 | 매우 빠름 |
| 메모리 사용량 | 높음 | 낮음 |
| 가상환경 관리 | 내장 기능 | 내장 기능 |
| 패키지 소스 | conda 저장소, PyPI | PyPI |
| 구현 언어 | Python | Rust |

## ref
- https://github.com/astral-sh/uv
- https://docs.astral.sh/uv/
- https://pypi.org/project/uv/
