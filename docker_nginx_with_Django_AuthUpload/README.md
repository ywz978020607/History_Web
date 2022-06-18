# This folder is updated separately in [this repo](https://github.com/ywz978020607/docker_nginx_with_manage)

# nginx with django to support auth, upload(drag or click) and pic_pipeline.
You can use this as a nginx docker with a small background management! (login admin as user:admin passwd:a)

# Why use this?

If you want to start a nginx with upload by login and user control, you can use this folder as docker to start by one command.

# How to use?
```
cd docker/
# only once
docker-compose build

docker-compose up -d  #you can change the .yml=> /src/files path and rerun this command
```
