# Jenkins
* Kohsuke Kawaguchi
* https://jenkins.io
* 2005 Hudson → 2011 Jenkins
* Continous Integration Tool

## Requirements
* java 8+

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
wget https://get.jenkins.io/war-stable/2.263.3/jenkins.war
java -jar jenkins.war --httpPort=9090
```

## Headless java

* EC2 java case

```
Caused: hudson.util.AWTProblem
    at hudson.WebAppMain.contextInitialized(WebAppMain.java:218)
    at org.eclipse.jetty.server.handler.ContextHandler.callContextInitialized(ContextHandler.java:1067)
```

```
sudo yum install fontconfig
fc-cache --force
```

## Configure admin
* copy code and paste it

## related
* [jenkins-docker](/mib/jenkins/docker)

## ref
* http://okjsp.tistory.com/tag/hudson
