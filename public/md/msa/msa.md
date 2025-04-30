# Microservices
- https://microservices.io/
- 마이크로서비스 아키텍처라고도 하는 마이크로서비스는 애플리케이션을 다음과 같은 서비스 모음으로 구성하는 아키텍처 스타일
  * 높은 유지보수 및 테스트 가능
  * 느슨한 결합
  * 독립적으로 배포 가능
  * 비즈니스 역량을 중심으로 구성
  * 소규모 팀 소유
- 마이크로서비스 아키텍처를 사용하면 크고 복잡한 애플리케이션을 빠르고 자주 안정적으로 전달
- 또한 조직이 기술 스택을 발전 가능

## 모놀리스 분해:
  * 모놀리스를 마이크로서비스로 리팩토링하기 위한 10가지 원칙
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
  * from: http://chrisrichardson.net/post/refactoring/2020/08/21/ten-principles-for-refactoring-to-microservices.html

## 2 patterns
마이크로서비스 아키텍처 를 사용하는 팀에 대한 이야기를 들으면서 공통 패턴을 발견했습니다.

1. 거의 모든 성공적인 마이크로서비스 사례는 너무 커져서 부서진 단일체(monolith)에서 시작되었습니다.
2. 처음부터 마이크로서비스 시스템으로 구축된 시스템에 대해 들어본 거의 모든 경우는 심각한 문제로 끝났습니다.
<img src="https://martinfowler.com/bliki/images/microservice-verdict/path.png" class="img" alt="2 patterns">
- from: https://martinfowler.com/bliki/MonolithFirst.html
