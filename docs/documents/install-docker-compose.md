# 安装docker-compose

Docker-compose用于组合服务与内网。有部分环境涉及到多个容器，且不同环境开启的端口、目录也不相同，所以Vulhub选择使用docker-compose做环境一键化管理工具。用户不再需要学习docker命令的各种参数与用法，只需要简单地执行`docker-compose up -d`即可启动容器。

Docker-compose基于Python开发，所以我们可以使用pip进行安装。

## 安装PIP

当然，如果你的环境中没有安装pip，还需要先安装pip。推荐使用如下命令进行安装，这种方式将会少安装很多不需要的依赖：

```
curl -s https://bootstrap.pypa.io/get-pip.py | python3
```

## 安装docker-compose

有pip后即可直接使用pip安装docker-compose：

```
pip install docker-compose
```

安装完成后，执行`docker-compose -v`，有返回则说明安装成功。
