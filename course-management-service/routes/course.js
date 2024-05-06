const express = require('express');
const router = express.Router();

const {addCourse, updateCourse, getAllCourses, deleteCourse} = require('../controllers/courseController')

router.get('/', getAllCourses);
router.post('/add', addCourse);
router.put('/update/:crscode', updateCourse);
router.delete('/delete/:crscode', deleteCourse);

module.exports = router;