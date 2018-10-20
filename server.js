const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
//引入模块
const users = require("./routes/api/users");
const listen = require("./routes/api/listen");
const history = require("./routes/api/history");

//连接数据库
const db = require("./config/keys").mongoURL;
mongoose.connect(db, {useNewUrlParser:true})
    .then(() => {
        console.log("连接成功");
    })
    .catch(err => {
        console.log(err);
    })


    // 使用中间件实现允许跨域
app.all('*', function(req, res, next) {
	if(req.headers.origin) {
		res.header('Access-Control-Allow-Credentials', true);
		res.header("Access-Control-Allow-Origin", req.headers.origin);
	} else {
		res.header('Access-Control-Allow-Credentials', false);
		res.header("Access-Control-Allow-Origin", "*");
	}
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	if(req.method === "OPTIONS") res.send(200); /*让options请求快速返回*/
	else next();
});

  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(passport.initialize());
require("./config/passport")(passport);


app.use("/api/users",users);
app.use("/api/listen",listen);
app.use("/api/history",history);

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Server started on ${port}`);
})

 
