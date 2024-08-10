---
tags:
  - windows
  - 系统激活
categories:
  - windows
---

# window11 专业版激活

- 打开`powsershell` 管理员模式，依次输入以下命令

```shell
slmgr -ipk W269N-WFGWX-YVC9B-4J6C9-T83GX

slmgr -skms kms.0t.net.cn

# 做完这一步会看到激活成功的弹窗
slmgr -ato
```

> 解释：
> Windows11 专业版 KMS 激活密钥：W269N-WFGWX-YVC9B-4J6C9-T83GX
> 推荐 KMS 激活服务器:kms.0t.net.cn

## 文章参考

- https://www.orcy.net.cn/1802.html
