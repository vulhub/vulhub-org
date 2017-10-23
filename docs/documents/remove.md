# 移除环境

Vulhub中所有环境均为漏洞靶场，在测试结束后，请及时关闭并移除环境，避免被他人恶意利用。

**虽然靶场全部运行在Docker中，但大多数恶意软件并不会因为运行在容器中就失去效果！**

前面说了，docker-compose会默认根据当前目录下的配置文件启动容器，在关闭及移除环境的时候，也需要在对应目录下。我们执行`docker-compose up -d`后，不要离开当前目录即可，漏洞测试结束后，执行如下命令移除环境：

```
docker-compose down
```

上述命令会执行如下几个动作：

- 关闭正在运行的容器
- 删除所有相关容器
- 移除NAT（docker-compose在运行的时候会创建一个NAT网段）

但不会移除编译好的漏洞镜像，下次再执行`docker-compose up -d`命令，就不需要再次编译相关镜像了。