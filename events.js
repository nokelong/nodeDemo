var events = require('events');
// 创建 eventEmitter 对象
var emitter = new events.EventEmitter();

//注册事件
emitter.on('recevied',function() {
	console.log('recevied 数据接收完成')
})
emitter.on('connection',function() {
    console.log('connection 建立连接')
     // 触发 recevied 事件 
    emitter.emit('recevied')
});
// emitter.emit('connection')


emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2); 
})
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2); 
})

emitter.emit('someEvent','1','2')
console.log('打完收工...')

