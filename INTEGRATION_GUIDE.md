# okdevtv & odevtube 통합 가이드

## 개요

이 가이드는 okdevtv와 odevtube를 하나의 통합 애플리케이션으로 운영하기 위한 방법을 설명합니다.

## 통합 구조

### 핵심 변경사항

1. **단일 데이터베이스**: 두 프로젝트가 같은 MariaDB/MySQL 데이터베이스 사용
2. **통합 인증**: 공유 사용자 계정 및 Passport.js 설정
3. **확장 라우팅**: 
   - `/` - okdevtv 메인 페이지
   - `/video` - 새로운 비디오 관리 API
   - `/user` - 사용자 관리
   - 기타 기존 라우트들

### 데이터베이스 모델

통합 데이터베이스에는 다음 테이블이 포함됩니다:

```
Accounts       - 사용자 정보 (GitHub OAuth)
Channels       - 유튜브 채널
Videos         - 유튜브 비디오
Transcripts    - 비디오 자막/요약
UserChannels   - 사용자-채널 관계 (M:N)
UserVideos     - 사용자-비디오 관계 (M:N)
```

## 설정 방법

### 1. 환경 변수 설정

```bash
# .env 파일 생성
cp .env.example .env

# 필수 설정 항목:
DB_HOST=localhost
DB_NAME=okdevtv_integrated
DB_USER=devuser
DB_PASS=devpass
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
YOUTUBE_API_KEY=your_youtube_api_key
```

### 2. 데이터베이스 생성

```bash
# MariaDB/MySQL에서 데이터베이스 생성
mysql -u devuser -p
> CREATE DATABASE okdevtv_integrated CHARACTER SET utf8mb4;
> EXIT;
```

### 3. 의존성 설치

```bash
npm install
```

### 4. 데이터베이스 마이그레이션

```bash
npm run migrate:db
```

이 명령어는:
- 모든 데이터베이스 테이블 생성
- 필요한 인덱스 생성
- 테이블 구조 동기화

### 5. 애플리케이션 시작

```bash
# 개발 모드 (nodemon으로 자동 재시작)
npm run dev

# 프로덕션 모드
npm start
```

## API 엔드포인트

### 비디오 관리 API (`/video`)

#### 비디오 목록 조회
```
GET /video?category=dev&lang=ko&page=1&pageSize=60
```

**파라미터:**
- `category`: 카테고리 (dev, food, kpop, actor 등)
- `lang`: 언어 (ko, en)
- `page`: 페이지 번호
- `pageSize`: 한 페이지의 비디오 수
- `search`: 검색 키워드 (선택사항)
- `format`: 응답 형식 (json 또는 html)

**응답:**
```json
{
  "videos": [...],
  "totalCount": 100,
  "totalPages": 2,
  "currentPage": 1
}
```

#### 카테고리별 비디오
```
GET /video/category/:category?page=1&pageSize=60
```

#### 통계 조회
```
GET /video/stats/category
GET /video/stats/yearly
GET /video/stats/monthly?months=12
GET /video/top-channels?limit=10
```

## 기존 라우트

### okdevtv 라우트
- `GET /` - 메인 페이지
- `GET /okdevtv-list` - 개발팁 목록
- `GET /apis` - API 관련 페이지
- `GET /hq` - HQ 페이지
- `GET /mib` - 문제은행
- `GET /645` - 로또번호

### 사용자 관리
- `GET /user` - 사용자 정보 조회
- `GET /users` - 전체 사용자 목록
- `POST /user/update` - 사용자 정보 수정
- `GET /login` - 로그인 페이지
- `GET /login/github` - GitHub OAuth 로그인

## 데이터 마이그레이션

기존 프로젝트의 데이터를 옮기려면:

### okdevtv 데이터
기존 okdevtv 데이터는 계속 사용 가능합니다.

### odevtube 데이터
odevtube 데이터베이스를 통합 데이터베이스로 마이그레이션하려면:

```sql
-- 기존 odevtube 데이터 마이그레이션 예시
INSERT INTO okdevtv_integrated.Accounts 
SELECT * FROM odevtube.Accounts;

INSERT INTO okdevtv_integrated.Channels 
SELECT * FROM odevtube.Channels;

INSERT INTO okdevtv_integrated.Videos 
SELECT * FROM odevtube.Videos;

-- 이미 같은 스키마를 사용하므로 직접 복사 가능
```

## 프로젝트 구조

```
okdevtv/
├── bin/
│   └── www                 # 앱 진입점
├── routes/
│   ├── index.js           # 메인 라우트
│   ├── video.js           # 비디오 관리 라우트 (통합)
│   ├── user.js            # 사용자 라우트
│   ├── login.js           # 로그인 라우트
│   └── ...
├── models/
│   ├── Account.js         # 사용자 모델
│   ├── Channel.js         # 채널 모델 (from odevtube)
│   ├── Video.js           # 비디오 모델 (from odevtube)
│   ├── Transcript.js      # 자막 모델 (from odevtube)
│   └── index.js           # 데이터베이스 설정
├── dao/
│   ├── videoDao.js        # 비디오 DAO (통합)
│   ├── channelDao.js      # 채널 DAO (통합)
│   ├── accountDao.js      # 계정 DAO (통합)
│   └── transcriptDao.js   # 자막 DAO (통합)
├── lib/                   # okdevtv 라이브러리
├── public/                # 정적 파일
├── views/                 # EJS 템플릿
├── app.js                 # Express 앱 설정
├── package.json           # 의존성 정의
└── .env.example           # 환경변수 템플릿
```

## 주요 기능

### 1. 통합 인증
- GitHub OAuth 기반 로그인
- 공유 사용자 세션
- Passport.js 통합

### 2. 통합 비디오 관리
- odevtube의 모든 비디오/채널 기능
- okdevtv의 기존 기능과 함께 작동
- 통일된 API 인터페이스

### 3. 공유 사용자 정보
- Account 테이블을 통한 사용자 관리
- 채널/비디오 구독 기능
- 사용자별 구독 채널 조회

## 문제 해결

### 데이터베이스 연결 오류
```bash
# MySQL 연결 확인
mysql -h localhost -u devuser -p devdb

# 데이터베이스 재생성
npm run migrate:db
```

### 모듈 로드 오류
모든 Node.js 파일이 CommonJS 형식으로 변환되었습니다.
ES6 import/export 문법을 사용하려면 package.json에서 `"type": "module"`을 추가하고 모든 코드를 수정해야 합니다.

### 포트 충돌
환경변수 PORT로 다른 포트 설정:
```bash
PORT=3001 npm start
```

## 다음 단계

1. **View 통합**: odevtube 뷰들을 okdevtv 디렉토리로 병합
2. **전체 라우트 통합**: 남은 odevtube 라우트 기능 추가
3. **Admin 패널**: 통합 관리자 대시보드 구현
4. **테스트**: 통합 테스트 스위트 작성

## 기술 스택

- **Runtime**: Node.js
- **Framework**: Express 5.2.1
- **ORM**: Sequelize 6.37.8
- **Database**: MariaDB 3.4.5
- **Authentication**: Passport.js
- **Template Engine**: EJS
- **Module System**: CommonJS (require/module.exports)

## 라이선스

MIT

## 지원

문제나 질문사항이 있으시면:
1. 깃허브 이슈 작성
2. 메일 연락
