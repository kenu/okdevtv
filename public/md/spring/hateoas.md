# Spring Boot HATEOAS
- Hypermedia as the Engine of Application State (HATEOAS)
- Hypermedia format
  - http://stateless.co/hal_specification.html
- Response

```json
{
  "content":"Hello, World!",
  "_links":{
    "self":{
      "href":"http://localhost:8080/greeting?name=World"
    }
  }
}
```

## ref
- https://spring.io/guides/gs/rest-hateoas/
- https://en.wikipedia.org/wiki/HATEOAS
- https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven
