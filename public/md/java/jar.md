# JAR (Java ARchive)

- Java 애플리케이션을 배포하기 위한 패키지 포맷
- 클래스 파일, 리소스, 메타데이터를 단일 파일로 압축
- `.jar` 확장자 사용
- `jar` 명령어 또는 빌드 도구(Maven, Gradle 등)로 생성

## 기본 명령어

```bash
# JAR 파일 생성
jar cvf [생성할파일명].jar [클래스파일]

# JAR 파일 내용 확인
jar tf [파일명].jar

# JAR 파일 실행 (Main-Class 지정 필요)
java -jar [파일명].jar
```

## Manifest 파일

- `META-INF/MANIFEST.MF`에 위치
- JAR 파일의 메타데이터 포함
- Main-Class 지정으로 실행 가능

```
Manifest-Version: 1.0
Main-Class: com.example.Main
```

## Fat JAR

- 의존성을 포함한 단일 실행 가능 JAR
- `java -jar`로 실행 가능
- 주로 Spring Boot에서 사용

### 생성 방법

1. **Maven**
   ```xml
   <build>
       <plugins>
           <plugin>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-maven-plugin</artifactId>
           </plugin>
       </plugins>
   </build>
   ```
   ```bash
   mvn clean package
   ```

2. **Gradle**
   ```groovy
   plugins {
       id 'org.springframework.boot' version '3.x.x'
   }
   ```
   ```bash
   ./gradlew bootJar
   ```

## 실행 옵션

```bash
# JVM 옵션 지정
java -Xms256m -Xmx512m -jar app.jar

# 프로필 지정 (Spring Boot)
java -jar app.jar --spring.profiles.active=prod

# 시스템 프로퍼티 전달
java -Dserver.port=8080 -jar app.jar
```

## 참고사항

- `BOOT-INF/`: Spring Boot Fat JAR의 클래스 경로
- `META-INF/`: 메타데이터 디렉토리
- `org/`: 의존성 라이브러리
