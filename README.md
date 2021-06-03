# import-html-entry
Treats the index html as manifest and loads the assets(css,js), get the exports from entry script.

```html
<!-- subApp/index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>

<!-- mark the entry script with entry attribute -->
<script src="https://unpkg.com/mobx@5.0.3/lib/mobx.umd.js" entry></script>
<script src="https://unpkg.com/react@16.4.2/umd/react.production.min.js"></script>
</body>
</html>
```

```js
import importHTML from 'import-html-entry';

importHTML('./subApp/index.html')
    .then(res => {
        console.log(res.template);

        res.execScripts().then(exports => {
            const mobx = exports;
            const { observable } = mobx;
            observable({
                name: 'kuitos'
            })	
        })
});
```
npm i
npx webpack
npm i -g http-server
http-server
服务访问

异步加载 - 先定义获取资源的函数，需要调用时触发函数再去获取 -》 requestIdleCallback空闲时下载，防止阻塞主线程
整体思路：
    fetch html文件（importHTML） =》 解析html文件（processTpl） =》  css全部放style中，js纪录到scripts =》 fetch js code => eval执行js code