---
tags:
  - frp
  - 内网穿透
categories:
  - frp
---

# 使用 frp 实现内网穿透

> [官方文档](https://gofrp.org/zh-cn/)

## 下载安装包

- 在此[下载地址](https://github.com/fatedier/frp/releases)
- 下载 `linux_amd64` 和 `windows_amd64`

> 这里使用 linux 服务器和 windows 客户端

## 服务器安装 frp

- 服务器 cd 到自定义目录，这里使用: `cd /frps`
- 将下载好的 tar`linux_amd64` 包上传到服务器自定义目录下, 并解压。

- 修改`frps.toml`配置

```toml
# frp 服务端的配置
bindAddr = "0.0.0.0"
bindPort = 7100
# 客户端链接的 kcp 端口
kcpBindPort = 7100

# frp 服务端可视化配置
# 可以访问的ip
webServer.addr = "0.0.0.0"
# 端口
webServer.port = 7500
webServer.user = "username"
webServer.password = "password"

# 日志配置
log.to = "/log/frps.log"
log.level = "info"
log.maxDays = 7

# 认证配置，客户端链接的认证
auth.method = "token"
# 自定义token值
auth.token = "testtoken"

allowPorts = [
  { start = 6000, end = 7000 }
]
```

- 自定义 service 服务

- `cd /etc/systemd/system`
- 创建`frps.service`文件: `vim frps.service`
- 输入以下内容

```service
[Unit]
Description = frp server
After = network.target syslog.target
Wants = network.target


[Service]
Type=simple
# 启动程序与配置文件的位置
ExecStart = /frps/frp_0.61.0_linux_amd64/frps -c /frps/frp_0.61.0_linux_amd64/frps.toml

ExecStop = /bin/kill $MAINPID
Restart = alawys
RestartSec = S

[Install]
WantedBy = multi-user.target
```

- 刷新 system 的配置文件: `systemctl daemon-reload`
- 启动 frp 服务: `systemctl start frps`
- 查看 frp 服务状态: `systemctl status frps`

服务端启动成功后，可以在浏览器上输入`服务端公网ip:7500`, 可以看到 frp 服务端可视化界面

## 客户端启动 frp

- 解压下载的`windows_amd`的包
- 修改`frpc.toml`配置

```toml
serverAddr = "自己服务器的公网IP"
serverPort = 7100
loginFailExit = true

log.to = "./frpc.log"
log.level = "info"
log.maxDays = 7

auth.method = "token"
auth.token = "testtoken"

[[proxies]]
name = "applet-server"
type = "tcp"
localIP = "127.0.0.1"
# 本地项目的端口
localPort = 8001
# 服务端需要监听的端口，服务端这个端口的流量都会转发到客户端上
remotePort = 6100

```

- 在终端上打开解压出来的文件夹，并启动 `frp`客户端

```shell
frpc.exe -c./frpc.toml
```

启动成功后，终端会卡住不动，这是服务在运行中，可以在服务端可视化界面上看链接的客户端。
