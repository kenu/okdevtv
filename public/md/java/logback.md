# 자바 로깅 라이브러리(Logback)

## 1. 개요 (Overview)

* **정의:** Logback은 자바(Java) 기반 애플리케이션에서 표준적으로 사용되는 오픈소스 로깅 프레임워크임.
* **배경:** 기존에 널리 사용되던 Log4j의 한계를 극복하기 위해 동일 개발자가 최초부터 재설계(Refactoring)하여 출시함.
* **현황:** SLF4J(Simple Logging Facade for Java)의 고유 구현체로서, 현재 스프링 부트(Spring Boot)의 기본(Default) 로깅 라이브러리로 채택되어 업계 표준으로 활용 중임.

## 2. 주요 특장점 (Key Features)

* **성능 최적화:** Log4j 대비 실행 속도가 약 10배 이상 향상되었으며, 메모리 소비량이 적어 대규모 트래픽 처리에 유리함.
* **실시간 설정 반영(Auto-Reload):** 설정 파일(`logback.xml`) 수정 시, 애플리케이션 재시작 없이 변경 사항을 자동 감지(Scan) 및 반영함.
* **자동 자원 관리:** 파일 크기(Size) 및 시간(Time) 기반의 로그 파일 압축 및 기간 만료 데이터 자동 삭제(Garbage Collection) 기능을 기본 지원함.

## 3. 로그 레벨 운영 체계 (Log Level Specification)

Logback은 총 5단계의 로깅 레벨을 정의하며, 하위 레벨 설정 시 상위 레벨의 로그가 포함되어 출력되는 계층적 구조를 가짐.

> **(최하위) TRACE  →  DEBUG  →  INFO  →  WARN  →  ERROR (최상위)**

* **TRACE:** 애플리케이션 내부 흐름의 가장 상세한 추적 정보 기록
* **DEBUG:** 개발 및 테스트 단계에서의 디버깅 목적 데이터 기록
* **INFO:** 운영 환경의 주요 흐름 및 상태 변경 등 정보성 메시지 기록 *(Default 설정)*
* **WARN:** 시스템 실행에는 지장이 없으나 유의가 필요한 경고 상황 기록
* **ERROR:** 요청 처리 불가, 예외(Exception) 발생 등 즉각 조치가 필요한 오류 기록

## 4. 아키텍처 핵심 구성 요소 (Core Components)

| 구성 요소 | 주요 기능 및 역할 |
| --- | --- |
| **Logger** | 로그 컨텍스트를 관리하며, 패키지별 로그 레벨 필터링 및 수집 주체 역할을 수행함. |
| **Appender** | 수집된 로그를 최종적으로 출력할 대상 위치(매체)를 결정함. |
| **Encoder** | 로그 이벤트를 바이트 배열로 변환하고, 지정된 포맷(Format)으로 문자열을 포매팅함. |

### ※ 주요 Appender 분류

1. **ConsoleAppender:** 표준 출력(System.out)을 통해 터미널 및 콘솔 화면에 로그를 표출함.
2. **FileAppender:** 지정한 단일 파일 경로에 로그 데이터를 지속 기록함.
3. **RollingFileAppender:** 운영 환경 필수 요소로, 설정된 조건(일 단위, 용량 단위 등)에 따라 로그 파일을 분할 보관(Rolling)함.

## 5. 표준 설정 파일 구조 예시 (`logback.xml`)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration scan="true" scanPeriod="30 seconds">

    <property name="LOG_PATH" value="./logs" />
    <property name="LOG_FILE_NAME" value="application" />

    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <appender name="ROLLING_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_PATH}/${LOG_FILE_NAME}.log</file>

        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${LOG_PATH}/archive/${LOG_FILE_NAME}.%d{yyyy-MM-dd}.%i.log.gz</fileNamePattern>
            
            <timeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            
            <maxHistory>30</maxHistory>
            <totalSizeCap>3GB</totalSizeCap>
        </rollingPolicy>

        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <logger name="com.yourpackage" level="DEBUG" additivity="false">
        <appender-ref ref="CONSOLE" />
        <appender-ref ref="ROLLING_FILE" />
    </logger>

    <root level="INFO">
        <appender-ref ref="CONSOLE" />
        <appender-ref ref="ROLLING_FILE" />
    </root>

</configuration>

```

## ref
