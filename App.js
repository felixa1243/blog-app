const express=require('express')
const app=express()
const port=process.env.port||5000
const mongoose=require('mongoose')
const indexRoutes=require('./src/routes/index')
const blog=require('./src/routes/blog')
const connection=require('./connection')
const bodyParser = require('body-parser')

app.use((req,res,next)=>{
	const log=`${req.method} ${req.path} - ${req.ip}`
	console.log(log)
	next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.set('views','./src/views/')
app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/public'))
app.use('/',indexRoutes)
app.post('/api/test',(req,res)=>{
	const data={...req.body}
	const querySql='INSERT INTO mahasiswa SET ?'
	connection.query(querySql,data,(err,row,fields)=>{
		if(err){
			return res.status(500).json({message:"failed "+err})

		}
		res.status(201).json({message:"success"})
	})
})
app.use('/blog',blog)
app.use((req,res)=>res.render('404'))
app.listen(port,()=>console.log(`app running on port ${port}`))
