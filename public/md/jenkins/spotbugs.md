# Jenkins Spotbugs plugin
* Use Maven Spotbugs plugin
* **target/sitebugsXml.xml** is generated
* Generate report with Warning plugin
* https://plugins.jenkins.io/warnings-ng

## pom.xml
* `mvn compile site`
* target/site/sitebugs.html

```xml
	<reporting>
		<outputDirectory>${basedir}/target/site</outputDirectory>
		<plugins>
			<plugin>
				<groupId>com.github.spotbugs</groupId>
				<artifactId>spotbugs-maven-plugin</artifactId>
				<version>4.8.1.0</version>
			</plugin>
		</plugins>
	</reporting>
```

## related
* [jenkins](/mib/jenkins)
* [jenkins-sonarqube](/mib/jenkins/sonarqube)

## ref
*
