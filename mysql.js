var mysql = require('mysql');
var db = {
    host: 'localhost',
    user:  'root',
    password: '123456',
    port: '3306',          
    database: 'test'
};
var connection = mysql.createConnection(db);
var sql = "SELECT * FROM websites";
var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
 

connection.connect();
//查
connection.query(sql, function(error, results) {
    if(error) throw error
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
})
//增
connection.query(addSql, addSqlParams, function(error, results) {
	if(err){
	    console.log('[INSERT ERROR] - ',err.message);
	    return;
	}  
	console.log('--------------------------INSERT----------------------------');       
	console.log('INSERT ID:',result);        
	console.log('-----------------------------');
})
connection.end();
