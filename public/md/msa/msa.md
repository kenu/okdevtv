# Microservices
- https://microservices.io/
- 마이크로서비스 아키텍처라고도 하는 마이크로서비스는 애플리케이션을 다음과 같은 서비스 모음으로 구성하는 아키텍처 스타일
  - 높은 유지보수 및 테스트 가능
  - 느슨한 결합
  - 독립적으로 배포 가능
  - 비즈니스 역량을 중심으로 구성
  - 소규모 팀 소유
- 마이크로서비스 아키텍처를 사용하면 크고 복잡한 애플리케이션을 빠르고 자주 안정적으로 전달
- 또한 조직이 기술 스택을 발전 가능

![마이크로서비스 아키텍처 개요](https://miro.medium.com/v2/resize:fit:1400/1*wiMj7LMK9ckjq-8I0YCW2g.png)

## MSA(MicroService Architecture)의 정의
- 하나의 애플리케이션을 작고 독립적인 서비스로 나누어 개발
- 각 서비스는 자체 데이터베이스를 가지고 있음
- 서비스 분리는 각 서비스가 비즈니스 요구에 맞춰 독립적으로 확장 가능하고, 유지보수가 용이하도록 설계하는 것이 목표
- 개발부터 배포까지 효율적으로 수행 가능 -> 기업이 개발 및 유지보수에 소요되는 시간과 비용을 줄이는 데 도움

![모놀리식 vs 마이크로서비스](https://www.atlassian.com/dam/jcr:5308cc56-ff2b-4387-a2e8-3e6a0fce6e81/monolithic-vs-microservices-architecture.svg)

## MSA의 구조
MSA는 크게 Inner Architecture와 Outer Architecture로 구분할 수 있음

### Inner Architecture
- 내부 서비스를 어떻게 쪼개고 설계할지를 다룸
- 마이크로서비스 정의, DB 접근 구조, API 설계 등이 포함
- 서비스 정의는 비즈니스 특성과 서비스 간의 종속성을 고려해야 함
- 각 비즈니스 및 시스템의 특성에 따라 표준화된 접근이 없기 때문에, MSA 설계에서 가장 어려운 부분

### Outer Architecture
- 외부와의 연결 및 관리를 담당하는 부분
- Gartner에서는 MSA의 Outer architecture을 총 6개의 영역으로 분류
  1. External Gateway
  2. Service Mesh
  3. Container Management
  4. Backing Services
  5. Telemetry
  6. CI/CD Automation

![MSA 구조](https://microservices.io/i/home-page/home-page-SuccessTriangle_Fast_Flow_Small.png)

## DDD (Domain Driven Design)
- MSA 서비스 분리의 논리적 기준 제시
- 서비스 간 느슨한 결합(Loose Coupling)과 높은 응집력(High Cohesion) 유지하면서, 각 서비스가 단일 목적의 기능을 수행하도록 분리하기 위해 관련 기능을 모아 하나의 도메인으로 묶음
- MSA에서 이러한 도메인 구분은 서비스 분리의 기준 -> 도메인을 잘못 나누면 MSA 어려움을 초래할 수 있으므로, 적절한 도메인 설계가 중요

![DDD와 Bounded Context](https://martinfowler.com/bliki/images/boundedContext/sketch.png)

### 전략적 설계와 전술적 설계

#### 전략적 설계 (Strategic Design)
MSA에서 각 서비스를 어떤 기준으로 분리할지에 대한 큰 틀을 결정하는 단계, Bounded Context를 정의하고, 서비스 간 경계를 설정

- **Bounded Context**: 도메인 경계를 명확히 하여 서비스가 독립적으로 운영되도록 돕는 개념, 이를 통해 서비스 간 결합을 줄이고 응집력을 높일 수 있음

#### 전술적 설계 (Tactical Design)
각 서비스 내부의 구체적인 비즈니스 로직을 구체적으로 구현하는 단계

### 서브 도메인
하나의 큰 도메인을 여러 개의 서브 도메인으로 나누어 비즈니스 복잡성을 줄이고 각 서브 도메인을 독립적으로 관리

- **핵심 도메인**: 핵심 기능
- **지원 도메인**: 핵심은 아니지만 중요한 기능
- **일반 도메인**: 중요하지 않은 기능

## 데이터 일관성 및 트랜잭션 관리
MSA에서는 여러 서비스가 독립적인 데이터베이스를 가지고 있기 때문에 전통적인 트랜잭션 처리 방식이 어려움. 이를 해결하기 위해 **Saga 패턴**과 **이벤트 소싱** 같은 분산 트랜잭션 관리 패턴이 사용됨.

- **Saga 패턴**: 여러 서비스에 걸쳐 발생하는 트랜잭션을 순차적으로 처리하고, 중간에 실패할 경우 보상 트랜잭션을 통해 롤백하는 방식.
  - Choreography based SAGA pattern: 각 서비스가 이벤트를 발행하고 다른 서비스가 이를 구독하는 방식
  - Orchestration based SAGA pattern: 중앙 오케스트레이터가 트랜잭션을 조정하는 방식

- **이벤트 소싱**: 상태 변경을 이벤트로 저장하고, 이 이벤트 로그를 기반으로 시스템의 상태를 재구성하는 방식.

![Saga 패턴](https://microservices.io/i/data/saga.jpg)

## 서비스 간 통신
각 서비스는 비즈니스 로직을 독립적으로 처리하되, 필요한 경우 다른 서비스와 통신해야 함

- **동기식 통신**: REST API로 구현이 쉽지만, 서비스 간 결합도가 높아질 수 있음
- **비동기식 통신**: 서비스가 독립적으로 동작하므로, 서비스 간 결합도가 낮음, 이벤트 기반 통신 사용
  - **이벤트 기반 통신**: 한 서비스에서 발생한 이벤트를 다른 서비스에 비동기적으로 전달하는 방식

서비스의 특성과 요구 사항을 고려하여 가장 적합한 통신 방법을 선택하는 것이 중요

![서비스 간 통신](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/media/communication-in-microservice-architecture/sync-versus-async-patterns.png)

## API 게이트웨이
API Gateway는 API 서버 앞단에서 모든 API 서버들의 엔드포인트를 단일화 해주는 또다른 서버임. API에 대한 인증과 인가 기능을 가지고 있으며, 메세지의 내용에 따라 어플리케이션 내부에 있는 마이크로 서비스로 라우팅하는 역할을 담당함.

![API 게이트웨이](https://microservices.io/i/apigateway.jpg)

### API Gateway의 주요 기능
1. **인증 및 인가 (Authentication and Authorization)**: 보안을 중앙 집중화하여 서비스 중복을 줄임
2. **요청 절차의 단순화**: 여러 서비스 호출을 단일 클라이언트 요청으로 통합하여 효율성을 높임
3. **라우팅 및 로드밸런싱**: 요청을 적절한 서비스로 라우팅하고 트래픽을 고르게 분산
4. **서비스 오케스트레이션**: 여러 서비스를 결합하여 단일 작업으로 수행
5. **서비스 디스커버리**: 클라우드 환경에서 동적으로 서비스 위치를 찾음

### API Gateway의 장단점
**장점**
- **보안 강화**: 모든 요청이 API 게이트웨이를 통해 처리되므로, 중앙 집중식 인증 및 보안 정책을 설정할 수 있음
- **성능 최적화**: 속도 제한과 로드 밸런싱을 통해 백엔드 서비스의 부하를 관리할 수 있음
- **중앙 관리**: 각 마이크로서비스별로 인증 및 권한 부여, 보안 정책을 개별적으로 관리하지 않아도 됨
- **유연성**: 다양한 클라이언트 디바이스 (웹, 모바일 등)에 맞춰 요청 형식을 변환할 수 있음

**단점**
- **단일 장애점**: API 게이트웨이에 문제가 발생하면 전체 시스템이 영향을 받을 수 있음
- **추가 지연**: 클라이언트와 백엔드 간의 요청이 게이트웨이를 거치면서 약간의 지연이 발생할 수 있음
- **복잡성 증가**: API 게이트웨이를 설계하고 유지보수하는 데 있어 추가적인 복잡성이 발생할 수 있음

## 컨테이너화
컨테이너화는 각 마이크로서비스를 독립적으로 실행할 수 있는 경량화된 환경을 제공해주어, 서비스 간 격리와 배포의 용이성을 보장해 줌. 특히, 다양한 환경에서도 일관된 방식으로 서비스를 실행할 수 있도록 지원함.

![컨테이너화](https://www.docker.com/wp-content/uploads/2021/11/docker-containerized-appliction-blue-border_2.png)

### 컨테이너 기반 가상화
컨테이너 기반 가상화는 별도의 운영체제 대신 하나의 호스트 운영체제를 공유하며, 프로세스 단위로 격리해 실행하는 방식임. 각 컨테이너들은 운영 체제를 따로 가지지 않고, 애플리케이션과 그에 필요한 라이브러리, 의존성만을 포함함. 이를 통해 자원 효율성이 높아지고, 서비스 간의 격리도 유지할 수 있음.

### MSA에서의 컨테이너화 이점
- **환경 간 불일치로 인한 문제 해결**: 각 마이크로서비스를 Docker와 같은 컨테이너로 감싸면, 모든 서비스가 일관된 방식으로 패키징됨.
- **의존성 충돌 해결**: 서비스 간 다른 라이브러리나 의존성을 요구할 때, 컨테이너는 각 서비스의 의존성을 완전히 격리하여 충돌을 방지함.
- **배포 관리의 복잡성 해결**: 컨테이너는 서비스가 실행되는 환경과 무관하게 동일한 런타임 환경을 제공함.

## 마이크로서비스 도입 안티패턴과 과제


### 마이크로서비스를 목표로 삼는 안티패턴
가장 흔한 안티패턴 중 하나는 **마이크로서비스 도입 자체를 목표로** 삼는 것임. 많은 조직들이 마이크로서비스가 왜 필요한지, 비즈니스 목표와 어떻게 연계되는지 명확히 이해하지 못한 채 서둘러 도입하려고 함.

### 조직의 준비 부족
조직의 준비 부족은 마이크로서비스 도입의 성공을 방해하는 요소임. 많은 조직들이 마이크로서비스를 효과적으로 구현하고 관리하는 데 필요한 문화, 기술, 관행이 부족함.

### 기술에만 집중하는 안티패턴
또 다른 흔한 안티패턴은 마이크로서비스의 기술적 측면, 특히 배포 인프라에 과도하게 집중하는 것임. 이는 종종 근본적인 아키텍처와 조직적 과제를 해결하지 않은 채 복잡한 도구와 플랫폼에 조기 투자하는 결과를 초래함.

### 더 많을수록 좋다는 안티패턴
"더 많을수록 좋다"는 안티패턴은 조직이 서비스가 많을수록 항상 더 좋다고 잘못 믿어 지나치게 세분화된 마이크로서비스 아키텍처를 만들 때 발생함.

### 걷기도 전에 날려고 하는 안티패턴
이 안티패턴은 기본적인 소프트웨어 개발 관행을 먼저 숙달하지 않은 채 마이크로서비스를 도입하려는 시도를 뜻함.

### 산발적 도입 안티패턴
산발적 도입은 일관된 전략이나 로드맵 없이 마이크로서비스를 무계획적으로 구현하는 것을 뜻함.

### 엔드-투-엔드 테스팅 함정
마이크로서비스 아키텍처에서 엔드-투-엔드 테스팅에 과도하게 의존하면 "분산 모놀리스"를 초래하고 마이크로서비스의 많은 이점을 상쇄할 수 있음.

## 모놀리스 분해:
  - 모놀리스를 마이크로서비스로 리팩토링하기 위한 10가지 원칙
1. 모노리스 최대한 활용
2. 적절한 이유로 마이크로서비스를 채택하기
3. 아키텍쳐만이 아니다
4. 기업의 지원을 받아라
5. 점진적으로 마이그레이션
6. 출발점을 알기
7. 끝을 염두에 두고 시작하라
8. 고가치 모듈을 먼저 마이그레이션
9. 성공은 향상된 속도와 안정성입니다
10. 아프면 하지마
  - from: http://chrisrichardson.net/post/refactoring/2020/08/21/ten-principles-for-refactoring-to-microservices.html

![모놀리스 분해](https://velog.velcdn.com/images/gravitycage/post/e4074968-5ec7-454c-9650-32898f0f16aa/image.png)

## 2 patterns
마이크로서비스 아키텍처 를 사용하는 팀에 대한 이야기를 들으면서 공통 패턴을 발견했습니다.

1. 거의 모든 성공적인 마이크로서비스 사례는 너무 커져서 부서진 단일체(monolith)에서 시작되었습니다.
2. 처음부터 마이크로서비스 시스템으로 구축된 시스템에 대해 들어본 거의 모든 경우는 심각한 문제로 끝났습니다.
<img src="https://martinfowler.com/bliki/images/microservice-verdict/path.png" class="img" alt="2 patterns">
- from: https://martinfowler.com/bliki/MonolithFirst.html

## Modular Monolith
- [Modular Monolith](./modular.md)

## 참고 자료
- [microservices.io](https://microservices.io/)
- [Martin Fowler - MonolithFirst](https://martinfowler.com/bliki/MonolithFirst.html)
- [Chris Richardson - Ten principles for refactoring to microservices](http://chrisrichardson.net/post/refactoring/2020/08/21/ten-principles-for-refactoring-to-microservices.html)
- [삼성 SDS Insight](https://www.samsungsds.com/kr/insights/1239180_4627.html)
- [LG CNS Blog](https://www.lgcns.com/blog/cns-tech/36171/)
- [Red Hat - 마이크로 서비스란?](https://www.redhat.com/ko/topics/microservices/what-are-microservices)
- [What Is a Modular Monolith?](https://velog.io/@gravitycage/What-Is-a-Modular-Monolith)
