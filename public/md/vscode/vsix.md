# VSCode vsix
* 플러그인 다운로드 후 설치
* 용량이 커서 네트워크에 따라 느릴 경우
  * 예 sonarlint 180MB, JRE 포함됨
* 마켓플레이스 https://marketplace.visualstudio.com/ 에서 검색
* 우측 `Download Extension`에서 플랫폼 선택
* `*.vsix` 파일 다운로드
* 우측 More Info섹션의 `Unique Indentifier` 확인
* `code --install-extension sonarsource.sonarlint-vscode`
* `code --list-extensions` 로 설치 확인
