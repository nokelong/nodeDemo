var fs = require('fs');
//同步阻塞方式
// var txt = fs.readFileSync('./demo.txt');
// console.log(txt.toString());

//异步非阻塞方式
fs.readFile('./demo.txt', function(error,data) {
	if(error) return console.error(error);
	console.log(data.toString());
})

console.log("程序执行结束!");