# Spring Bean

```java
package com.okdevtv.spring;

public class MyBean {

	@Override
	public String toString() {
		return "MyBean " + this.hashCode();
	}
}
```

```java
package com.okdevtv.spring;

public class MySecondBean {

	@Override
	public String toString() {
		return "MySecondBean" + this.hashCode();
	}

	public void init() {
		System.out.println("init method called");
	}

	public void destroy() {
		System.out.println("destroy method called");
	}
}
```

```java
package com.okdevtv.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyAppConfiguration {

  @Bean
  public MyBean getMyBean() {
    return new MyBean();
  }

  @Bean(name = { "getMySecondBean", "MySecondBean" }, initMethod = "init", destroyMethod = "destroy")
  public MySecondBean getMySecondBean() {
    return new MySecondBean();
  }

}
```

```java
public static void main(String[] args) {
  AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
  context.scan("com.okdevtv.spring");
  context.refresh();
  System.out.println("Spring Context Refreshed");
  // Getting Bean by Class
  MyBean myBean = context.getBean(MyBean.class);
  System.out.println(myBean);

  MySecondBean mySecondBean = (MySecondBean) context.getBean("getMySecondBean");
  System.out.println(mySecondBean);

  MySecondBean mySecondBean1 = (MySecondBean) context.getBean("MySecondBean");
  System.out.println(mySecondBean1);

  context.close();
}
```

## Bean Annotation
* @Bean
* @Component
* @Controller
* @RestController
* @Service
* @Repository
