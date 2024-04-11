# SonarQube
* 코드 품질 검사 도구
* Continuous code quality
* https://www.sonarqube.org/

## Features
* Code smells
* Bugs
* Vulnerabilities

## SonarQube
* free
  * JavaScript/TypeScript
  * Java
  * Python
  * PHP
  * C#
  * Web
  * XML
* Cost (Community Alternative)
  * COBOL, C/C++, PL/SQL, PL/I, ABAP, VB.NET, VB6, RPG, Flex, Objective-C, Swift

## SonarQube Scanner
* Download http://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner
* add sonar-scanner/bin directory to $PATH
* check `sonar-scanner` cmd
* npm
```
npm i -g sonar-scanner
```

## Generate User Token
* http://localhost:9000/account/security/
* use it in `sonar.login`
* https://docs.sonarqube.org/latest/user-guide/user-token/

## JavaScript/TypeScript
* SonarJS plugin (default installed)
* In project root directory, `sonar-project.properties`

```
# must be unique in a given SonarQube instance
sonar.projectKey=my:project
# this is the name and version displayed in the SonarQube UI. Was mandatory prior to SonarQube 6.1.
sonar.projectName=My project
sonar.projectVersion=1.0

# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
# Since SonarQube 4.2, this property is optional if sonar.modules is set.
# If not set, SonarQube starts looking for source code from the directory containing
# the sonar-project.properties file.
sonar.sources=.
sonar.login=${SONAR_TOKEN}

# Encoding of the source code. Default is default system encoding
# sonar.sourceEncoding=UTF-8
# jest --coverage report
# sonar.javascript.lcov.reportPaths=./coverage/lcov.info
```
* run `sonar-scanner` in project root

## Java
* In project root directory, `sonar-project.properties`
* or maven pom.xml

```
sonar.projectKey=swlabs:helper
sonar.projectName=helper
sonar.projectVersion=1.0
sonar.language=java
sonar.sources=src/main/java/
sonar.java.binaries=target/classes
sonar.sourceEncoding=UTF-8
sonar.login=${SONAR_TOKEN}
```

## Python
* In project root directory, `sonar-project.properties`

```
sonar.projectKey=swlabs:django
sonar.projectName=django
sonar.sources=.
sonar.language=py
sonar.login=${SONAR_TOKEN}
```

## CPP
* Community Plugin sonar-cxx-plugin
* https://github.com/SonarOpenCommunity/sonar-cxx

```
# must be unique in a given instance
sonar.projectKey=cubrid:cubrid

# defaults to project key
#sonar.projectName=My project
# defaults to 'not provided'
#sonar.projectVersion=1.0

# Path is relative to the sonar-project.properties file. Defaults to .
#sonar.sources=.

# Encoding of the source code. Default is default system encoding
#sonar.sourceEncoding=UTF-8

# mandatory: files to be handled by the _cxx plugin_
sonar.cxx.file.suffixes=.h,.hpp,.c,.cpp
sonar.login=${SONAR_TOKEN}
sonar.exclusions=src/jsp/**,contrib/**
```

## android sonar
* `app/build.gradle`

```
apply plugin: "sonar-runner"
sonarRunner {
    sonarProperties {
        property "sonar.host.url", "http://localhost:9000/"
//        property "sonar.jdbc.url", "jdbc:mysql://DB의 url 및 ip:3306/sonar?useUnicode=true&characterEncoding=utf8"
//        property "sonar.jdbc.username", "sonar"
//        property "sonar.jdbc.password", "sonar"
//        property "sonar.login", "admin"
//        property "sonar.password", "admin"
        property "sonar.projectKey", "Sonar:Test"
        property "sonar.projectName", "프로젝트명"
        property "sonar.projectVersion", "1.0"
        property "sonar.sourceEncoding", "UTF-8"
        property "sonar.language", "java"
        property "sonar.sources", "src/main/java"
        property "sonar.profile", "Sonar way"
    }
}
```
* `./gradlew sonarRunner`
* `open http://localhost:9000`

## ref
* http://galmaegi74.tistory.com/9
* https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/test-coverage/overview/
