---
tags:
  - 前端
  - Prettier
categories:
  - Prettier
---

# 项目添加 Prettier 格式化规范

- vscode 安装 Prettier 插件

  插件地址： https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

- 安装 Prettier

```bash
npm install --save-dev --save-exact prettier
```

- 项目根目录创建配置文件 `.prettierrc`, 添加配置, [全部配置](https://prettier.io/docs/en/options)

```json
{
  "printWidth": 140,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "bracketSameLine": false,
  "proseWrap": "preserve",
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

- 项目根目录创建忽略检查配置文件 `.prettierignore`, 根据项目情况进行配置，用法与`.gitignore` 一致
