const express=require('express')
const router=express.Router();
const adminController=require("../controllers/admin-controller")
const authMiddleware=require("../middelwares/auth-Middleware")
const adminMiddleware=require("../middelwares/admin-Middleware")

router.route("/user").get(authMiddleware,adminMiddleware,adminController.getAllUsers)
router.route("/contact").get(authMiddleware,adminMiddleware,adminController.getAllContact)

router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUser)

module.exports=router 