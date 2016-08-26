var express = require("express");
// 引进路由模块
var route = require("./routes/route");

var app = express();

// 设置模板路径和模板引擎
app.set("views", "./views");
app.set("view engine", "ejs");

// 使用路由
app.use(route);

app.listen(3000, function () {
    console.log("开始监听...");
});
