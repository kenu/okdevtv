# Spring Native
- spring-boot 2.4.3+
- GraalVM

## Prerequisites
- https://www.graalvm.org/reference-manual/native-image/#prerequisites

```
sudo dnf install gcc glibc-devel zlib-devel
```

- https://sdkman.io/install

```
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk version
```

## Install GraalVM
```
sdk install java 21.0.0.2.r8-grl
java -version
gu install native-image
```

## Sample Project Setup
```
git clone https://github.com/kenu/gs-rest-service
cd gs-rest-service/complete
./mvnw -Pnative-image package
```

## run
```
target/com.example.restservice.restserviceapplication
```

## ref
- https://docs.spring.io/spring-native/docs/current/reference/htmlsingle/
- https://github.com/spring-projects-experimental/spring-native
- https://www.graalvm.org/reference-manual/native-image/
