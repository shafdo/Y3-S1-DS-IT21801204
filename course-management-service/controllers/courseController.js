// importing the course model
const Course = require('../models/Course');
const { v4: uuidv4 } = require('uuid');

async function addCourse(req, res) {
    let crscode = generateUniqueCourseCode(); // Generate a random crscode
    const instructorId = 'in2d3s5ef534';
    const crsname = req.body.crsname;
    const description = req.body.description;
    const price = Number(req.body.price);
    try {
        // Check if a course with the same crscode alrady exists
        let existingCourse = await Course.findOne({ crscode });
        while (existingCourse) {
            // If course with the same crscode already exists, regenerate a new crscode
            crscode = generateUniqueCourseCode();
            existingCourse = await Course.findOne({ crscode });
        }

        // Create and save the new course
        const courseItem = new Course({
            instructorId,
            crscode,
            crsname,
            description,
            price
        });

        await courseItem.save();
        return res.json({ status: "Course successfully added!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: "Error with adding course" });
    }
}

// Function to generate a unique course code
function generateUniqueCourseCode() {
    // Generate a UUID (Universally Unique Identifier)
    return uuidv4();
}

async function getAllCourses(req, res){
    try {
        const courseItems = await Course.find();
        res.json(courseItems);
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: `Cannot fetch course details at the moment. Err: ${err}` });
    }
}

async function updateCourse(req, res) {

}


async function deleteCourse(req, res){

}


module.exports = { addCourse, updateCourse, getAllCourses, deleteCourse };