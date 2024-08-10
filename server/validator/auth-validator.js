const zod=require("zod")


const loginSchema=zod.object({
    email:zod.string({required_error:"email is require"})
    .trim().email({message:"Invalid Email !!"}).min(5,{message:"email must be of 3 char"})
    .max(255,{message:"email must be not more than 255 char"}),

    password:zod.string({required_error:"password is require"})
    .trim().min(7,{message:"password must be of 7 char"})
    .max(1024,{message:"Name must be not more than 1024 char"}),

})

//creating object schema

const signupSchema=loginSchema.extend ({
    username:zod.string({required_error:"name is require"})
    .trim().min(3,{message:"name must be of 3 char"})
    .max(255,{message:"Name must be not more than 255 char"}),

    phone:zod.string({required_error:"phonenumber is require"})
    .trim().min(10,{message:"number must be of 10 char"})
    .max(20,{message:"number must be not more than 20 char"}),

})

module.exports={signupSchema,loginSchema};