const express=require('express')
const router=express.Router()
const {index}=require('../controllers/index')
const blogIndex=require('./blog')
router.get('/',index)
module.exports=router
