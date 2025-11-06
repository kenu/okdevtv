# Maven etc

## dependency:list

```bash
mvn dependency:list
```

- 선언된 의존성 목록을 scope·버전과 함께 출력
- 자주 쓰는 옵션
  - `-DincludeScope=runtime` : 특정 scope만 출력
  - `-DexcludeTransitive=true` : 전이 의존성 제외
  - `-DincludeArtifactIds=commons-csv` : 지정 아티팩트 필터링
- 플러그인 버전을 명시하려면 `mvn org.apache.maven.plugins:maven-dependency-plugin:3.7.1:list`처럼 호출 가능

## dependency:tree

```bash
mvn dependency:tree
```

- 전이 의존성을 포함한 계층 구조를 시각화
- 충돌 진단 시 `-Dverbose -Dscope=runtime` 조합이 유용
- 특정 그룹만 확인할 때는 `-Dincludes=org.apache.commons:*` 등을 사용

## dependency:analyze

```bash
mvn dependency:analyze
```

- 선언했지만 사용하지 않거나, 사용했지만 선언하지 않은 의존성을 점검
- 파이프라인 실패를 원하면 `-DfailOnWarning=true` 옵션을 더
- 멀티모듈 프로젝트에서는 루트에서 실행해 전체 모듈을 한 번에 확인

## dependency:purge-local-repository

```bash
mvn dependency:purge-local-repository
```

- 로컬 저장소의 의존성을 정리
- `-DreResolve=true` 옵션을 사용하면 의존성을 다시 해결

## dependency:resolve

```bash
mvn dependency:resolve
```

- 의존성을 해결하고 로컬 저장소에 저장

## dependency:go-offline

```bash
mvn dependency:go-offline
```

- 빌드 시 필요한 의존성을 미리 다운로드

## 요약

- 의존성 목록 확인: `dependency:list` + 필요한 scope/필터 옵션
- 구조·충돌 분석: `dependency:tree -Dverbose`
- 미사용/누락 점검: `dependency:analyze -DfailOnWarning=true`
