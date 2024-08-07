const {Schema,model}=require("mongoose") //we can also use older way like userschema
const { _type } = require("../validator/auth-validator")

const contactSchema=new Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    message:{type:String,require:true}
    
})


const Contact=new model('contacts',contactSchema)

module.exports=Contact