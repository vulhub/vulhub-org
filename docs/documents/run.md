# 启动漏洞环境

docker-compose会自动查找当前目录下的配置文件（默认文件名为`docker-compose.yml`），并根据其内容编译镜像和启动容器。所以，要运行某个漏洞靶场，需要先进入该漏洞所在的目录。

在Vulhub中选择某个环境，进入对应目录。如Flask服务端模板注入漏洞，我们进入`flask/ssti`目录：

```
cd flask/ssti
```

直接执行如下命令，进行漏洞靶场的编译和运行：

```
# 可选
docker-compose build

docker-compose up -d
```

## 为什么`docker-compose build`是可选的？

`docker-compose up -d`运行后，会自动查找当前目录下的配置文件。如果配置文件中包含的环境均已经存在，则不会再次编译；如果配置文件中包含的环境不存在，则会自动进行编译。所以，其实`docker-compose up -d`命令是包含了`docker-compose build`的。

如果更新了配置文件，你可以手工执行`docker-compose build`来重新编译靶场环境。

