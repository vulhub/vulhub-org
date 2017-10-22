# Docker加速器

由于Vulhub所有的资源均来自于Dockerhub/Github/软件官网，而上述站点服务器在国内访问可能存在速度慢、丢包率高等问题，导致我们在启动Vulhub漏洞环境的时候太卡，影响正常体验。

所以，我们首先推荐使用国外VPS进行漏洞环境的搭建，在这种情况下，平均启动一个环境只需要30秒。

如果实在没有条件购买国外VPS，也可以[Docker加速器](https://www.daocloud.io/mirror)对Dockerhub进行加速（当然只能加速Dockerhub）。

