# 웹 저장소 특징
- cookie, localStorage

## 1차 도메인
- cookie는 .gsfreshdev.com 과 같이 1차 도메인으로 데이터 공유 가능
- localStorage는 도메인에 귀속. 1차 도메인으로 데이터 공유 불가

## 헤더
- cookie는 헤더를 통해 전달됨
- localStorage는 헤더와 상관없음
- 헤더의 크기가 6kb를 넘어가면 http status code `431` 오류 발생

## 생명주기
- cookie에 max-age를 넣지 않으면, 세션 쿠키로 브라우저 켜있는 동안만 살아있음
- localStorage는 만료 기한이 없음
- localStorage는 만료시간을 함께 저장해서 가져올 때 처리해야 함
  * 참고: https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/

## etc
Session 쿠키와 달리 sessionStorage는 탭을 바꾸거나, 화면 새로고침하면 정보가 날아감
