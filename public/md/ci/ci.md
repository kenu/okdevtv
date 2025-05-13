# CI/CD
- CI (Continuous Integration): Automatically building, testing, and merging code changes
- CD (Continuous Delivery/Deployment): Automatically deploying code changes to production

## Core Concepts

### Continuous Integration
- Frequent integration of code changes into a shared repository
- Automated build and test processes
- Early detection of integration issues
- Improved code quality and developer productivity
- Best practices:
  - Maintain a single source repository
  - Automate the build process
  - Make the build self-testing
  - Commit to the mainline every day
  - Keep the build fast
  - Test in a production-like environment

### Continuous Delivery
- Extension of continuous integration
- Ensures code is always in a deployable state
- Includes automated deployment pipelines
- Manual approval for production deployment

### Continuous Deployment
- Further extension of continuous delivery
- Every change that passes all stages of the pipeline is automatically deployed to production
- No human intervention required
- Requires robust testing and monitoring

## Popular CI/CD Tools

### Self-Hosted Solutions
- Jenkins (https://jenkins.io)
  - Highly customizable with thousands of plugins
  - Pipeline as code with Jenkinsfile
  - Multi-branch pipelines
  - Blue Ocean UI
- TeamCity (https://www.jetbrains.com/teamcity/)
- Bamboo (https://www.atlassian.com/software/bamboo)
- GitLab Runner (https://docs.gitlab.com/runner/)
- Drone CI (https://www.drone.io/)

### Cloud/SaaS Solutions
- GitHub Actions (https://github.com/features/actions)
  - Native integration with GitHub repositories
  - Workflows defined in YAML
  - Marketplace with thousands of pre-built actions
- CircleCI (https://circleci.com/)
- Travis CI (https://travis-ci.com/)
- GitLab CI/CD (https://docs.gitlab.com/ee/ci/)
- AWS CodePipeline (https://aws.amazon.com/codepipeline/)
- Azure DevOps (https://azure.microsoft.com/services/devops/)
- Google Cloud Build (https://cloud.google.com/build)

## CI/CD Pipeline Components

### Source Control Integration
- Git hooks
- Webhooks
- Pull/merge request integration
- Branch protection rules

### Build Automation
- Compilation
- Dependency management
- Artifact generation
- Container image building

### Testing
- Unit tests
- Integration tests
- End-to-end tests
- Performance tests
- Security scans

### Deployment Strategies
- Blue/Green deployment
- Canary releases
- Feature flags
- Rolling updates
- A/B testing

### Infrastructure as Code
- Terraform
- AWS CloudFormation
- Pulumi
- Ansible
- Chef/Puppet

## Modern Practices

### Pipeline as Code
- Define pipelines in version control
- YAML, Groovy, or other domain-specific languages
- Configuration as code
- Reusable templates and components

### GitOps
- Git as single source of truth
- Declarative infrastructure and application configuration
- Automated convergence between desired and actual state
- Tools: Flux, ArgoCD, Jenkins X

### Security Integration (DevSecOps)
- SAST (Static Application Security Testing)
- DAST (Dynamic Application Security Testing)
- SCA (Software Composition Analysis)
- Container scanning
- Infrastructure scanning

## ref
- https://martinfowler.com/articles/continuousIntegration.html
- https://www.atlassian.com/continuous-delivery/principles
- https://github.com/features/actions
- https://about.gitlab.com/topics/ci-cd/
- https://www.redhat.com/en/topics/devops/what-is-ci-cd
- https://www.cloudbees.com/continuous-delivery/devops
