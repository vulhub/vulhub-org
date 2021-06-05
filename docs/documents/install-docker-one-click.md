# 一键安装Docker

这是推荐方式。在未安装过Docker的机器上，root权限执行如下命令即可一键安装最新版Docker：

```
curl -s https://get.docker.com/ | sh 
```

如果你已经安装过老版本Docker（且不是用这个一键安装脚本安装的），请先卸载Docker（例如`sudo apt purge --autoremove docker.io`）。

如果你不想使用这种方式安装Docker，也可以使用系统自带的包管理工具来安装，比如在Ubuntu下：

```
sudo apt install docker.io
```

但包管理工具安装的Docker版本一般较老，有可能在使用Vulhub的时候会出现BUG（基本上下不会，但也不排除有的Docker版本过老的）。

**注意**，docker是一个系统服务，所以，安装完成后可能需要手工启动服务：`service start docker`，否则会出现连接失败的情况。同样，如果docker没有自启动，你也需要手工启动docker服务。如果你是使用一键安装工具安装的docker，则docker会自动启动。
