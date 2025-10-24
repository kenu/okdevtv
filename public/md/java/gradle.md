# Gradle
- https://gradle.org
- 강력한 빌드 자동화 도구
- 현재 최신 버전: Gradle 8.7 (2025년 5월 기준)

## 설치 방법
### SDKMAN을 통한 설치 (권장)
- [sdkman](/mib/sdkman)
```bash
sdk install gradle
```

### macOS에서 설치
```bash
brew install gradle
```

### Windows에서 설치
- Chocolatey 사용
```bash
choco install gradle
```
- Scoop 사용
```bash
scoop install gradle
```

### 수동 설치
1. [Gradle 다운로드 페이지](https://gradle.org/releases/)에서 최신 버전 다운로드
2. 압축 해제 후 환경 변수 PATH에 bin 디렉토리 추가

## 기본 명령어
```bash
# 프로젝트 빌드
gradle build

# 테스트 건너뛰고 빌드
gradle build -x test

# Spring Boot 애플리케이션 실행
gradle bootRun

# Gradle Wrapper 사용 (권장)
./gradlew build
./gradlew bootRun
```

## 프로젝트 시작하기
### 새 프로젝트 초기화 (권장)
```bash
# 새 디렉토리 생성
mkdir my-project
cd my-project

# Gradle 초기화 (대화형)
gradle init
```

### 수동으로 시작하기
```bash
mkdir basic-demo
cd basic-demo
touch build.gradle
```

## Gradle 태스크 확인
```bash
# 모든 태스크 보기
gradle tasks --all

# 기본 태스크 보기
gradle tasks
```

## 의존성 범위 (Dependency Scope)
- `implementation` : 컴파일 및 런타임에 필요, API는 노출되지 않음 (권장)
- `api` : 컴파일 및 런타임에 필요, API가 노출됨
- `compileOnly` : 컴파일 시에만 필요 (런타임에는 불필요)
- `runtimeOnly` : 런타임에만 필요
- `testImplementation` : 테스트 컴파일 및 실행에만 필요
- `testCompileOnly` : 테스트 컴파일에만 필요
- `testRuntimeOnly` : 테스트 실행에만 필요

## build.gradle 예제
```groovy
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.2.0'
    id 'io.spring.dependency-management' version '1.1.4'
}

group = 'com.example'
version = '0.0.1-SNAPSHOT'

java {
    sourceCompatibility = '17'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    runtimeOnly 'com.h2database:h2'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

tasks.named('test') {
    useJUnitPlatform()
}
```

## 커스텀 태스크 정의
```groovy
// 파일 복사 태스크
task copy(type: Copy) {
    from 'src'
    into 'dest'
}

// ZIP 파일 생성 태스크
task zip(type: Zip) {
    from 'src'
    archiveFileName = 'archive.zip'
}
```

## Gradle Daemon
- Gradle 성능 향상을 위한 백그라운드 프로세스
- 빌드 정보를 메모리에 유지하여 후속 빌드 시간 단축

### 데몬 상태 확인
```bash
# 현재 실행 중인 모든 Gradle 데몬 상태 확인
gradle --status
```

### 데몬 중지 방법
```bash
# 모든 Gradle 데몬 중지
gradle --stop

# 특정 프로세스 ID로 데몬 중지 (Linux/macOS)
kill -9 <PID>

# 실행 중인 Gradle 데몬 찾기 (Linux/macOS)
ps -ef | grep gradle

# 실행 중인 Gradle 데몬 찾기 (Windows)
tasklist | findstr gradle
```

### 데몬 설정
`gradle.properties` 파일에 다음 설정 추가:
```properties
# 데몬 비활성화 (항상 새 프로세스에서 빌드 실행)
org.gradle.daemon=false

# 데몬 JVM 메모리 설정
org.gradle.jvmargs=-Xmx2g -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError
```

### 데몬 자동 종료
- 기본적으로 3시간 동안 사용되지 않으면 자동 종료
- 설정 변경:
```properties
# 데몬 유휴 시간 설정 (밀리초 단위, 예: 1시간)
org.gradle.daemon.idletimeout=3600000
```

### 데몬 문제 해결
- 빌드가 예상대로 작동하지 않을 때 데몬을 중지하고 다시 시작
- 메모리 부족 오류 발생 시 JVM 메모리 설정 증가
- 데몬 로그 확인: `~/.gradle/daemon/<버전>/daemon-<PID>.out.log`

## Gradle Wrapper (권장)
- Gradle이 설치되지 않은 환경에서도 빌드 가능
- 프로젝트에 특정 Gradle 버전 고정
- Wrapper 생성
```bash
gradle wrapper
```
- Wrapper 버전 지정
```bash
gradle wrapper --gradle-version=8.7
```
- Wrapper 사용
```bash
./gradlew build  # Linux/macOS
gradlew.bat build  # Windows
```

## 커스텀 리포지토리 설정
```groovy
repositories {
    mavenCentral()

    maven {
        url 'https://repo.mycompany.com/maven2'
        credentials {
            username = 'username'
            password = 'password'
        }
    }

    // JCenter는 더 이상 권장되지 않음
    // jcenter()
}
```

## 명령줄 인자 전달
```bash
# Spring Boot 애플리케이션에 인자 전달
./gradlew bootRun --args='--server.port=9090 --spring.profiles.active=dev'
```

## 멀티 프로젝트 구성
```groovy
// settings.gradle
rootProject.name = 'my-project'
include 'app', 'library'

// root build.gradle
allprojects {
    repositories {
        mavenCentral()
    }
}

subprojects {
    apply plugin: 'java'

    dependencies {
        testImplementation 'org.junit.jupiter:junit-jupiter:5.9.2'
    }
}
```

## Gradle vs Maven 비교
| 특성 | Gradle | Maven |
|------|--------|-------|
| **빌드 스크립트** | Groovy 또는 Kotlin DSL (간결하고 유연함) | XML (상대적으로 장황하고 경직됨) |
| **성능** | 증분 빌드, 빌드 캐시, 병렬 실행으로 더 빠름 | 상대적으로 느림 |
| **의존성 관리** | 동적 버전, 전이적 의존성 제외, 세밀한 제어 | 중앙 저장소, 전이적 의존성 관리 |
| **커스터마이징** | 매우 유연하고 확장 가능한 플러그인 시스템 | 플러그인 시스템이 있지만 덜 유연함 |
| **학습 곡선** | 더 가파른 학습 곡선 (유연성으로 인해) | 상대적으로 배우기 쉬움 |
| **IDE 지원** | 주요 IDE에서 지원 | 주요 IDE에서 광범위하게 지원 |
| **커뮤니티** | 성장 중이지만 Maven보다 작음 | 오랜 역사와 큰 커뮤니티 |
| **적합한 프로젝트** | 복잡하고 대규모 프로젝트, 커스텀 빌드 로직 | 표준적인 빌드 프로세스를 가진 프로젝트 |

### Gradle의 장점
- **성능**: 증분 빌드와 빌드 캐시로 Maven보다 최대 100배 빠를 수 있음
- **간결성**: 보일러플레이트 코드가 적고 더 읽기 쉬운 빌드 스크립트
- **유연성**: 빌드 로직을 프로그래밍 방식으로 작성 가능
- **의존성 관리**: 더 세밀한 제어와 충돌 해결 메커니즘 제공
- **빌드 캐시**: 태스크 출력을 캐시하여 빌드 시간 단축

### Maven의 장점
- **표준화**: 잘 정의된 빌드 라이프사이클과 구조
- **안정성**: 오랜 기간 검증된 도구
- **문서화**: 풍부한 문서와 예제
- **플러그인 생태계**: 광범위한 플러그인 지원
- **학습 용이성**: XML 기반으로 배우기 쉬움

### 전환 고려사항
Maven에서 Gradle로 전환을 고려한다면:
- 기존 Maven 프로젝트는 `gradle init` 명령으로 쉽게 변환 가능
- 대규모 프로젝트일수록 Gradle의 성능 이점이 두드러짐
- 복잡한 빌드 로직이 필요한 프로젝트에 Gradle이 더 적합
- 팀의 학습 곡선과 적응 시간을 고려해야 함

## 참고 자료
- [Gradle 공식 가이드](https://docs.gradle.org/current/userguide/userguide.html)
- [Gradle 빌드 성능 최적화](https://docs.gradle.org/current/userguide/performance.html)
