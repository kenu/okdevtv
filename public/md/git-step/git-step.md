# git
## 레벨링
### git 기본
* Git 서비스 가입하기
  * GitHub
  * BitBucket
  * Gitlab
* 사용자 등록
  * `git config --global user.name kenu`
  * `git config --global user.email kenu.heo@gmail.com`
* 코드 가져오기
  * `git clone`
* 커밋하기
  * `git add`
  * `git commit`
* 상태 보기
  * `git status`
* 공유하기
  * `git push`
  * `git pull`
  * `git fetch`
  * `git merge`
* 로컬 저장소 만들기
  * `git init`
* 원격 저장소 연결하기
  * `git remote`

### git 중급
* 브랜치 만들기
  * `git checkout -b dev`
  * TODO git switch
* 브랜치 목록
  * `git branch -va`
* 브랜치 바꾸기
  * `git checkout dev`
* 원격 브랜치 가져오기
  * `git pull origin`
  * `git checkout -b dev origin/dev`
* 태깅하기
  * 가벼운 태그
  * 주석달린 태그
  * http://git-scm.com/book/ko/Git의-기초-태그
* 리셋하기
  * `git reset --hard a189fce`
* 미뤄두기
  * `git stash`
  * `git stash list`
  * `git stash pop`
* 머지
* rebase
* 커밋 롤백하기

### git 고급
* git admin
* gitlab
* git hooks https://git-scm.com/book/ko/v2/Git맞춤-Git-Hooks
* …

### tool
* Git Bash
* SourceTree
  * http://www.sourcetreeapp.com

### Site Hosting
* only static
* github.io


### 참고문헌
* 2011, Git 전반에 관한 친절한 가이드
  * Safari 주의 맥 리부팅
  * http://git.mikeward.org/
* GitHub의 Git가이드
  * https://help.github.com/
* Pro Git 번역그룹 블로그
  * http://dogfeet.github.io/
  * 복 받으실 분들
* git branch 배우기
  * http://learnbranch.urigit.com/
* DAGs 선형으로 표현
  * http://www.ericsink.com/vcbe/html/directed_acyclic_graphs.html
* Tech Talk: Linus Torvalds on git
  * http://www.youtube.com/watch?v=4XpnKHJAok8
  * 업로드된 날짜: 2007. 5. 14.
