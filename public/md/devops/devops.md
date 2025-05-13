# DevOps
- 소프트웨어의 개발(Development)과 운영(Operations)의 합성어
- 소프트웨어 개발자와 정보기술 전문가 간의 소통, 협업 및 통합을 강조하는 개발 환경이나 문화
- 소프트웨어 개발과 운영을 위한 문화, 방법론, 프로세스, 도구, 문서화, 테스트, 배포, 릴리즈 등을 포함
- 소프트웨어 개발 및 인프라 변경의 더 빠른 배포와 안정적인 운영을 위한 지속적인 전달 접근 방식
- 클라우드 네이티브 환경에서 특히 중요해진 IT 운영 철학

## 목적
- 제품 출시까지 걸리는 기간(time to market) 단축
- 새로운 판의 더 낮은 실패율
- 픽스 간 짧아진 리드 타임(상품 생산 시작부터 완성까지 걸리는 시간)
- 복구 시 더 빠른 평균 시간 (새로운 릴리스의 충돌 및 그 밖에 현재의 시스템을 비활성화하는 상황에서)
- 지속적 통합(CI)과 지속적 배포(CD)의 자동화
- 인프라스트럭처를 코드(IaC)로 관리하여 일관성 유지
- 마이크로서비스 아키텍처와 컨테이너 기술을 활용한 확장성 향상
- 운영 지표와 피드백 루프를 통한 지속적인 개선

## 툴 체인
- <img src="images/Devops-toolchain.webp" alt="devops toolchain" class="img" />
- 계획: 목적을 수행하기 앞서 방법이나 절차 등을 미리 생각하여 계획. (Jira, Asana, GitHub Projects, Azure Boards)
- 코드: 코드 개발 및 검토, 버전 관리 도구, 코드 병합 (Git, GitHub, GitLab, Bitbucket)
- 빌드: 지속적 통합(CI) 도구, 빌드 상태 (Jenkins, GitHub Actions, GitLab CI, CircleCI, Travis CI)
- 테스트: 테스트 및 결과가 성능을 결정 (Jest, Cypress, Selenium, JUnit, Pytest)
- 패키지: 애플리케이션 디플로이 이전 단계 (Docker, NPM, Maven, Gradle, Artifactory)
- 릴리스: 변경사항 관리, 릴리스 승인, 릴리스 자동화 (ArgoCD, Spinnaker, GitHub Actions, Octopus Deploy)
- 구성: 인프라스트럭처 구성 및 관리, IaC(Infrastructure as Code) 도구 (Terraform, Ansible, Puppet, Chef, AWS CloudFormation)
- 모니터링: 애플리케이션 성능 모니터링, 최종 사용자 경험 (Prometheus, Grafana, ELK Stack, Datadog, New Relic)

## DevSecOps
- <img src="images/devsecops-logo.webp" alt="devsecops logo" class="img" />
- 설계부터 테스트, 배포 및 제품 제공에 이르기까지 소프트웨어 개발 프로세스의 모든 단계에서 보안 구현을 자동화
- 보안 취약점이 발생할 경우 이를 처리
- 따라서 해결하는 것이 더 쉽고 비용도 저렴
- "보안을 왼쪽으로 이동(Shift Left Security)"하여 개발 초기 단계부터 보안 고려

### DevSecOps 도구 및 실천 방법
- **코드 분석**: SonarQube, Checkmarx, Fortify, Snyk
- **비밀 관리**: HashiCorp Vault, AWS Secrets Manager, GitGuardian
- **컨테이너 보안**: Trivy, Clair, Anchore
- **컴플라이언스**: OWASP ZAP, Chef InSpec, Open Policy Agent
- **네트워크 보안**: WAF, istio, Calico
- **보안 테스트**: SAST(정적 분석), DAST(동적 분석), IAST(인터랙티브 분석)

## GitOps
- 깃(Git)을 통한 인프라와 애플리케이션 배포를 관리하는 운영 모델
- 모든 변경 사항은 코드로 저장되며 Git 저장소를 진실의 원천(Source of Truth)으로 취급
- 선언적 인프라(Declarative Infrastructure)를 통해 인프라의 상태를 설명
- 자동화된 조정 시스템(Reconciliation System)에 의해 일관성 유지

### GitOps 도구
- Flux CD
- ArgoCD
- Jenkins X
- Weaveworks Flagger

## Platform Engineering
- 개발자들이 애플리케이션을 빠르게 제공할 수 있도록 셀프 서비스 기능을 갖춘 플랫폼 구축
- 개발자 경험(DX)을 최적화하고 생산성 향상에 초점
- 내부 개발자 플랫폼(IDP)을 통해 표준화된 도구와 워크플로 제공

### Platform Engineering 도구
- Backstage (Spotify)
- Kubernetes
- Cloud Foundry
- Port
- OPA (Open Policy Agent)

## ref
- https://en.wikipedia.org/wiki/DevOps_toolchain
- https://socradar.io/what-are-devops-devsecops-and-rugged-devops/
- https://aws.amazon.com/devops/what-is-devops/
- https://www.atlassian.com/devops/what-is-devops
- https://www.redhat.com/en/topics/devops
- https://github.com/mikeroyal/DevOps-Guide
