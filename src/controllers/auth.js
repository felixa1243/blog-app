const {koneksiUser:userDB}=require('../model/user.js')
const loginForm=(req,res)=>res.render('..views/login')
const registerForm=(req,res)=>res.render('..views/login')

module.exports={
  loginForm,
  registerForm
}