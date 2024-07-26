# AI Digest
- https://www.npmjs.com/package/ai-digest
- Claude Projects나 사용자 정의 ChatGPT와 함께 사용할 수 있도록 코드베이스를 단일 Markdown 파일로 집계하는 CLI 도구입니다.
- 특징
  - 지정된 디렉토리 및 하위 디렉토리의 모든 파일을 집계합니다.
  - 일반적인 빌드 아티팩트 및 구성 파일을 무시합니다.
  - 전체 코드베이스를 포함하는 단일 Markdown 파일을 출력합니다.
  - 공백 제거 및 사용자 정의 무시 패턴에 대한 옵션을 제공합니다.

## 사용법
```
npx ai-digest
```
This will generate a `codebase.md` file with your codebase.

### [ChatGPT]( https://chat.openai.com ):
- Create a Custom GPT
- Upload the generated Markdown file to the GPT's knowledge base
### [Claude]( https://www.claude.ai/ ):
- Create a new Project
- Add the Markdown file to the Project's knowledge

## Example

1. Basic usage:
    ```shell
    npx ai-digest
    ```

2. Specify input and output:
    ```shell
    npx ai-digest -i /path/to/your/project -o project_summary.md
    ```

3. Enable whitespace removal:
    ```shell
    npx ai-digest --whitespace-removal
    ```

4. Show list of included files:
    ```shell
    npx ai-digest --show-output-files
    ```

5. Combine multiple options:
    ```shell
    npx ai-digest -i /path/to/your/project -o project_summary.md --whitespace-removal
    ```
