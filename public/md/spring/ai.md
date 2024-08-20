# Spring AI
- https://spring.io/projects/spring-ai

## Requirements
- Java 17+
  - https://okdevtv.com/mib/sdkman
- spring-cli
  - https://docs.spring.io/spring-cli/reference/installation.html

## Quick Start

```sh
spring boot new --from ai --name okai
SPRING_AI_OPENAI_API_KEY=sk-proj-xxxxxxxwfjO30KXMDWEOX-7ED07J-aqj87HrlGAPyWVJzuj ./mvnw spring-boot:run
curl localhost:8080/ai/simple
```
