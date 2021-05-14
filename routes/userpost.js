const  router =require('express').Router()
const upload =require('../models/upload')


router.post('/',async(req,res)=>{
    const{description,posturl,username,like,profileurl}=req.body;
   try {
      post = new upload ({
          description,
          posturl,
          username,
          like,
          profileurl

      })

      const newpost= await post.save()

      res.json(newpost)
       
   } catch (err) {
       console.log(err)
       return res.status(500).json({
           message:"internal server error"
       })
       
   }

})




router.get('/',async(req,res,)=>{
    try {
        const post = await upload.find({});
        res.json(post);
        
      } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
   

    
})

module.exports=router;


