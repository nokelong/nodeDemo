var fs = require('fs')
var child_process = require('child_process')

/**
 * process.exec
 * 将子进程的输出以回调函数参数的形式返回
 * 格式：process.exec(command[, options], callback)
 * @param  command： 字符串， 将要运行的命令，参数使用空格隔开
 * @return callback:  回调函数
 */
for( var i = 0 ; i<3 ; i++) {
    var process = child_process.exec('node support.js ' + i ,function(error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('exec stdout: ' + stdout);
        console.log('exec stderr: ' + stderr);
    });
    process.on('exit', function(code) {
        console.log('exec子进程已退出，退出码 '+code);
    })
}

/**
 * process.spawn 
 * 使用指定的命令行参数创建新进程
 * 格式：process.spawn(command[, args][, options])
 * @param  command： 将要运行的命令
 * @param  args:     Array 字符串参数数组
 */
for(var j = 0; j< 3; j++) { 
    //创建新进程
    var p = child_process.spawn('node',['support.js', j]);
    p.stdout.on('data', function(data) {
        console.log('spawn stdout :' +data)
    });

    p.stderr.on('data', function(data) {
        console.log('spawn stderr :' +data)
    });

    p.on('close', function (code) {
      console.log('spawn子进程已退出，退出码 '+code);
   });
}

/**
 * process.fork 
 * fork 是 spawn() 方法的特殊形式，用于创建进程
 * 格式：fork(modulePath[, args][, options])
 * @param  modulePath:将要在子进程中运行的模块
 * @param  args:     Array 字符串参数数组
 */
for(var i = 0; i< 3; i++) { 
    //创建新进程
    var p = child_process.fork('support.js', [i]);
    
    p.on('data', function(data) {
        console.log('stderr :' +data)
    });
    p.on('close', function (code) {
      console.log('子进程已退出，退出码 '+code);
   });
}