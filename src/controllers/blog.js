const index=(req,res)=>res.render('../views/blog/index')
const createPost=(req,res)=>res.render('../views/blog/create')
const proced=(req,res)=>res.json({
  message:"successfully"
})
module.exports={
	index,
	createPost,
	proced
}
