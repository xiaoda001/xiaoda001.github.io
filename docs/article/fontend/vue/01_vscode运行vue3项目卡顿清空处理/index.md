---
tags:
  - vue
  - vscode
categories:
  - vue
---

# vscode 运行 vue3 项目卡顿清空处理

创建 vue3 项目，在 vscode 上创建新文件，经常出现代码提示缓慢，需要不断的重启 vscode。主要原因是 vscode 自带的 ts 解析插件与`Volar`插件冲突，需要禁用 vscode 的 ts 解析插件。

## 禁用 vscode 的 ts 解析插件

1. 在当前项目的工作空间下，用 Ctrl + Shift + P (macOS：Cmd + Shift + P) 唤起命令面板。
2. 输入 built，然后选择“Extensions：Show Built-in Extensions”。
3. 在插件搜索框内输入 typescript (不要删除 @builtin 前缀)。
4. 点击“TypeScript and JavaScript Language Features”右下角的小齿轮设置图标，然后在下拉菜单中选择“Disable (Workspace)”。
5. 重新加载工作空间（重启 vscode 或者 reload window）。Takeover 模式将会在你打开一个 Vue 或者 TS 文件时自动启用。

## 另一种方法 (推荐)

- vscode 设置中搜索`vue.server.hybridMode`，将其设置为`false`
- 重启插件，或者重启 vscode
- 等待 vscode 初始化完成，再看看是否有卡顿现象

## 参考资料

1. [vscode 编写 vue3 项目代码提示缓慢问题处理](https://cloud.tencent.com/developer/article/2350048)
