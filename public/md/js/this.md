# JavaScript `this`
* 대부분의 경우 `this`의 값은 함수를 호출한 방법에 의해 결정
* ES5는 함수를 어떻게 호출했는지 상관하지 않고 this 값을 설정할 수 있는 `bind` 메서드를 도입
* ES6는 스스로의 `this` 바인딩을 제공하지 않는 `화살표 함수를 추가`했습니다(이는 렉시컬 컨텍스트 안의 `this`값을 유지합니다).

## global context
* 엄격 모드 여부에 관계 없이 전역 객체를 참조

## function context
* 함수 내부에서 `this`의 값은 함수를 호출한 방법에 의해 좌우

###
* 엄격 모드가 아니면 `this`의 값이 호출에 의해 설정되지 않으므로, 기본값으로 브라우저에서는 `window`인 전역 객체를 참조
* 엄격 모드에서 `this` 값은 실행 문맥에 진입하며 설정되는 값을 유지
* ECMAScript 5는 `Function.prototype.bind`를 도입. `f.bind(someObject)`를 호출하면 `f`와 같은 본문(코드)과 범위를 가졌지만 this는 원본 함수를 가진 새로운 함수를 생성
* 화살표 함수에서 `this`는 자신을 감싼 정적 범위`lexical context`입니다.
  * 화살표 함수를 `call()`, `bind()`, `apply()`를 사용해 호출할 때 `this`의 값을 정해주더라도 무시
* 함수를 어떤 객체의 메서드로 호출하면 `this`의 값은 그 객체를 사용
* 함수를 `new` 키워드와 함께 생성자로 사용하면 `this`는 새로 생긴 객체에 묶임
* 함수를 이벤트 처리기로 사용하면 `this`는 이벤트를 발사한 요소로 설정
* 코드를 인라인 이벤트 처리기로 사용하면 `this`는 처리기를 배치한 DOM 요소로 설정

## ref
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this
