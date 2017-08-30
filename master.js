var fs = require('fs')
var child_process = require('child_process')

//process.exec
// for( var i = 0 ; i<3 ; i++) {
//     var process = child_process.exec('node support.js ' + i ,function(error, stdout, stderr) {
//         if (error) {
//             console.log(error.stack);
//             console.log('Error code: '+error.code);
//             console.log('Signal received: '+error.signal);
//         }
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//     });
//     process.on('exit', function(code) {
//         console.log('子进程已退出，退出码 '+code);
//     })
// }

//process.spawn 
// for(var j = 0; j< 3; j++) { 
//     //创建新进程
//     var p = child_process.spawn('node',['support.js', j]);
//     p.stdout.on('data', function(data) {
//         console.log('stdout :' +data)
//     });

//     p.stderr.on('data', function(data) {
//         console.log('stderr :' +data)
//     });

//     p.on('close', function (code) {
//       console.log('子进程已退出，退出码 '+code);
//    });
// }

//process.fork 
for(var j = 0; j< 3; j++) { 
    //创建新进程
    var p = child_process.fork('support.js', [j]);
   
    p.on('close', function (code) {
      console.log('子进程已退出，退出码 '+code);
   });
}