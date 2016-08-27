var express = require("express");
// var path = require("path");

// 引进路由模块
var route = require("./routes/route");
// less编译中间件
// var lessMiddleWare = require("less-middleware");

var app = express();

// 设置模板路径和模板引擎
app.set("views", "./views");
app.set("view engine", "ejs");

// 使用路由
app.use(route);

// 使用静态资源
// app.use(lessMiddleWare({
//     src: __dirname + "/public",
//     compress: true
// }));
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
    console.log("开始监听...");
});
