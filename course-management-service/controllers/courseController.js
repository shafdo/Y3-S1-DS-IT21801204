// importing the course model
const Course = require('../models/Course');
const { v4: uuidv4 } = require('uuid');

async function addCourse(req, res) {
    let crscode = generateUniqueCourseCode(); // Generate a random crscode
    const instructorId = 'in2d3s5ef534';
    const crsname = req.body.crsname;
    const description = req.body.description;
    const status = 'pending';
    const remarks = null;
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

module.exports = { addCourse };