# Maven Deep Dive

- 2004년 Maven 2 등장으로 라이프사이클/플러그인 모델 정착
- 대규모 자바 프로젝트에서 일관된 빌드·의존성 관리 표준 제공
- 선언적 구성(POM)과 재사용 가능한 플러그인 조합이 핵심

## Maven 핵심 개념 정리

- **Model**: `pom.xml`이 Project Object Model을 정의, 프로젝트 메타데이터·의존성·빌드 설정 관리
- **Lifecycle**: clean / default / site 세 가지 라이프사이클과 각 단계(phase)에 goal 연결
- **Plugin**: 실제 작업을 실행하는 단위, goal을 phase에 매핑하여 실행 흐름 구성
- **Repository**: Local(`~/.m2/repository`) ↔ Remote(Maven Central, 사내 Nexus 등) 캐시/배포 구조

## pom.xml 구조 심층 분석

```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <parent>...</parent> <!-- 상속/공통 설정 재사용 -->
  <groupId>...</groupId>
  <artifactId>...</artifactId>
  <version>...</version>
  <packaging>jar|war|pom|ear ...</packaging>

  <properties>
    <java.version>21</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <version>${spring.boot.version}</version>
      <scope>compile|test|provided|runtime|import</scope>
      <exclusions>...</exclusions>
    </dependency>
  </dependencies>

  <dependencyManagement>...</dependencyManagement>
  <build>
    <plugins>...</plugins>
    <pluginManagement>...</pluginManagement>
  </build>

  <profiles>...</profiles>
  <modules>...</modules> <!-- 멀티 모듈 구성 -->
</project>
```

### parent vs dependencyManagement
- **parent**: 공통 속성/플러그인/의존성 버전 상속, `relativePath`로 부모 위치 지정 가능
- **dependencyManagement**: 하위 모듈이 버전 명시 없이 의존성 추가 가능하도록 버전 캡 정의

## Lifecycle Deep Dive

| Lifecycle | 주요 Phase | 설명 |
|-----------|-----------|------|
| clean     | pre-clean → **clean** → post-clean | 이전 빌드 산출물 제거 |
| default   | validate → compile → test → package → verify → **install** → deploy | 컴파일·테스트·배포 중심 기본 흐름 |
| site      | pre-site → **site** → post-site → site-deploy | 프로젝트 문서 생성·배포 |

- `mvn <phase>` 실행 시 해당 phase 이전 단계까지 순차 수행
- `mvn clean package`처럼 다른 라이프사이클 조합 가능

## Plugin & Goal 전략

- `maven-compiler-plugin`: `compile`, `testCompile` goal로 자바 소스 컴파일
- `maven-surefire-plugin`: 단위 테스트 실행, JUnit5 사용 시 `provider` 설정 주의
- `maven-failsafe-plugin`: 통합 테스트(`integration-test`, `verify`)에 goal 매핑
- `spring-boot-maven-plugin`: `repackage`, `spring-boot:run` 지원
- Goal 직접 실행: `mvn dependency:tree`, `mvn help:effective-pom`

## Profiles로 환경 분리

```xml
<profiles>
  <profile>
    <id>prod</id>
    <activation>
      <property>
        <name>env</name>
        <value>prod</value>
      </property>
    </activation>
    <properties>
      <db.url>jdbc:postgresql://prod-host/db</db.url>
    </properties>
  </profile>
</profiles>
```

- `mvn package -Pprod` 혹은 `-Denv=prod`로 활성화
- 환경별 리소스 필터링(`resources/filtering`), 플러그인 설정 분기, 다중 모듈 선택적 빌드 가능

## 의존성 관리 고급 기법

1. **BOM(Bill of Materials)**
   - `scope import` + `type pom` 조합으로 플랫폼 버전 캡 고정
   - 예) `spring-boot-dependencies`, `quarkus-bom`
2. **Optional Dependency**
   - `<optional>true</optional>`로 전이 의존성 확산 제한
3. **Exclusion**
   - 충돌 버전 제거 시 `dependency/exclusions` 활용
4. **Dependency Convergence**
   - `mvn -Dverbose dependency:tree`로 충돌 탐지 후 관리

## Tomcat Embed 버전 지정

- Spring Boot 미사용 시 명시적으로 Tomcat Embed 버전 고정 필요
- 공통 속성 혹은 BOM을 통해 의존성 버전 일관성 유지

```xml
<properties>
  <tomcat.embed.version>10.1.25</tomcat.embed.version>
</properties>

<dependencies>
  <dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-core</artifactId>
    <version>${tomcat.embed.version}</version>
  </dependency>
  <dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <version>${tomcat.embed.version}</version>
  </dependency>
</dependencies>
```

- 여러 모듈에서 공유한다면 parent POM의 `<dependencyManagement>`에 동일 버전 선언 후 하위 모듈에서 버전 생략
- Spring Boot를 사용한다면 `spring-boot-starter-web`이 관리하는 Tomcat 버전을 우선 따르고, 커스터마이징은 `spring-boot-dependencies` BOM을 override하지 않는 선에서 `<properties>` 조정

## Offline 빌드
- 폐쇄망 등에서 로컬의 저장소에서 의존성만으로 빌드
- `mvn clean install -o`

## Jetty Embed 대안

- Non-Blocking I/O 및 경량 서버가 필요하다면 Jetty Embed 선택
- Tomcat과 동일하게 버전 충돌을 피하려면 속성/관리 섹션으로 버전 고정

```xml
<properties>
  <jetty.version>11.0.22</jetty.version>
</properties>

<dependencies>
  <dependency>
    <groupId>org.eclipse.jetty</groupId>
    <artifactId>jetty-server</artifactId>
    <version>${jetty.version}</version>
  </dependency>
  <dependency>
    <groupId>org.eclipse.jetty</groupId>
    <artifactId>jetty-servlet</artifactId>
    <version>${jetty.version}</version>
  </dependency>
</dependencies>
```

- JSP가 필요하다면 `apache-jsp`, `taglibs-standard-impl` 등 추가 고려
- Jetty BOM(`org.eclipse.jetty:jetty-bom`)을 `<dependencyManagement>`에 추가하면 하위 모듈에서 버전 생략 가능
- Spring Boot에서 Jetty로 교체 시 `spring-boot-starter-web` 대신 `spring-boot-starter-jetty` 사용

## Repository & Distribution 전략

- **Local**: 최초 다운로드 후 캐시, `~/.m2/settings.xml`로 경로 변경 가능
- **Remote**: Maven Central → 사내 Nexus/Artifactory 프록시 구성해 속도·보안 확보
- **Distribution Management**: 스냅샷(`snapshotRepository`) vs 릴리스(`repository`) 경로 분리
- 사내 아티팩트 업로드: `mvn deploy -DskipTests`

## settings.xml 체크포인트

- 위치: `${maven.home}/conf/settings.xml` 또는 `~/.m2/settings.xml`
- 서버 인증정보: `<servers><server><id>corp-nexus</id><username>...</username></server></servers>`
- 미러: `<mirrors>`로 중앙 저장소 대신 사내 저장소 우선 사용
- 프로파일 글로벌 적용: `<profiles>` + `<activeProfiles>` 조합

## 빌드 성능 & 디버깅 팁

- 병렬 빌드: `mvn -T 1C clean package` (코어 수 기준)
- 의존성 해석 확인: `mvn -U`로 원격 스냅샷 강제 업데이트
- 디버깅: `mvn -X` (debug 로그), `mvn -e` (stacktrace)
- CI 최적화: `mvn --batch-mode -Dmaven.test.skip=true` (필요 시 테스트 생략)
- 다중 JVM 환경: `toolchains.xml` 활용해 JDK 버전 고정

## 표준 디렉터리 구조

```
maven-project/
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   ├── resources
│   │   └── webapp
│   └── test
│       ├── java
│       └── resources
├── target
├── .mvn/
│   ├── wrapper/
│   └── jvm.config
└── README.md
```

- `src/main/resources`: 프로퍼티·템플릿 등 빌드 시 클래스패스 포함 리소스
- `src/main/webapp`: WAR 패키징 시 정적 파일·WEB-INF 구성
- `.mvn/wrapper`: Maven Wrapper(`mvnw`, `mvnw.cmd`) 설정

## 참고 명령어

- `mvn help:effective-pom`: 상속/프로필 반영된 최종 POM 확인
- `mvn dependency:analyze`: 사용되지 않는 의존성/미선언 의존성 점검
- `mvn versions:display-dependency-updates`: 버전 업그레이드 후보 확인

## 더 읽을거리

- Maven 공식 가이드: https://maven.apache.org/guides/
- Repository 검색: https://mvnrepository.com
- Polyglot Maven (YAML/Groovy POM): https://github.com/takari/polyglot-maven
