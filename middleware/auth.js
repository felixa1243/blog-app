const {koneksiUser}=require('../src/model/user')
const mysql=require('mysql')
//const md5=require('MD5')
//const response=require('../res')
const jwt=require('jsonwebtoken')
const {secret}=require('../config/secret')
const ip=require('ip')
module.exports={
  registration:function(req,res){
   
   const post={
      username:req.body.username,
      email:req.body.email,
      password:btoa(req.body.password),
      role:req.body.role,
      tgl_daftar:new Date()
    }
    let query='SELECT id FROM user WHERE email=?'
    let table=[post.email]
    query=mysql.format(query,table)
    async function getUname(){
          const row=await koneksiUser.query(`SELECT username FROM user WHERE username="${post.username}"`,(err,rows)=>{
            if(err) console.log(null)
            else console.log(rows.length)
          })
          
        }
        getUname()
        
    koneksiUser.query(query,(err,rows)=>{
      if(err){
        console.error(err)
      } 
      else {
        if(rows.length==0){
          let Query='INSERT INTO user SET ? '
          let Table=['user']
          //Query=mysql.format(Query,Table)
          koneksiUser.query(Query,post,(err,rows)=>{
            if(err){
              console.error(err)
            } else {
              res.status(201).json({
                message:"Berhasil tambah user"
              })
            }
          })
          
        }
        else {
          res.json({"message":"email sudah terdaftar"})
        }
      }
    })
    
  }
}
