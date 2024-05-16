# Workshop
* API :: NodeJS
* Database :: MySQL

## Run with docker compose
```
$docker compose build
$docker compose up -d

NAME                   IMAGE            COMMAND                  SERVICE   CREATED              STATUS                        PORTS
demo-api-mysql-api-1   demo-api:1.0     "docker-entrypoint.s…"   api       19 seconds ago       Up 8 seconds (healthy)        0.0.0.0:3000->3000/tcp
demo-api-mysql-db-1    demo-mysql:1.0   "docker-entrypoint.s…"   db        About a minute ago   Up About a minute (healthy)   0.0.0.0:3306->3306/tcp, 33060/tcp

$docker compose down
```

## Run with Kubernetes

### Enable minikube
```
$minikube start
$minikube status
$minikube addons enable ingress

$kubectl get node
NAME       STATUS   ROLES           AGE   VERSION
minikube   Ready    control-plane   94m   v1.27.4
```

### Deployment
```
$kubectl apply -f k8s/
$kubectl get pod
$kubectl get deployment
$kubectl get service

$kubectl get ingress
NAME          CLASS   HOSTS   ADDRESS        PORTS   AGE
api-ingress   nginx   *       192.168.49.2   80      6m17s
```

### Access to api in minikube
```
$minikube ssh
$curl http://192.168.49.2/v1
```

### Access from host to minikube
```
minikube tunnel
```

Open url=http://localhost/v1 in web browser


### Remove all resources
```
$kubectl delete -f k8s 
```