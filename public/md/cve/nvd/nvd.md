# CVE NVD API Key

## 개요

- **NVD API**: CVE 데이터베이스에 프로그래밍 방식으로 접근하기 위한 인터페이스
- **목적**: 애플리케이션의 최신 취약점 정보를 실시간으로 확인 및 활용
- **API 키**: 사용자 식별 및 사용량 추적을 위해 필수

## NVD API 키 발급

1.  **웹사이트 방문**: [NVD API 키 요청 페이지](https://nvd.nist.gov/developers/request-an-api-key)
2.  **양식 작성**: 이름, 이메일, 소속 등 정보 입력 후 제출
3.  **이메일 확인**: 제출한 이메일로 API 키 수신

## 활용 방안

### 1. 취약점 스캐닝 도구 연동

- 애플리케이션 의존성 분석 및 알려진 취약점 확인
- CI/CD 파이프라인에 통합하여 자동 검사

### 2. 실시간 보안 대시보드 구축

- NVD API 주기적 호출로 최신 취약점 정보 수집 및 시각화
- 조직 내 사용 소프트웨어 관련 취약점 필터링 및 신속 대응


## API 사용 예시 (cURL)

```bash
curl "https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2025-12345" -H "apiKey: YOUR_API_KEY"
```

- `YOUR_API_KEY`를 발급받은 키로 교체
