const mongoose=require("mongoose")

const URI="mongodb://localhost/mern_db"
 const connect_dB=async ()=>{
    try{

        await mongoose.connect(URI)

    }catch(err){
         console.error("Database Connection Error!!!!");
         process.exit(0)
    }
 }

 module.exports=connect_dB 