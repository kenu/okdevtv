# URI Mapping

## Request
* `@RequestMapping`
  * 메소드(클래스) 경로 매핑
* `@PathVariable`
  * URI에 포함된 데이터 전달
* `@RequestParam`
  * 쿼리스트링 파라미터를 자동 할당
* `@RequestBody`
  * 요청 바디 전체
* `@RequestHeader`
  * 헤더 정보

## 단축 어노테이션
* `@GetMapping`
* `@PostMapping`
* `@PutMapping`
* `@DeleteMapping`
* `@PatchMapping`

## Response
* `@ResponseStatus`
  * HTTP 상태코드
  * 기본값은 `200 OK`
* `@ResponseBody`
  * 메소드에 @ResponseBody를 붙이면 반환값으로 직접 응답 내용을 반환

## ref
* https://araikuma.tistory.com/14
