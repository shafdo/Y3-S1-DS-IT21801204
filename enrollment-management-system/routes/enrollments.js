import express from 'express';
import { addEnrollment, deleteCourseEnrollment, deleteCourseInEnrollments, deleteEnrollment, getEnrolledCourseIds, getEnrollmentStatus } from '../controllers/enrollments.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE ENROLLMENT
router.post("/:courseId", verifyUser, addEnrollment);

//GET ENROLLED COURSE IDS
router.get("/", verifyUser, getEnrolledCourseIds);

//CHECK ENROLLMENT STATUS
router.get("/:courseId", verifyUser, getEnrollmentStatus);

//DELETE ENROLLMENT TO A SINGLE COURSE OF SINGLE USER ENROLLMENTS
router.delete("/:courseId/remove", verifyUser, deleteCourseEnrollment);

//DELETE ALL ENROLLMENT TO A SINGLE USER
router.delete("/", verifyUser, deleteEnrollment);

//DELETE ALL ENROLLMENTS TO A COURSE
router.delete("/:courseId", verifyUser, deleteCourseInEnrollments);

export default router;