const jwt=require("jsonwebtoken")
const User=require("../models/user_model")

const authMiddleware=async(req,res,next)=>{


  const token=req.header('Authorization');
  
  if(!token){
    return res.status(401).json({msg:"unauthorized,token not provided"})
  }

  const jwtToken=token.replace('Bearer',"").trim()


  try {
    const isVarified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)

    
    const userData=await User.findOne({email:isVarified.email}).select({password:0})
    console.log(userData)
    req.user=userData
    req.token=token
    req.userID=userData._id
    next()
    
  } catch (error) {
    return res.status(401).json({msg:"Unauthorized. Invalid Token"})

  }
  






}

module.exports=authMiddleware