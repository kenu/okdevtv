# Java

## JDK, JRE
* Java Development Kit
* Java Runtime Environment
* JDK = JRE + javac

## Install
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
## 참고
* 2시간만에 자바 시작
  * http://www.slideshare.net/kenu/java-in-2-hours
  * http://bit.ly/okjava2020
* 2시간만에 자바를 쉽게 배우고 싶어요.
  * http://www.slideshare.net/kenu/java-start01-in-2hours
* kenu's java
  * http://j.mp/okdevtv-java
