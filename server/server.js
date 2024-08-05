const express = require("express")

const app=express()
const router=require("../server/routes/auth-router") 
const connect_dB=require("../server/utils/db")

app.use(express.json())

app.use("/api/auth",router);
app.use("/api/auth",router);

const PORT=4000;

connect_dB().then(()=>{
    
app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})

})

