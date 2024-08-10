const express = require("express")
const app=express()
//dotenv is used for hide sensitive information
require('dotenv').config()
const authRoute=require("../server/routes/auth-router") 
const contactRoute=require("../server/routes/contact-router")
const serviceRoute=require("./routes/service-router")
const connect_dB=require("../server/utils/db")
const errMiddleware = require("./middelwares/error-middelware")
const cors=require("cors")

//handling coes policy issue because our frontend and backend running on diffrent port num
//lets handle that
const corsOption={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    Credential:true
}
app.use(cors(corsOption))

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)


//all error will go to error middleware
app.use(errMiddleware)
const PORT=4000;

connect_dB().then(()=>{

app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})

})

