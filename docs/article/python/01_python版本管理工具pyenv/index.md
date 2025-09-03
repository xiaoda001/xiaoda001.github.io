---
tags:
  - pyenv
  - python
categories:
  - python
---

# python 版本管理工具 pyenv 安装 & 卸载

> 由于电脑系统是 windows, 这里安装的是 pyenv-win, 安装步骤参考: https://github.com/pyenv-win/pyenv-win?tab=readme-ov-file#introduction

## 安装

- 打开 powershell

```cmd
Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"
```

- 重启 powershell，查看 pyenv 版本号，确认是否安装成功

```cmd
pyenv --version
```

## 卸载

- 在系统盘(通常为：C 盘)的用户名文件夹下，找到`.pyenv`文件夹将其删除。
- 此电脑->属性->系统属性->环境变量->用户变量下的`path`中删除`.pyenv`相关注册信息。
- 重启 powershell，查看 pyenv 版本号，确认是否卸载成功。
