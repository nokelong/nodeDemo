var express = require('express')
var bodyParser  = require('body-parser')
var cookieParser = require('cookie-parser')
var app = express()

//创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));


app.get("/" , function(req, res) {
    res.send("Cookies" + req.cookies)
});
app.get('/index.html', function(req, res){
	res.sendFile(__dirname + "/" + "index.html");
})

//使用get方法
app.get('/process_get', function(req, res) {
    var response = {
        'first_name': req.query.first_name,
        'last_name': req.query.last_name	
    }
    console.log(response)
    res.end(JSON.stringify(response));
});

//使用post方法
app.post('/process_post', urlencodedParser, function(req, res) {
    var response = {
        'first_name': req.body.first_name,
        'last_name': req.body.last_name	
    }
    console.log(response)
    res.end(JSON.stringify(response));
});
var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})