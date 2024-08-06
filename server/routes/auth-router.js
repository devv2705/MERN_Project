const express=require('express');

const router=express.Router();
const authControllers=require("../controllers/auth-controller")
const validate=require("../middelwares/validate-middleware")
const signupSchema=require("../validator/auth-validator")


router.route("/").get(authControllers.home)

router.route("/registration").post(validate(signupSchema),authControllers.register)
router.route("/login").post(authControllers.login)

module.exports =router 