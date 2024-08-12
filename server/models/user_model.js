const mongoose=require("mongoose")
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({

    username:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    phone:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
})

//jwt token
userSchema.methods.generateToken=function(){
    try{

        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },process.env.JWT_SECRET_KEY,{
            expiresIn:"20s"
        })

    }catch(err){
        console.error(err)
    }

}

const User=new mongoose.model("users",userSchema)
module.exports=User