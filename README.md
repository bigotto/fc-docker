# Challange Docker

## GoLang

Inside go folder, you will find a basic Go code that prints "Full Cycle Rocks!!".

### Build locally
```bash
docker build -t <image-name> go
```

### Run Image
```bash
docker run --rm --name <container-name> <image-name>
```

This image is available at DockerHub. [Link](https://hub.docker.com/repository/docker/brunobigotto/fullcycle)

---
## Nginx reverse proxy with NodeJS app

This challenge is access a NodeJS app conected with a db by Nginx.

Inside node-nginx folder run the following command:

```bash
docker compose up -d
```

After startup all containers, access http://localhost:8080