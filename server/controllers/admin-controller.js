const User=require("../models/user_model")
const Contact=require("../models/contact-model")


const getAllUsers=async(req,res)=>{
    try {

        const users=await User.find({},{password:0})
        if(!users || users.length===0){
            return res.status(404).json({message:"No Users Found"})
        }
         return res.status(200).json(users)
        
    } catch (error) {

        next(error);        
    }
}

const getAllContact=async(req,res)=>{
    try {

        const contact=await Contact.find()
        console.log(contact)
        if(!contact || contact.length===0){
            return res.status(404).json({message:"No Contact Found"})

        }

        return res.status(200).json(contact)
        
    } catch (error) {
        next(error)
        
    }
}

module.exports={getAllUsers,getAllContact};