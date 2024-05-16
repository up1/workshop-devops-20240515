# Workshop
* API :: NodeJS
* Database :: MySQL

## Step to run
```
$docker compose build
$docker compose up -d

NAME                   IMAGE            COMMAND                  SERVICE   CREATED              STATUS                        PORTS
demo-api-mysql-api-1   demo-api:1.0     "docker-entrypoint.s…"   api       19 seconds ago       Up 8 seconds (healthy)        0.0.0.0:3000->3000/tcp
demo-api-mysql-db-1    demo-mysql:1.0   "docker-entrypoint.s…"   db        About a minute ago   Up About a minute (healthy)   0.0.0.0:3306->3306/tcp, 33060/tcp
```