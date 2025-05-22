# haproxy
- high available proxy
- load balancer

## Structure

```sh
global
  # process-level settings go here

defaults
  # default settings go here

frontend listener
  # a frontend that accepts requests from clients

backend webservers
  # servers that fulfill the requests
```

## Install

```bash
sudo dnf install haproxy
```

## Config
- /etc/haproxy/haproxy.cfg

```
global
    maxconn 256
    log 127.0.0.1 local0
    user haproxy
    group haproxy
    daemon
    # Minimize memory usage for small server
    tune.bufsize 16384
    tune.maxrewrite 1024

defaults
    log     global
    mode    http
    option  httplog
    option  dontlognull
    timeout connect 5000
    timeout client  50000
    timeout server  50000
    # Enable compression to save bandwidth
    compression algo gzip
    compression type text/html text/plain text/css application/javascript

frontend http_front
    bind *:80
    
    # Domain-based routing
    acl host_express hdr(host) -i ex.okdevtv.com
    acl host_python hdr(host) -i py.okdevtv.com
    
    use_backend express_backend if host_express
    use_backend python_backend if host_python
    
    default_backend express_backend

backend express_backend
    balance roundrobin
    option httpchk GET /health
    server express-server 127.0.0.1:3000 check

backend python_backend
    balance roundrobin
    server python-server 127.0.0.1:5000 check
```

## ref
- https://www.haproxy.org/
- https://www.haproxy.com/documentation/haproxy-configuration-tutorials/
