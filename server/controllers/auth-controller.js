const home=async (req,res)=>{
    try{
        
        res.status(200).send("Welcome Dev")

    }catch(err){
        console.log(err);
    }
}

const register=async(req,res)=>{
    try{
        console.log(req.body)
        res.status(200).send("Welcome Dev,here is ur registration")
    }catch(err){
        console.log(err)
    }
}

module.exports={home,register}
