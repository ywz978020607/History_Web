# 摸鱼大鸽-物理网项目docker运行--只需将代码拷贝进来再运行即可

# 推荐使用方式
```
#将自己的django文件夹替换到django1内
#修改dev_start.sh #如果需要mqtt 请启动相应的注释 -- dev_start.sh
cd docker
docker-compose up -d
```

# 若只运行后端并开放外部直接访问
注释docker-compose中nginx相关的部分，将expose改为ports形式，外部走特定端口直接访问，不走nginx<+/upload_api/>统一跳转方式

# 运行方式
## 1.无docker
```
cd django1
python manage.py runserver 0.0.0.0:8000
```

## 2.docker部署版本
将hbuilderx导出的h5更新到本目录下
```
cd docker
docker-compose up -d
```


# dev_start.sh
```
#!/bin/bash

#mqtt
# python django1/mqtt.py  > docker/log/mqtt.log 2>&1 &

#django
# python django1/manage.py runserver 0.0.0.0:9000 > docker/log/django.log 2>&1

# uwsgi --ini django1/uwsgi.ini && tail -f /dev/null #暂驻
```