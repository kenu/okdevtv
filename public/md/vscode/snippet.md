# VSCode Snippet
* 자주 쓰는 코드 조각

## 등록
* `Preferences: Configure User Snippets`
* `New Global Snippets file...`
* Snippet File 이름 입력
* 템플릿 샘플 복사

```
  "Print to console": {
    "scope": "javascript,typescript",
    "prefix": "log",
    "body": [
      "console.log('$1');",
      "$2"
    ],
    "description": "Log output to console"
  }
```

* 주석 번역
```
여기에 전역 스니펫을 배치합니다. 각 스니펫은 스니펫 이름으로 정의되며 
scope(범위), prefix(접두사), body(본문) 및 description(설명)이 필요합니다.
scope 필드에서 스니펫을 적용할 수 있는 언어의 쉼표로 구분된 ID를 추가합니다.
scope를 비워두거나 생략하면 스니펫이 모든 언어에 적용됩니다.
prefix는 스니펫을 트리거하는데 사용되며 본문이 확장되고 삽입됩니다.
가능한 변수는 다음과 같습니다.
$1, $2 탭 정지, $0 최종 커서 위치, ${1:label}, ${2:another} 자리 표시자.
동일한 ID를 가진 자리 표시자가 연결됩니다.
```
