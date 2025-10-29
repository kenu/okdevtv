# alias

설정 방법: 아래 내용을 `~/.bashrc` 또는 `~/.zshrc`에 추가한 뒤 `source ~/.bashrc` 또는 `source ~/.zshrc`로 적용

## 자주 쓰는 alias
```sh
# 기본 ls 출력 단축
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# 디렉터리 이동 단축
alias ..='cd ..'
alias ...='cd ../..'
alias -- -='cd -'   # 이전 디렉터리로 이동

# 편집/조회/검색
alias v='vim'
alias c='clear'
alias h='history'
alias gs='git status'

# 안전한 rm (실수 방지)
alias rm='rm -i'

# 네트워크 관련
alias ports='lsof -i -nP | grep LISTEN'

# 편리한 grep (색상 유지)
alias grep='grep --color=auto'

# 마지막 명령을 sudo로 재실행
alias please='sudo $(history -p !!)'
```

## 유용한 shell functions (bash / zsh 호환)
```sh
# 만든 다음 바로 그 디렉터리로 이동
mkcd() {
  if [ -z "$1" ]; then
    echo "usage: mkcd <dir>"
    return 1
  fi
  mkdir -p -- "$1" && cd -- "$1"
}

# 자동으로 압축 해제 (tar, zip, rar, gz 등)
extract() {
  if [ -z "$1" ]; then
    echo "usage: extract <file>"
    return 1
  fi
  case "$1" in
    *.tar.bz2)   tar xjf "$1"   ;;
    *.tar.gz)    tar xzf "$1"   ;;
    *.tar.xz)    tar xf  "$1"   ;;
    *.bz2)       bunzip2 "$1"   ;;
    *.rar)       unrar x "$1"   ;;
    *.gz)        gunzip  "$1"   ;;
    *.tar)       tar xf  "$1"   ;;
    *.tbz2)      tar xjf "$1"   ;;
    *.tgz)       tar xzf "$1"   ;;
    *.zip)       unzip   "$1"   ;;
    *.Z)         uncompress "$1";;
    *)           echo "extract: '$1' - unknown archive method"; return 1 ;;
  esac
}

# 간단한 HTTP 서버 실행 (현재 디렉터리)
serve() {
  local port
  port=${1:-8000}
  # python3 우선, 없으면 python
  if command -v python3 >/dev/null 2>&1; then
    python3 -m http.server "$port"
  else
    python -m SimpleHTTPServer "$port"
  fi
}

# 쉘 환경 재시작 (zsh/bash를 자동으로 감지)
reload-shell() {
  if [ -f ~/.bashrc ]; then
    source ~/.bashrc
  fi
  if [ -f ~/.zshrc ]; then
    source ~/.zshrc
  fi
}

# 편리한 tar 생성 (파일명 자동화)
tarc() {
  if [ -z "$1" ]; then
    echo "usage: tarc <archive-name> [files...]"
    return 1
  fi
  tar czvf "$1" "${@:2}"
}
```

### 사용 예

- `mkcd projects/new` : `projects/new` 디렉터리를 만들고 이동
- `extract archive.tar.gz` : 압축 자동 해제
- `serve 9000` : 현재 디렉터리를 포트 9000에서 서빙
- `tarc backup.tgz src/ README.md` : src/와 README.md를 포함하여 압축

설정 후 즉시 적용하려면 `source ~/.bashrc` 또는 `source ~/.zshrc`를 실행
