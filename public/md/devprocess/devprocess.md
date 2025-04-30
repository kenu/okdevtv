## 개발 프로젝트 진행 순서
- 새로운 서비스를 개발하기 위해서는 다음과 같은 순서를 고려합니다.

## 기승전결
  - 기: 기획
  - 승: 개발 기반 구축
  - 전: 개발 진행
  - 결: 서비스 진화

## 기: 기획
- 구성원 모집
- 기획(페르소나, 시나리오)
- 화면 설계(wireframe, [figma](https://www.figma.com/))
- 데이터 설계(https://erdcloud.com , https://erdspace.com)
- 개발 기술 선택

## 승: 개발 기반 구축
- 프로젝트 저장소 생성([GitHub](/mib/github))
- 개발환경 구축 및 공유
- 프로젝트 기본 폴더 구조 작업
- 코딩 컨벤션 공유(https://bit.ly/webconvention)
- 기능별 샘플 코드, 테스트 케이스(optional)
- 개발 서버 구축
- CI/CD 구성([GitHub Actions](/mib/github/actions), [Jenkins](/mib/jenkins))
- 빌드 결과 메시지 웹훅([slackbot](/mib/slack), [jandibot](/mib/jandi))

## 전: 개발 진행
- 점진적 개발([Sprint](https://docs.google.com/presentation/d/1icF44HQUgApBL4Fiv4pChOrGY1Shlxj3/edit#slide=id.p25))
- 기능 테스트
- 사이드 이펙트 감지
- 버그, 취약점 수정([SonarQube](/mib/sonar), [ZAP](/mib/zap))
- 모니터링 기능 추가([Sentry](/mib/sentry), [GA](/mib/ga), [FreeWebMonitoring](https://www.freewebmonitoring.com/))

## 결: 서비스 진화
- 서비스 오픈 후 운영
- 운영 데이터 시각화([DataViz](/mib/elk))
- 서비스 개선 기획

## ref
- [오늘도 개발자가 안 된다고 말했다](http://www.yes24.com/Product/Goods/97919905)
