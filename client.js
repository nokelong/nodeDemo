var http = require('http');
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.html'  
};

// 处理响应的回调函数
var callback = function (response) {
	var body = '';
    response.on('data',function(data) {
        body += data;
    });
    response.on('end',function() {
        console.log(body);
    });
}

var request = http.request(options,callback);
request.end();