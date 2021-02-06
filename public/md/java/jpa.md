# JPA
* Java Persistence API
* Bridge between object models(Java) and relational models(database)
* Relational: table 구조, Object: graph 구조
* JSR 220, JSR 317, JSR 338
* 관계형과 차이점
  * Granularity
  * Subtypes
  * Identity
  * Associations
  * Data navigation
* JPA Provider
  * Hibernate, Eclipselink, Toplink, Spring Data JPA, etc.

## Class Level Architecture
* javax.persistence.*
* Entity
* Persistence
* Query
* Entity Transaction
* Entity Manager
* Entity Manager Factory

## Entity
  @ManyToOne Relation
  @OneToMany Relation
  @OneToOne Relation
  @ManyToMany Relation

## ref
* https://www.tutorialspoint.com/jpa/jpa_introduction.htm
* https://spring.io/guides/gs/accessing-data-jpa/
* https://spring.io/guides/gs/accessing-data-rest/
