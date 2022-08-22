# Pull Request
* 코드를 주고 받는 방법
* 코드 리뷰하기 좋은 UI 제공
* GitHub에서 시작

## 절차A
* main 에서 develop 브랜치 생성
* develop 브랜치 수정
* new PullRequest 생성
* base:`main` ← compare:`develop` 생성

## 절차B
* 프로젝트 fork(복사하기)
* 복사한 프로젝트 develop 브랜치 수정
* new PullRequest 생성
* base repository: `원본프로젝트` base: `main` ← head repository: `fork프로젝트` compare:`develop` 생성

## Peer Review
* 변경된 파일의 내용을 볼 수 있으며, 해당 PR에 대한 승인/거절이 가능
* PR 생성할 때 리뷰어 지정 가능

## ref
* https://help.github.com/en/articles/about-pull-requests
