# Document

Vulhub是一个面向大众的开源漏洞靶场，无需docker知识，简单执行两条命令即可编译、运行一个完整的漏洞靶场镜像。旨在让漏洞复现变得更加简单，让安全研究者更加专注于漏洞原理本身。

安装`docker`和`docker-compose`后即可开始使用vulhub：

```
# If you don't have a docker installed, you'll need to install docker
curl -s https://get.docker.com/ | sh

# Use pip to install docker-compose
pip install docker-compose

# Entry vulnerability directory
cd /path/to/vuln/

# Compile (optional)
docker-compose build

# Run
docker-compose up -d
```

更多安装说明与使用方法请阅读详细文档。

Vulhub使用的完整演示，从纯净版Ubuntu Linux到安装docker、pip、docker-compose，到启动漏洞环境到最后漏洞的复现：

[![asciicast](https://asciinema.org/a/ixkEitnLpLhg3QtOfPlnHn940.png)](https://asciinema.org/a/ixkEitnLpLhg3QtOfPlnHn940?rows=40)
