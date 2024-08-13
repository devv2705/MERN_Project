const express=require('express')
const router=express.Router();
const adminController=require("../controllers/admin-controller")
const authMiddleware=require("../middelwares/auth-Middleware")
const adminMiddleware=require("../middelwares/admin-Middleware")

router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers)
router.route("/contact").get(authMiddleware,adminMiddleware,adminController.getAllContact)

module.exports=router 