---
tags:
  - windows
  - office
categories:
  - office
---

# vscode 保存新建文件的换行格式设置为 LF

- 安装插件 `EditorConfig for VS Code`
- 新建`.editorconfig` 文件在根目录
- `.editorconfig` 文件添加以下呢内容

```js
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

> 保存文件时，将文件的换行格式保存为`LF`
