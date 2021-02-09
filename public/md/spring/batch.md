# Spring Batch
* Spring Boot runs `schema-@@platform@@.sql` automatically during startup.
* `-all` is the default for all platforms.

## Dependency
```groovy
	implementation 'org.springframework.boot:spring-boot-starter-batch'
	runtimeOnly 'org.hsqldb:hsqldb'
```

## Code
* Intermediate Processor

```java
import org.springframework.batch.item.ItemProcessor;

public class PersonItemProcessor implements ItemProcessor<Person, Person> {
}
```

* Batch Job

```java
@Configuration
@EnableBatchProcessing
public class BatchConfiguration {

  @Autowired
  public JobBuilderFactory jobBuilderFactory;

  @Autowired
  public StepBuilderFactory stepBuilderFactory;

    ...

}
```

## ref
* https://spring.io/guides/gs/batch-processing/
