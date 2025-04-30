# React.js Axios
- React.js에서 axios 라이브러리 사용법을 Spring Boot 코드와 함께 설명
- React.js의 기본 API
  - axios.get()
  - axios.post()
  - axios.put()
  - axios.delete()
- 각 함수의 사용법은 이후 백엔드 코드와 함께 기술된다.

## Requirements
- node.js 20.*
- openjdk 17.*, maven 3.8+

## 프로젝트 세팅

```
mkdir ~/git/sb-react && cd ~/git/sb-react
# Backend
curl -G https://start.spring.io/starter.tgz -d dependencies=data-rest,data-jpa,h2 -d type=maven-project -d baseDir=backend | tar -xzvf -

# Frontend
npm create vite frontend -- --template react
```



### 가져오기
axios.get()

```js
import axios from 'axios';

export default {
  data: function() {
    return {
      list: []
    };
  },
  mounted: async function() {
    const response = await axios.get("http://localhost:8080/users");
    this.list = response.data;
  },
```

spring boot get()

```java
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(value = "/users")
public class UserController {


  @Autowired(required = true)
  private UserService userService;


  @GetMapping
  public Iterable<User> list() {
    return userService.findAll();
  }
}
```

axios를 로컬에서 사용하기 위해서는 해당 페이지에서 다음과 같이 선언한다.


import axios from 'axios';


`axios` 라이브러리에서 axios 인스턴스를 만든다는 의미이다.


function 앞의 async 키워드는 함수 내에서 비동기 함수 호출이 있는 경우에 필요하다. async와 await는 짝으로 구성된다. axios.get() 함수는 결과가 지연되어서 나오는 비동기 함수이기 때문에 await를 앞에 붙여서 결과가 나올 때까지 기다리게 한다.
원격에서 받은 데이터 response를 this.list 에 할당하면, list에 값이 들어가는 순간 화면에 표시된다.


Spring Boot의 컨트롤러는 @RestController 어노테이션으로 스프링 컨텍스트에 자동 등록된다. @CrossOrigin 어노테이션으로 지정된 도메인에서 호출될 때 CORS(Cross-Origin Resource Sharing) 메커니즘을 지원한다.
@RequestMapping(value = "/users") 어노테이션 때문에 외부에서 http://localhost:8080/users 로 호출하는 경우에 이 컨트롤러가 동작한다.
@GetMapping 으로 부가적인 URI가 지정되어 있지 않기 때문에 GET 방식으로 /users 가 호출이 되면 기본적으로  list() 메소드가 실행결과를 반환한다.


single data get()


`/users/kenu` 와 같이 호출하면 해당 id(kenu)에 해당되는 데이터를 가져 올 수 있다.


axios.get()

```js
  mounted: async function() {
    const userId = this.$route.params.id;
    const response = await axios.get("http://localhost:8080/users/" + userId);
    this.user = response.data;
  },
```



spring boot get()

```java
  @GetMapping(value = "/{userId}")
  public User findOne(@PathVariable("userId") String userId) {
    User user = new User();
    user.setUserId(userId);
    return userService.selectUserInfo(user);
  }
```

Spring Boot에서 제공되는 API를 클라이언트에서 다음 URL로 호출한다.
http://localhost:8080/users/kenu
받은 데이터를 user에 할당해서 화면에 표시한다.
`mounted:` 함수는 페이지가 로딩되자 마자 실행된다.


Spring Boot는 동적으로 호출되는 (value = "/{userId}") 주소를 통해서 userId를 파라미터로 받아서 조회 결과를 리턴한다.


### 생성하기


동일한 주소에 HTTP method를 POST로 데이터와 함께 보내면 서버에 생성(Create)하라는 의미로 전달된다. form에 있는 정보를 문자열로 변환해서 params 변수에 할당하고 axios.post()를 통해서 서버에 전달할 수 있다. 이 때 Request 헤더에 전달되는 타입 정보는 `application/json` 이고 아래 코드와 같이 표기하면 된다.


axios.post()

```js
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const params = JSON.stringify(this.form);
      try {
        const res = await axios.post("http://localhost:8080/users", params, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        alert(JSON.stringify(res.data));
      } catch (e) {
        alert("오류가 발생했습니다.\n" + e);
      }
      location.href = "#/users";
    }
  }
```

spring boot post()

```java
  @PostMapping()
  public User post(@RequestBody DefaultDto userData) {
    User convertUser = null;
    ObjectMapper mapper = new ObjectMapper();
    try {
      convertUser = mapper.readValue(userData.getJsonTxt(), User.class);
      return userService.insertUserInfo(convertUser);
    } catch (IOException e) {
      e.printStackTrace();
    }
    return convertUser;
  }
```



폼 전송 버튼을 클릭하면 onSubmit() 함수가 실행이 되고, 이벤트에 해당되는 함수들은 `methods:` 이하에 선언한다.
`evt.preventDefault();`는 html의 기본동작인 폼을 전송하면서 페이지를 변경하는 기능을 취소한다는 의미이다. 따라서 onSubmit() 함수를 실행해도 페이지는 특정한 명령을 만나기 전까지는 그대로 현재 페이지를 유지하게 된다.


Spring Boot에서는 전송받은 데이터를 객체에 저장하고, DB에 적재하고, 그 결과를 반환한다. 반환되는 결과값은 저장된 객체 또는 다양하게 정할 수 있다.


### 갱신하기

서버의 정보를 변경할 때에는 put method를 사용한다. post와 동일한 메커니즘을 갖는다.


axios.put()

```js
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const params = JSON.stringify(this.form);
      const res = await axios.put("http://localhost:8080/users", params, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      alert(JSON.stringify(res.data));
    }
  }
```

spring boot put()

```java
  @PutMapping(value = "/{id}")
  public User update(@PathVariable Long id, @RequestParam String name) {
    User user = new User();
    user.setUserName(name);
    return userService.updateUserInfo(user);
  }
```



### 삭제하기
서버의 정보를 삭제할 때에는 put method를 사용한다. post와 동일한 메커니즘을 갖는다.


axios.delete()

```js
    deleteUser: async function() {
      const confirmed = confirm(this.user.userId + " 삭제하겠습니까?");
      if (confirmed) {
        const params = { data: { userId: this.user.userId } };
        const res = await axios.delete("http://localhost:8080/users", params, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        alert(JSON.stringify(res));
      }
    }
```

spring boot delete()

```java
  @DeleteMapping
  public int delete(@RequestBody User user) {
    return userService.deleteById(user.getUserId());
  }
```
