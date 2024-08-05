const mongoose=require("mongoose")


const URI=process.env.MONGODB_URI
 const connect_dB=async ()=>{
    try{

        await mongoose.connect(URI)

    }catch(err){
         console.error("Database Connection Error!!!!");
         process.exit(0)
    }
 }

 module.exports=connect_dB 