# Excel
- MS Office 최고의 제품
- 원조는 VISICALC,
- 그 다음은 Lotus-1-2-3
- 그리고 제 기억엔 M$사의 엑셀 프로그램입니다.
- 요즘은 구글 스프레드시트가 상승중입니다.
- 원조 따위는 정글의 법칙입니다. 마지막까지 살아서 기록을 남긴다는
- 영어 속담도 있습니다. The last man who laugh is winner!

## Excel
- Microsoft 사 출시
- Stackoverflow의 창시자도 참여한 프로젝트
- 각설하고 라이선스 때문에
- 구글스프레드시트로 
- 오늘의 진도 나갑니다.

### `vlookup`
- `v`ertically `look up` = 세로로 데이터 그룹 비교할 때 사용
- 영상 : https://www.youtube.com/watch?v=pjun39ady4c

#### 문법

- `=vlookup(값, 라인, 1, false)`

### `피봇테이블`

- pivot table
- 데이터 통계
- 영상 : https://www.youtube.com/watch?v=nG8sMiKmpzs

#### example

- 날씨 데이터

```
http://www.weather.go.kr/weather/lifenindustry/sevice_rss.jsp
curl http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp\?stnId\=109 | grep -E 'city|tmEf|tmx'
```

### `조건부서식`

- 데이터 구분 편리
- 영상 : https://www.youtube.com/watch?v=G2MPTeiKvOg

### `데이터시각화 차트`

- 숫자의 나열보다 나은 비주얼
- https://www.slideshare.net/kenu/elastic-stack
- 영상 : https://www.youtube.com/watch?v=kfRNSZGtibA

### 문자열 다루기

- 영상 : https://www.youtube.com/watch?v=BiPuIR0mk6g
- 수식 이용
- `=`으로 시작
- `+` 대신 `&`
- cell 표기법 행(알파벳) + 열(숫자)
  - B3
- cell 구간
  - B1:B5
- cell 확장
  - `+` 아이콘
  - B1, C1, D1, ...
  - B1, B2, B3, ...
- 고정 표시 `$`
  - $B1
  - B$2

## ref
- https://www.google.com/search?q=직장인+엑셀+강좌
