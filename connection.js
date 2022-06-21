const mysql=require('mysql')
const connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'mahasiswa',
	multipleStatements:true
});
connection.connect(err=>{
	if(err) throw err;
	console.log('connected to database')
})
module.exports=connection
