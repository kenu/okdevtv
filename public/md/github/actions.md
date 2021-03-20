# GitHub Actions
* https://docs.github.com/en/actions
* CI/CD 기능
* Automate, customize, and execute your software development workflows **right in your repository**
* `.github/workflows/*.yml`
* <img src="https://miro.medium.com/max/1000/1*8mUtip6z_oydfLi4P86KUw.png" alt="github actions workflows" class="img">
* image from: https://itnext.io/getting-started-with-github-actions-fe94167dbc6d

## 장점
* No separate CI/CD service (Jenkins, Travis CI, etc.)
* No need to set up webhooks!

## 개념
* Workflows: 작업 뭉치
* Events: 작업 뭉치 동작하는 이벤트, `push, release, pull request`, 스케줄, 등
* Jobs: 동시 수행 가능한 작업 단위
* Runners: Job 실행되는 곳. GitHub이 제공하는 가상 머신(Linux, macOS, Windows)
* Steps: 순서대로 실행되는 쉘 커맨드 또는 action
* Actions: 재사용할 수 있는 job의 step. 공유된 action은 [GitHub Marketplace](https://github.com/marketplace?type=actions)에서 구할 수 있음.

## ref
* Getting started with GitHub Actions
  * https://itnext.io/getting-started-with-github-actions-fe94167dbc6d
* ssh-action
  * https://github.com/appleboy/ssh-action
