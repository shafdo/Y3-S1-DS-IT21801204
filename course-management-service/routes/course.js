const express = require('express');
const router = express.Router();

const {addCourse, updateCourse, approveRejectRecheckCourse, getAllCourses, getMyCourses, getCourseById, getCoursesByArray, deleteCourse} = require('../controllers/courseController')

router.get('/', getAllCourses);
router.get('/course/:crscode', getCourseById);
router.get('/personal', getMyCourses); // returns all the courses created by the instructor
router.get('/byarray', getCoursesByArray); // returns all crscodes when an array is passed
router.post('/add', addCourse);
router.put('/update/:crscode', updateCourse);
router.patch('/patch/:crscode', approveRejectRecheckCourse);
router.delete('/delete/:crscode', deleteCourse);

module.exports = router;