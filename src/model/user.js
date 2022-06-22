const mysql=require('mysql')
const koneksiUser=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'blog',
	multipleStatements:true
});
koneksiUser.connect(err=>{
	if(err) console.error(err)
	console.log('connected to database blog')
})
module.exports={
  koneksiUser
}
