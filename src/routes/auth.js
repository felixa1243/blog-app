const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const {loginForm,registerForm}=require('../controllers/auth')
const {registration}=require('../../middleware/auth')
router.get('/login',loginForm)
router.get('/register',registerForm)
router.post('/register',bodyParser.json(),registration)
module.exports=router