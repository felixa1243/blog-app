const express=require('express')
const router=express.Router()
const {index,createPost,proced}=require('../controllers/blog')
router.get('/',index)
router.get('/create',createPost)
router.post('/',proced)
module.exports=router
