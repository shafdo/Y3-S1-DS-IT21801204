import express from 'express';
import { addEnrollment, deleteCourseEnrollment, deleteCourseInEnrollments, deleteEnrollment, getEnrollmentStatus } from '../controllers/enrollments.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE ENROLLMENT
router.post("/:courseId/:userId/add",verifyUser, addEnrollment);

//CHECK ENROLLMENT STATUS
router.get("/:courseId/:userId", getEnrollmentStatus);

//DELETE ENROLLMENT TO A SINGLE COURSE OF SINGLE USER ENROLLMENTS
router.delete("/:courseId/:userId", deleteCourseEnrollment);

//DELETE ALL ENROLLMENT TO A SINGLE USER
router.delete("/:userId", deleteEnrollment);

//DELETE ALL ENROLLMENTS TO A COURSE
router.delete("/remove/course/:courseId", deleteCourseInEnrollments);

export default router;