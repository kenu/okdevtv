# Git Conflict 해결법
1. 작업중인 파일 보관
  * `git stash`
  * `git stash list`
2. 원격 저장소 소스 가져오기, Conflict(충돌)발생
  * `git pull origin master`
  * `git status`
3. 깨진 파일 정리, [VS Code](https://code.visualstudio.com) 도구 추천

```
>>>>>
원격에서 가져온 소스
=====
로컬에 있는 소스
<<<<<
```
4. 정리된 파일 커밋 후 전송
  * `git add .`
  * `git commit -m "merge conflict"`
  * `git push origin master`
5. 보관된 작업중 파일 복원
  * `git stash pop`
  * `git stash list`
6. 작업중인 파일과 Conflict 발생시 `3.` 단계 반복
