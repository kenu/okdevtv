# Java

* 1995 James Gosling
* 1996 Sun Microsystems > Oracle Corporation(2010)

## JDK, JRE
* Java Development Kit
* Java Runtime Environment
* JDK = JRE + javac

## Version LTS

| Release Family | End Of Support Life (EOSL)|
|---|---|
| 18 | September 2022(1)|
| 17 LTS | September 2029|
| 16 | September 2021|
| 15 | March 2021|
| 14 | September 2020|
| 13 | March 2020|
| 11 LTS | September 2026|
| 10 | September 2018|
| 9 | March 2018|
| 8 LTS | **December 2030** |
| 7 LTS | July 2022|
| 6 LTS | December 2018|
| 5 LTS | July 2015|
| 4 LTS | March 2013|
| 3 LTS | April 2011|
| 2 LTS | December 2003|
| 1 LTS | October 2002|

* from: https://java.com/releases/

## Install
* [sdkman](/mib/sdkman) recommended
* https://github.com/ojdkbuild/ojdkbuild
* CentOS

```
yum list | grep jdk
sudo yum remove java-1.7.0-openjdk.x86_64 -y
sudo yum install java-1.8.0-openjdk-devel.x86_64 -y
```

* Ubuntu openjdk

```
sudo add-apt-repository ppa:openjdk-r/ppa

sudo apt-get update
sudo apt-get install openjdk-8-jdk -y
```

* Ubuntu oracle-jdk

```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
sudo apt-get install oracle-java8-set-default
```

* mac

```
export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
```

* 자바의신 1권 36p


## 기본 용어
* 패키지(package)
* 클래스(class)
* 메소드(method)
* 명령문(statement)

* 자바의신 1권 20p
* 들여쓰기(indent)
* 예약어(reserved word)

## Other topic
* [inheritance](/mib/java/inheritance)
* [interface](/mib/java/interface)
* [generic](/mib/java/generic)
* [autoboxing](/mib/java/autoboxing)
* [annotation](/mib/java/annotation)
* [lambda](/mib/java/lambda)
* [future](/mib/java/future)
* [jdbc](/mib/java/jdbc)
* [junit](/mib/java/junit)
* [tomcat](/mib/java/tomcat)
* [war](/mib/java/war)
* [deploy](/mib/java/deploy)
* [maven](/mib/java/maven)
* [gradle](/mib/java/gradle)
* [ant](/mib/java/ant)
* [lombok](/mib/java/lombok)
* [httpclient](/mib/java/httpclient)
* [excel](/mib/java/excel)

## related
- [servlet](/mib/java/servlet)
- [jsp](/mib/java/jsp)

## 실행 경로
```java
public class CheckDirectory {
    public static void main(String args[]) {
        Path currentPath = Paths.get("");
        String path = currentPath.toAbsolutePath().toString();
        System.out.println("현재 작업 경로: " + path);
    }
}
```
* from: https://7942yongdae.tistory.com/121

## 참고
* 2시간만에 자바 시작
  * http://www.slideshare.net/kenu/java-in-2-hours
  * http://bit.ly/okjava2020
* 2시간만에 자바를 쉽게 배우고 싶어요.
  * http://www.slideshare.net/kenu/java-start01-in-2hours
* kenu's java
  * http://j.mp/okdevtv-java
