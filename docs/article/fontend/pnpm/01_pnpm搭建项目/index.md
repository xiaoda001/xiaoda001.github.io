---
tags:
  - 前端
  - pnpm
categories:
  - pnpm
---

# pnpm 搭建项目

pnpm 是一个包管理器，它可以帮助我们快速搭建项目，并且可以帮助我们管理项目的依赖。

- 安装 pnpm

```bash
npm install -g pnpm
```

- 创建目录

```bash
mkdir project_demo
```

- 初始化项目

```bash
pnpm init
```

- 根目录创建 `.npmrc` 文件

```bash
# 允许将所有依赖项提升到项目的根目录，这样可以减少依赖嵌套的深度，使得依赖管理更加高效。这种做法有时被认为是“不知羞耻”的，因为它可能导致依赖冲突和难以维护的依赖树。
shamefully-hoist=true
# 宽松地处理对等依赖关系。这意味着如果项目依赖于另一个软件包，而该软件包指定了特定版本的对等依赖，使用false设置时，即使项目中不存在这些对等依赖的指定版本，安装过程也不会失败。
strict-peer-dependencies=false
# 忽略工作区根目录检查。通常，包管理器会检查当前目录是否为工作区的根目录，如果不是，它可能会发出警告或采取不同的行为。设置为true可以禁用这种检查，使得依赖安装可以在任何目录进行。
ignore-workspace-root-check=true
```

- 根目录创建 `pnpm-workspace.yaml` 文件

```yaml
packages:
  - "packages/*"
```
