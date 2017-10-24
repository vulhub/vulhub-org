# 手工安装Docker

如果你使用的操作系统不支持使用一键安装脚本，也没有包管理工具，可以选择手工安装最新版Docker。

Docker分为CE版本和EE版本，其中CE版本面向开源社区，是免费软件；我们选用CE版本即可。

常见操作系统安装Docker的方法在文档中均可查阅，我就不再赘述： https://docs.docker.com/engine/installation/

**注意**，docker是一个系统服务，所以，安装完成后可能需要手工启动服务：`service start docker`，否则会出现连接失败的情况。同样，如果docker没有自启动，你也需要手工启动docker服务。