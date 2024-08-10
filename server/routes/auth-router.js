const express=require('express');

const router=express.Router();
const authControllers=require("../controllers/auth-controller")
const validate=require("../middelwares/validate-middleware")
const {signupSchema,loginSchema}=require("../validator/auth-validator")
const authMiddleware=require("../middelwares/auth-Middleware")


router.route("/").get(authControllers.home)

router.route("/registration").post(validate(signupSchema),authControllers.register)
router.route("/login").post(validate(loginSchema),authControllers.login)
router.route("/user").get(authMiddleware,authControllers.user)

module.exports =router 