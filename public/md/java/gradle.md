# Gradle
* https://gradle.org
* build tool

## install
* [sdkman](/mib/sdkman)
```
sdk install gradle
```

* mac
```
brew install gradle
```

## run
```
gradle build
gradle build -x test
gradle bootRun
```


## Simple Start
```
mkdir basic-demo
cd basic-demo
touch build.gradle
```

## gradle tasks
```
gradle tasks --all
```

```
gradle tasks
Starting a Gradle Daemon (subsequent builds will be faster)

> Task :tasks

------------------------------------------------------------
All tasks runnable from root project
------------------------------------------------------------

Build Setup tasks
-----------------
init - Initializes a new Gradle build.
wrapper - Generates Gradle wrapper files.

Help tasks
----------
buildEnvironment - Displays all buildscript dependencies declared in root project 'bin'.
components - Displays the components produced by root project 'bin'. [incubating]
dependencies - Displays all dependencies declared in root project 'bin'.
dependencyInsight - Displays the insight into a specific dependency in root project 'bin'.
dependentComponents - Displays the dependent components of components in root project 'bin'. [incubating]
help - Displays a help message.
model - Displays the configuration model of root project 'bin'. [incubating]
projects - Displays the sub-projects of root project 'bin'.
properties - Displays the properties of root project 'bin'.
tasks - Displays the tasks runnable from root project 'bin'.

To see all tasks and more detail, run gradle tasks --all

To see more detail about a task, run gradle help --task <task>


BUILD SUCCESSFUL in 4s
1 actionable task: 1 executed
```

## Dependency scope
* `implementation` : compile
* `testImplementation` : test
* `compileOnly` : provided

## Simple task
* build.gradle

```
task copy(type: Copy) {
  from 'src'
  into 'dest'
}
```

* check tasks

```
./gradlew tasks --all
```

* run task

```
./gradlew copy
gradle copy
```

## gradle daemon
* `ps -ef | grep gradle`
* `gradle --stop`


## Plugin
* build.gradle

```
plugins {
  id 'base'
}

task copy...

task zip(type: Zip) {
  from 'src'
}
```

* check tasks

```
./gradlew tasks --all
```

## gradle wrapper
* for those who don't have installed gradle

```
gradle wrapper
```

* output

```
.
├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
└── gradlew.bat
```

## custom repository
```
repositories {
  maven {
    url 'http://repo.mycompany.com/maven2'
  }
}
```

## Parameter
* `./gradlew bootRun --args ' --server.port=9090'`

## ref
* https://guides.gradle.org/creating-new-gradle-builds/
