
# Web Push 示例

本示例主要展示了 Push API 的使用方法。


## 使用方法

使用自主应用服务器标识（VAPID）协议, 生成公钥和私钥

安装 web-push、 生成密钥
```
npm install web-push -g

web-push generate-vapid-keys
```

在config.js里配置好密钥后，运行服务
```
npm run server
```

可直接访问 `http://127.0.0.1:8083/index.html`
