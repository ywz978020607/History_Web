# 摸鱼大鸽-物理网项目docker运行--只需将代码拷贝进来再运行即可

# 使用方式
```
#将自己的django文件夹替换到django1内
#修改dev_start.sh #如果需要mqtt 请启动相应的注释
cd docker
#修改docker-compose.yml #ports
. env.sh
build
start
```

# docker-compose配置
## 1.无nginx
默认不启用nginx。注意其中web的ports为宿主机端口:内部端口，真正对外暴露的是宿主机端口

## 2.启动nginx
需要对docker-compose.yml中取消nginx相关注释部分，并注释web的ports部分  
再到nginx/django.conf中查看或修改端口定义以符合自己要求  
目前是nginx(80)->django(容器依赖内部的8000端口，不开放到宿主机)

# Windows版本
docker的一个好处是在win10/win11系统下，可以通过wsl2+docker应用程序，实现可视化管理&兼容win入口启动方式实现开发测试环境通用化。  
其中部分命令需要注意写成兼容格式，尽量减少宿主机中调用shell脚本，修改后同样使用于Linux类系统，包括不限于：
- Dockerfile中运行`RUN sh /tmp/build.sh`会报错不存在，改为显示将requirments.txt在Dockerfile中写，不过这样会增加docker层数
- docker-compose.yml中启动时command命令避免使用sh，改用显示执行命令
## win使用方法
```
docker-compose build
docker-compose up (-d)
```