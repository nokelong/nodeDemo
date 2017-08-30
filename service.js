var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");
    fs.readFile(pathname.substr(1), function(error, data) {
        if(error) {
            console.log(error);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});	
            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
});
server.listen(8081);
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');