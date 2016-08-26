var express = require("express");
// express.Router类，可创建可挂载的模块化路由句柄。
var route = express.Router();

// 模拟数据
var items = [
    { title: "文章1" },
    { title: "文章2" }
];

// 设置路由
route.get("/", function (req, res) {
    res.render("index", {
        title: "文章列表",
        items: items
    });
});

route.get("/form", function (req, res) {
    res.render("form", {
        title: "发表文章",
        message: "测试ejs模板引擎"
    });
});

module.exports = route;
