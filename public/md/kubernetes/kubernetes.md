# Kubernetes
- Container orchestration platform for automating deployment, scaling, and management of containerized applications
- Originally developed by Google, now maintained by the Cloud Native Computing Foundation (CNCF)
- Current version: 1.29 (as of 2024)
- Key capabilities:
  - Deploy containerized applications on a cluster
  - Automatic scaling based on demand
  - Self-healing: auto-placement, auto-restart, auto-replication
  - Service discovery and load balancing
  - Automated rollouts and rollbacks
  - Secret and configuration management
  - Storage orchestration
  - Batch execution

## Architecture

### Components
- **Control Plane Components**:
  - kube-apiserver: Front-end for the Kubernetes control plane
  - etcd: Consistent and highly-available key-value store for all cluster data
  - kube-scheduler: Watches newly created pods and assigns nodes to run on
  - kube-controller-manager: Runs controller processes
  - cloud-controller-manager: Links cluster to cloud provider's API

- **Node Components**:
  - kubelet: Agent that runs on each node in the cluster
  - kube-proxy: Network proxy on each node
  - Container runtime: Software responsible for running containers (containerd, CRI-O)

### Core Concepts
- **Pods**: Smallest deployable units in Kubernetes
- **Services**: Abstract way to expose applications running on pods
- **Volumes**: Directory accessible to containers in a pod
- **Namespaces**: Virtual clusters within a physical cluster
- **ConfigMaps/Secrets**: Separate configuration from application code

## Getting Started

### Local Development with Minikube
- `minikube version` - Check minikube version
- `minikube start --driver=docker` - Start a cluster using Docker driver
- `kubectl version --output=yaml` - Check kubectl version
- `kubectl cluster-info` - Display cluster info
- `kubectl get nodes` - List all nodes in the cluster

### Basic Deployment
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
        ports:
        - containerPort: 80
```

```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl get pods
```

### Exposing Applications
```yaml
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

```bash
kubectl apply -f service.yaml
kubectl get services
```

### Essential kubectl Commands
- `kubectl get` - List resources
- `kubectl describe` - Show detailed information about resources
- `kubectl logs` - Print logs from a container
- `kubectl exec` - Execute commands in a container
- `kubectl port-forward` - Forward local port to a pod
- `kubectl apply` - Apply configuration from files
- `kubectl delete` - Delete resources
- `kubectl scale` - Scale resources

## Installation Options

### Local Development
- **Minikube**: Single-node Kubernetes cluster for local development
  ```bash
  # MacOS
  brew install minikube
  # Start with preferred driver (docker/virtualbox/hyperkit)
  minikube start --driver=docker
  ```

- **Kind (Kubernetes IN Docker)**: Run Kubernetes clusters using Docker containers as nodes
  ```bash
  brew install kind
  kind create cluster
  ```

- **K3d**: Lightweight wrapper to run k3s in Docker
  ```bash
  brew install k3d
  k3d cluster create
  ```

### Managed Kubernetes Services
- **Amazon EKS**: Amazon Elastic Kubernetes Service
- **Google GKE**: Google Kubernetes Engine
- **Azure AKS**: Azure Kubernetes Service
- **DigitalOcean DOKS**: DigitalOcean Kubernetes
- **IBM Cloud Kubernetes Service**
- **Oracle Container Engine for Kubernetes**

### Other Installation Methods
- **kubeadm**: Tool for creating Kubernetes clusters
- **kubespray**: Kubernetes deployment using Ansible
- **kops**: Production-grade Kubernetes cluster deployment on AWS
- **k3s**: Lightweight Kubernetes for edge, IoT, and resource-constrained environments

For all platforms: https://kubernetes.io/docs/tasks/tools/

## Advanced Topics

### Kubernetes Operators
- Extensions of the Kubernetes API that enable complex applications
- Custom Resource Definitions (CRDs) + custom controllers
- Popular operators: Prometheus, Elasticsearch, PostgreSQL, Redis

### Service Mesh
- **Istio**: Advanced traffic management, security, and observability
- **Linkerd**: Ultralight, security-first service mesh
- **Kuma/Kong Mesh**: Universal control plane for service mesh

### Package Management
- **Helm**: Package manager for Kubernetes (Charts)
- **Kustomize**: Customization of Kubernetes YAML configurations

### GitOps
- **ArgoCD**: Declarative, GitOps continuous delivery for Kubernetes
- **Flux**: GitOps operator for Kubernetes

### Observability
- **Prometheus**: Monitoring and alerting
- **Grafana**: Visualization and dashboards
- **Jaeger/OpenTelemetry**: Distributed tracing
- **ELK/OpenSearch**: Logging solutions

## Resources and References
- [Official Kubernetes Documentation](https://kubernetes.io/docs/)
- [Kubernetes Learning Path](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- [CNCF Landscape](https://landscape.cncf.io/)
- [Kubernetes Patterns](https://k8spatterns.io/)
- [Kubernetes Best Practices](https://kubernetes.io/docs/concepts/configuration/overview/)
- [Spring Boot on Kubernetes](https://spring.io/guides/gs/spring-boot-kubernetes)
- [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)
- [Certified Kubernetes Administrator (CKA)](https://www.cncf.io/certification/cka/)
- [Kubernetes Community](https://kubernetes.io/community/)
