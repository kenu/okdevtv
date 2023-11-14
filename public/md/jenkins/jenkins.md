# Jenkins
* Kohsuke Kawaguchi
* https://jenkins.io
* 2005 Hudson → 2011 Jenkins
* Continous Integration Tool
* 영상: https://www.youtube.com/watch?v=CSlCkCHHLCo

## Requirements
* java 11+

## Install and Run
* mac
```
brew install jenkins
jenkins
```

* others
  * download `jenkins.war`
  * run

```
wget https://ftp.yz.yamagata-u.ac.jp/pub/misc/jenkins/war-stable/2.414.3/jenkins.war
java -jar jenkins.war --httpPort=9090
```
* token for first login
  * `cat ~/.jenkins/secrets/initialAdminPassword`


## Headless java

* EC2 java case

```
Caused: hudson.util.AWTProblem
    at hudson.WebAppMain.contextInitialized(WebAppMain.java:218)
    at org.eclipse.jetty.server.handler.ContextHandler.callContextInitialized(ContextHandler.java:1067)
```

* headless
  * https://unix.stackexchange.com/a/729802

```
sudo yum install fontconfig
fc-cache --force
```

## Configure admin
* copy code and paste it

## related
* [jenkins-docker](/mib/jenkins/docker)
* [jenkins-sonarqube](/mib/jenkins/sonarqube)
* [jenkins-spotbugs](/mib/jenkins/spotbugs)

## ref
* http://okjsp.tistory.com/tag/hudson
