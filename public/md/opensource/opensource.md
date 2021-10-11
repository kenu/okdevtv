# 오픈 소스 소프트웨어

## 오픈 소스의 효과
* 외부 개발자들의 참여 문턱을 제거
* 좋은 제품을 효과적으로 홍보하는 마케팅 효과
* 소스를 무상으로 공개하는 대신 브랜드 획득

## 오픈 소스는 개발방법론
* 파일 공개(zip)가 오픈 소스의 핵심은 아님
* 버전 관리 시스템
* 이슈트래커
* 위키
* 메일링리스트

## 팀 소통
* Fork / Pull Request
* 메일링 리스트
* Chat(Slack, IRC, ...)

## Open Source vs. No Open Source
* 장점과 단점
* 마이크로소프트의 변심

## 전자정부 표준프레임워크 커뮤니티 사례
* https://github.com/egovframework
* Q&A: https://www.egovframe.go.kr/home/sub.do?menuNo=69

## 오픈 소스 참여 시작하기
* 사용하기
* 빌드하기
* 포크해서 푸시하기
* 풀 리퀘스트
* `TheGoodBug`, `TheGoodIssue` 태그 검색

# 오픈 소스로 웹 프로젝트 오픈까지
* GitHub ID를 만든다.
  * https://github.com/
* 프로젝트 저장소(Repository)를 만든다.
  * https://github.com/new
  * `README.md` 항목을 체크한다.
* `README.md` 파일을 수정한다.
  * 프로젝트 빌드 및 실행 방법
* `Issues` 메뉴에 할 작업들을 등록한다.
  * https://github.com/innovationacademy-kr/slabs-saver/issues
* 이슈에 따른 개발을 한다.
  * 커밋할 때 `코멘트`에 `#이슈번호`를 함께 기록한다.
* 가끔 생길 수도 있는 Pull Requests 메뉴를 관리한다.
  * 코드 리뷰, 합치기 또는 종료
* 개발 테스트할 서버에 프로젝트를 배포하고 확인한다.
  * https://heroku.com
    * 다양한 언어, 프레임워크 지원
    * 일정 트래픽까지 무료
  * AWS, GCP, Azure, Ncloud, Toast Cloud, 등

## 함께 개발하는 경우
* 작업 시작 전 로컬을 최신 버전으로 만든다.
  * `git pull`
* 브랜치를 만든다.
  * `git checkout -b branchname`
* 작업하고 커밋한다.
  * 커밋할 때 `코멘트`에 `#이슈번호`를 함께 기록한다.
* 작업이 완료되면 브랜치를 저장소에 올린다.
  * `git push origin branchname`
* Pull Request를 생성한다.
  * https://github.com/innovationacademy-kr/slabs-saver/compare
* 동료가 코드 리뷰하고 합치거나 종료한다.
  * 개발하며 생성한 브랜치는 삭제한다.

## Todo
* 오픈 소스 커뮤니티 활성화 사례
* 오픈 소스 커뮤니티의 어려움
