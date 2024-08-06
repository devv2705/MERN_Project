const validate=(schema)=>async (req,res,next)=>{

    try {

        const parseBody=await schema.parseAsync(req.body)
        req.body=parseBody;
        next();
        
    } catch (err) {
        const msg=err.errors[0].message;
        console.log(msg)
        res.status(400).json({message:msg})
        
    }

}
module.exports=validate