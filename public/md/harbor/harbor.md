# Harbor
- https://goharbor.io
````markdown
# Harbor
- https://goharbor.io
- 컨테이너 이미지 레지스트리. 저장, 관리, 보안 제공.

## 주요 기능
- 이미지 저장 및 관리 (Docker/OCI)
- 취약점 스캔(Trivy/Clair 연동)
- 정책 기반 배포 제어(서명, 취약점 기준)
- RBAC, 레플리케이션, 감사 로그, 웹훅

## 아키텍처(요약)
- Proxy (Nginx)
- Core (API/UI/인증)
- Registry (Docker Registry v2)
- Database (Postgres)
- JobService (레플리케이션, GC)
- Scanner (Trivy/Clair)

## 설치 방법 (Docker Compose, 단일 노드)
1. Harbor 설치 파일 다운로드:
   ```bash
   wget https://github.com/goharbor/harbor/releases/download/v2.2.14/harbor-offline-installer-v2.2.14.tgz
   tar xvf harbor-offline-installer-v2.2.14.tgz
   cd harbor
   ```
2. `harbor.yml` 설정:
   - hostname: 레지스트리 도메인 (예: harbor.example.com)
   - https: TLS 설정 경로 또는 비활성화
   - harbor_admin_password: 초기 관리자 비밀번호
   - 필요 시 scanner, notary 등 활성화

   예:
   ```yaml
   hostname: harbor.example.com
   https:
     port: 443
     certificate: /data/cert/fullchain.pem
     private_key: /data/cert/privkey.pem
   harbor_admin_password: HarborAdmin123
   ```
3. 인증서(옵션, 개발용):
   ```bash
   mkdir -p /data/cert && cd /data/cert
   openssl req -newkey rsa:4096 -nodes -sha256 -keyout privkey.pem -x509 -days 365 -out fullchain.pem -subj "/CN=harbor.example.com"
   ```
4. 설치 실행:
   ```bash
   sudo ./install.sh
   ```
5. 확인:
   - 브라우저: https://<hostname>
   - 컨테이너: `docker ps`로 core/registry/jobservice 확인

## 설정 핵심
- hostname: 접근 도메인
- persistence: 스토리지(S3 또는 로컬)
- database: 기본 Postgres 또는 외부 DB
- jobservice: 비동기 작업

## 사용 예시
- 로그인:
  ```bash
  docker login harbor.example.com -u admin -p HarborAdmin123
  ```
- 푸시:
  ```bash
  docker tag my-app:latest harbor.example.com/library/my-app:1.0.0
  docker push harbor.example.com/library/my-app:1.0.0
  ```
- 풀:
  ```bash
  docker pull harbor.example.com/library/my-app:1.0.0
  ```

## 운영 팁
- 취약점 스캔 자동화: Trivy/Clair 활성화. 스캔 정책 적용.
- Robot 계정 사용: CI용 최소 권한 토큰 사용.
- 정기 백업: Postgres와 레지스트리 스토리지 백업.
- 가비지 컬렉션: 주기적 실행. 실행 전 레플리케이션/잡 중지.
- 레플리케이션: 다중 사이트 동기화 시 사용.

## 복구(간단)
- 순서: DB 복원 → 객체 스토리지 복원 → Harbor 재시작

## 문제해결
- 설치 실패: `install.log` 확인.
- 서비스 에러: `docker compose logs <service>` 확인.
- DB 연결: core 로그에서 확인.
- 스캔 문제: 스캐너 네트워크/NVD 접근 확인.

## 참고
- https://goharbor.io
- https://github.com/goharbor/harbor

````
- 이미지 풀:
