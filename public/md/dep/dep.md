# Dependency Check
- https://owasp.org/www-project-dependency-check/

## 개요
- OWASP의 의존성 보안 체크 도구
- 프로젝트의 라이브러리 취약점을 검사하는 도구
- NVD(National Vulnerability Database) 활용
- CVE(Common Vulnerabilities and Exposures) 데이터베이스 활용
- 다양한 빌드 도구와 통합 가능 (Maven, Gradle, Jenkins 등)

## NVD API Key 설정
- NVD API를 사용하면 취약점 데이터베이스 업데이트 속도가 향상됨
- https://nvd.nist.gov/developers/request-an-api-key 에서 API 키 발급
- API 키는 하루 50,000 요청 가능

### Maven 설정
```xml
<configuration>
    <nvdApiKey>YOUR-NVD-API-KEY</nvdApiKey>
</configuration>
```

### Gradle 설정
```gradle
dependencyCheck {
    nvdApiKey = 'YOUR-NVD-API-KEY'
}
```

### CLI 설정
```bash
export NVD_API_KEY=YOUR-NVD-API-KEY
# 또는
dependency-check --nvdApiKey YOUR-NVD-API-KEY --scan /path/to/project
```

## 설치 방법

### CLI 도구 설치
```bash
# Mac
brew update && brew install dependency-check

# Windows (requires chocolatey)
choco install dependency-check
```

### Maven 플러그인 설정
```xml
<plugin>
    <groupId>org.owasp</groupId>
    <artifactId>dependency-check-maven</artifactId>
    <version>12.1.8</version>
    <executions>
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

### Gradle 플러그인 설정
```gradle
plugins {
    id 'org.owasp.dependencycheck' version '12.1.8'
}
```

## 사용 방법

### CLI 실행
```bash
# 프로젝트 폴더 스캔
dependency-check --scan /path/to/project

# 결과를 HTML로 출력
dependency-check --scan /path/to/project --format HTML
```

### Maven
```bash
mvn dependency-check:check
```

### Gradle
```bash
./gradlew dependencyCheckAnalyze
```

## 주요 기능
- 취약점 데이터베이스 자동 업데이트
- HTML, XML, JSON, CSV 등 다양한 형식의 보고서 생성
- 취약점 심각도 레벨 구분 (Critical, High, Medium, Low)
- False Positive 설정 가능
- Suppress 파일을 통한 오탐 관리

## Jenkins 통합
1. "OWASP Dependency-Check" 플러그인 설치
2. Jenkins 프로젝트 설정에서 빌드 후 조치로 추가
3. 취약점 보고서 및 트렌드 확인 가능

## 모범 사례
- CI/CD 파이프라인에 통합하여 자동화
- 정기적인 취약점 검사 스케줄링 (주간/월간)
- 심각한 취약점 발견 시 즉시 대응
- 보안 패치가 있는 최신 버전으로 업데이트
- 오탐 관리를 위한 suppress 파일 버전 관리

## related
- [CVE](/mib/cve)
- [NVD](/mib/nvd)

## 참고 자료
- [OWASP Dependency Check 공식 문서](https://owasp.org/www-project-dependency-check/)
- [GitHub 저장소](https://github.com/jeremylong/DependencyCheck)
- [Jenkins 플러그인](https://plugins.jenkins.io/dependency-check-jenkins-plugin/)

