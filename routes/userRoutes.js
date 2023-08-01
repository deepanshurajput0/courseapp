import express from "express"
import { addToPlaylist, changePassword, deleteMyProfile, deleteUser, forgetpassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetpassword, updateProfile, updateUserRole, updateprofilepicture } from "../controllers/userController.js";
import {authorizeAdmin, isAuthenticated} from "../middlewares/auth.js"
import singleUpload from "../middlewares/multer.js"
import { get } from "mongoose";
const router = express.Router()
// register
router.route("/register").post(singleUpload, register)
// login
router.route("/login").post(login)
// Logout
router.route("/logout").get(logout)
// get my profile
router.route("/me").get(isAuthenticated, getMyProfile) 
// change password
router.route("/changepassword").put(isAuthenticated,changePassword)
// update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile) 
// update profile picture
router.route("/updateprofilepicture").put(isAuthenticated,singleUpload,updateprofilepicture)
// forget password
router.route("/forgetpassword").post(forgetpassword)   
router.route("/resetpassword/:token").put(resetpassword)   
// add to playlist 
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist) 
// remove from playlist 
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist) 

// admin routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers)

// delete my profile 
router.route("/me").delete(isAuthenticated, deleteMyProfile) 
router.route("/admin/user/:id")
.put(isAuthenticated, authorizeAdmin, updateUserRole)
.delete(isAuthenticated, authorizeAdmin, deleteUser)
export default router;
