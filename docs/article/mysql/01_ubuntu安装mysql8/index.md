---
tags:
  - mysql
  - ubuntu
categories:
  - mysql
---

# ubuntu 安装 mysql8

## 步骤

- 更新 apt 源
  `sudo apt update`

- 查看可使用的 mysql 安装包
  `sudo apt search mysql-server`

- 安装

```shell
# 安装最新版本
sudo apt install -y mysql-server
# 安装指定版本
sudo apt install -y mysql-server-8.0
```

- 查看 mysql 是否已启动
  `systemctl status mysql`

- 如果没有启动，启动 mysql
  `systemctl start mysql`

- 修改密码、权限

```sql

# 登录mysql，在默认安装时如果没有让我们设置密码，则直接回车就能登录成功。
mysql -u root -p

# 设置密码 mysql8.0
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';

# 刷新缓存
flush privileges;

# 退出
exit;
```

到这里`mysql`就安装完成了。退出`mysql`后，再次进入就需要输入密码，这里需要注意密码的保存。如果需要远程连接 `mysql`，需要修改配置文件`/etc/mysql/mysql.conf.d/mysqld.cnf`，将`bind-address`的值改为`0.0.0.0`，然后重启`mysql`服务。

> 没有 bind-address , 就需要自己添加

## 参考资料

- https://blog.csdn.net/weixin_45626288/article/details/133220238
