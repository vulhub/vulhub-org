# 配置需求

Vulhub是一个漏洞靶场，都是运行真实存在漏洞的程序。所以，漏洞程序不相同导致对环境的需求也不尽相同。

当前Vulhub的环境中，大部分环境对配置需求不高，我们建议使用1G内存的VPS进行测试。但类似`gitlab/CVE-2016-9086`，对配置要求相对较高，可能需要2G内存方可运行，这个是因为Gitlab软件本身的配置需求就比较高。

## inode不足导致的问题

另外，Vulhub测试过程中，在配置上出现较多的问题是硬盘inode不足。

先阅读[《理解inode》](http://www.ruanyifeng.com/blog/2011/12/inode.html)，了解一下inode。在时间久了以后，因为`docker-compose down`不会移除镜像，我们就可能已经下载或编译过很多漏洞镜像了。每个漏洞镜像其实相当于一个Linux系统，小文件比较多，比较占用inode。

某些VPS在分配空间的时候，分配的inode数量较少，我们可以执行`df -i`查看当前文件系统的inode：

```
# root @ docker-demo in ~ [20:26:48]
$ df -i
Filesystem      Inodes  IUsed   IFree IUse% Mounted on
udev             56787    404   56383    1% /dev
tmpfs            62210    537   61673    1% /run
/dev/vda1      1280000 136309 1143691   11% /
tmpfs            62210      2   62208    1% /dev/shm
tmpfs            62210      3   62207    1% /run/lock
tmpfs            62210     16   62194    1% /sys/fs/cgroup
tmpfs            62210      4   62206    1% /run/user/0
```

如果说你发现硬盘空间还没用完，但提示空间不足，可以查看一下当前的inode，也许是inode数量不足了。
