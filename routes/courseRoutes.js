import express from "express"
import { addLecture, createCourse, deleteLecture, delteCourse, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated, authorizeSubscribers } from "../middlewares/auth.js";

const router = express.Router()

// get all courses 
router.route("/courses").get(getAllCourses)
// create new courses - only admin
router.route("/createcourse").post( isAuthenticated, authorizeAdmin, singleUpload ,createCourse)
// add lecture 
router.route("/course/:id").get(isAuthenticated,authorizeSubscribers,getCourseLectures).post( isAuthenticated, authorizeAdmin, singleUpload,addLecture).delete(isAuthenticated, authorizeAdmin, delteCourse ) 

router.route("/lecture").delete( isAuthenticated, authorizeAdmin,deleteLecture)

export default router;