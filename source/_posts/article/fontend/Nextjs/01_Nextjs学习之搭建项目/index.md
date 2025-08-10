---
title: Nextjs 学习之搭建项目
tags:
  - 前端
  - Nest.js
categories:
  - Nest.js
---

## 创建项目

```bash
npx create-next-app@latest
```

根据提示一步一步完成配置

```bash
# 项目名称
What is your project named? my-app
# 是否使用TypeScript?
Would you like to use TypeScript? No / Yes
# 是否使用ESLint?
Would you like to use ESLint? No / Yes
# 是否使用 Tailwind CSS?
Would you like to use Tailwind CSS? No / Yes
# 是否使用 `src/` 为根目录
Would you like to use `src/` directory? No / Yes
# 是否使用 App Router?
Would you like to use App Router? (recommended) No / Yes
# 是否使用路径别名。默认 @/* 指向 src/ 目录。
Would you like to customize the default import alias (@/*)? No / Yes
# 自定义 import 别名
What import alias would you like configured? @/*
```

完成配置后，会自动安装项目文件。

## 配置 Prettier 格式化规范

- 安装 prettier，参考[项目添加 Prettier 格式化规范](../../Prettier/项目添加Prettier格式化规范/index.md)

- 安装 prettier 与 eslint 兼容插件

```bash
npm install --save-dev eslint-config-prettier
```

- eslint 配置文件配置 prettier

```json
{
  "extends": ["next", "prettier"]
}
```
