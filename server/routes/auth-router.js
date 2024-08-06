const express=require('express');

const router=express.Router();
const authControllers=require("../controllers/auth-controller")


router.route("/").get(authControllers.home)

router.route("/registration").post(authControllers.register)
router.route("/login").post(authControllers.login)

module.exports =router 