# Git
- 2005.04 Linus Torvalds
- https://git-scm.com
- 분산 버전 관리 시스템
- 로컬 저장소에 작업 폴더의 변경사항을 기록하고 관리
- 장점은 오프라인에서 버전관리 가능
- 단점은 또 배워야 됨
- Git을 엔진으로 사용하는 서비스 다수
  - GitHub, BitBucket, GitLab
- GitHub.com
  - git을 엔진으로 하는 개발 소셜 플랫폼
  - follow, watch, Pull Request

## install
- https://git-scm.com
- `brew install git`
- `yum install git`
- `apt install git`

## 저장소 구조
- local workspace
- local stage
- local repository
- remote repository

<img src="images/basic-remote-workflow.webp" alt="git repository" class="img"/>

- image from : https://www.git-tower.com/learn/git/ebook/en/command-line/remote-repositories/introduction

## 시작하기
- https://okdevtv.com/mib/git-step

## git flow (advanced git)
- https://okdevtv.com/mib/gitflow

## Git Bash
- https://okdevtv.com/mib/git-bash

## Git Conflict 해법
- [충돌 난 경우 해법](/mib/git/conflict)

## VS Code Git plugins
- GitLens
- Git Graph

## ref
- easy git
  - http://bit.ly/okeasygit
- dogfeet git
  - http://dogfeet.github.io/
- GitHub 이력서
  - http://resume.github.io/
- 쉽게 살 수 있을까:GITHUB & GIT & Code Review
  - http://hl1itj.tistory.com/118
- Pull Request
  - https://okdevtv.com/mib/git/pr

## for Windows error
- too long path error

```
git config core.longpaths true
```

- Invalid argument such as `:`

```
error: unable to create file lib/:q: Invalid argument
```
  - change filename
