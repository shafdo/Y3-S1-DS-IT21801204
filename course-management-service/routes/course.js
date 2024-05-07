const express = require('express');
const router = express.Router();

const {addCourse, updateCourse, getAllCourses, getMyCourses, getCourseById, deleteCourse} = require('../controllers/courseController')

router.get('/', getAllCourses);
router.get('/course/:crscode', getCourseById);
router.get('/personal', getMyCourses); // returns all the courses created by the instructor
router.post('/add', addCourse);
router.put('/update/:crscode', updateCourse);
router.delete('/delete/:crscode', deleteCourse);

module.exports = router;