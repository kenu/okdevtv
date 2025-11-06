# Maven
- 2002 https://maven.apache.org
- java build tool
- 빌드 = 컴파일 + 패키징 + 일괄작업
- JAVA_HOME needed
- 정형화된 작업 페이즈(phase)
- 자바 라이브러리 파일 의존성 관리
- 스프링 프레임워크와 밀접한 관계

## install

- sdkman
  - [sdkman](/mib/sdkman) 추천
    - `sdk install maven`
  - JDK 설치 및 JAVA_HOME 환경변수 필요
  - https://maven.apache.org 위치에서 `apache-maven-*.*.*-bin.zip` 다운로드
  - download and unzip
  - 환경변수 %Path%;\path\to\maven\bin
- mac

```
brew install maven
```

## run
- 환경변수 설정 후 새로 cmd창을 띄우고 `mvn -v` 실행

## POM
- Project Object Model
- 메이븐은 pom.xml 기반으로 실행

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                  http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.okdevtv.java</groupId>
  <artifactId>okdevtv</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>okdevtv</name>
  <url>http://maven.apache.org</url>

  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

- Quick Start

```
mvn archetype:generate -DgroupId=com.okdevtv.java -DartifactId=okdevtv -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```
- groupId : com.okdevtv.java, 프로젝트 패키지
- artifactId : okdevtv, 프로젝트 이름
- archetypeArtifactId : maven-archetype-quickstart, 템플릿 이름

- `mvn package`
- mvn 실행에 필요한 jar파일 다운로드
- 프로젝트 빌드(컴파일, 테스트, 패키징)에 필요한 jar파일 다운로드
- 두 번째 실행시 로컬에 저장된 jar 사용으로 빨라짐

## 메이븐 phase
- validate
- compile
- test
- **package**
- integration-test
- verify
- **install**
- deploy

## 기타
- clean
- site
- `mvn tomcat:run`
- `mvn spring-boot:run`

## 메이븐 저장소
- 로컬, 원격 저장소로 구분
- `~/.m2/repository` 기본 위치
- 라이브러리 정보는 http://mvnrepository.com 에서 검색 가능

## manual install
```sh
mvn install:install-file -Dfile=<path_to_your_jar> -DgroupId=<your_group_id> -DartifactId=<your_artifact_id> -Dversion=<your_version> -Dpackaging=<your_packaging_type>
```

## build file name
```
  <build>
    <finalName>WhatEverYouLikey</finalName>
  </build>
```

## to gradle initializing
- pom.xml to build.gradle
- `gradle init`

## related
- [gradle](/mib/gradle)
- [maven deep dive](/mib/java/maven2)
- [maven etc](/mib/java/maven3)

## ref
- 5분 메이븐
  - http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html
- Polyglot maven
  - https://github.com/takari/polyglot-maven
