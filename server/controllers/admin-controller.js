const User=require("../models/user_model")
const Contact=require("../models/contact-model")


const getAllUsers=async(req,res,next)=>{
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
        if(!contact || contact.length===0){
            return res.status(404).json({message:"No Contact Found"})

        }

        return res.status(200).json(contact)
        
    } catch (error) {
        next(error)
        
    }
}

const deleteUser=async(req,res)=>{

    try {

        const id=req.params.id;
        await User.deleteOne({_id:id})
        return res.status(200).json({message:"User Deleted successfully"})


        
    } catch (error) {
        next(error)
        
    }

}

const getUserById=async(req,res)=>{
     try {

        const id=req.params.id; 
       const data= await User.findOne({_id:id},{password:0})

       return res.status(200).json(data)


     } catch (error) {
        next(error)
     }
}

const updateUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedUserData=req.body;
        const updateData=await User.updateOne({_id:id},{
            $set:updatedUserData
        })
        return res.status(200).json(updateData)
    } catch (error) {
        next(error)
        
    }

}




module.exports={getAllUsers,getAllContact,deleteUser,getUserById,updateUserById};