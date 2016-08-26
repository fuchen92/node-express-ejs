# node-express-ejs

使用node，express，ejs实现一个简单的快速上手网站

*说明：基于node平台使用express，ejs模板引擎快速搭建一个简单的网站应用*

---

### 目录结构

```
    node-express-ejs
        .git
        node_modules
        routes                  // 路由文件夹
            route.js            // 设置路由的js模块文件
        views                   // 视图
            index.ejs           // 首页模板引擎
            form.ejs            // 发表新文章页面模板引擎
        .gitignore
        app.js
        package.json
        README.md
```

### 进入项目目录执行以下命令

---

安装依赖模块

```
    npm install
```

启动服务应用

```
    node app.js
```

**可以看到命令行控制台会出输出`开始监听...`这句话，表示服务已经开始，直接用浏览器打开输入地址：`localhost:3000`即可浏览！**
