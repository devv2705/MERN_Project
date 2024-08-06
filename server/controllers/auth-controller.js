const User=require("../models/user_model")
const bcrypt=require("bcryptjs")

const home=async (req,res)=>{
    try{
        
        res.status(200).send("Welcome Dev")

    }catch(err){
        console.log(err);
    }
}

const register=async(req,res)=>{
    try{
        //console.log(req.body)
        const {username,email,phone,password}=req.body

        const userExist=await User.findOne({email:email})


        if(userExist){
            return res.status(400).json({msg:"Email Already Exist"})
        }

        //hash the password
        const hashcount=10
        const hash_pass=await bcrypt.hash(password,hashcount)

        const userCreated=await User.create({username,email,phone,password:hash_pass})

        res.status(201).json({msg:"Registration Successfull",token:await userCreated.generateToken(),userId:userCreated._id.toString()})
    }catch(err){
        res.status(500).json("Internal server Error while registration")
    }
}

//User Login Logic

const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const userExist=await User.findOne({ email })

        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const isPassValid=await bcrypt.compare(password,userExist.password)

        if(isPassValid){

            res.status(200).json({msg:"Login Successfull",

                token:await userExist.generateToken(),

                userId:userExist._id.toString()})

        }else{
            res.status(401).json({message:"Invalid Email or Password"})
        }

    }catch(err){
        res.status(500).json("Internal server Error while Login")
    }
}

module.exports={home,register,login}
