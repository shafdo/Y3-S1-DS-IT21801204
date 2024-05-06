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

// An admin can get all the courses, but for students and instructors they can only fetch courses with the status approved.
async function getAllCourses(req, res){
    const role = 'learner' // this is a sample value (remove later)
    if(role === 'admin'){
        try {
            const courseItems = await Course.find();
            res.json(courseItems);
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: `Cannot fetch course details at the moment. Err: ${err}` });
        }
    }
    else{
        try {
            const approvedCourses = await Course.find({ status: 'approved' });
            res.json(approvedCourses);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: `Cannot fetch approved courses at the moment. Err: ${err}` });
        }
    }

}

async function getCourseById(req, res){
    const crscode = req.params.crscode; // Assuming the course code is passed as a URL parameter
    try {
        const courseItem = await Course.findOne({ crscode });
        if (!courseItem) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.json(courseItem);
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: `Cannot fetch course details at the moment. Err: ${err}` });
    }
}

async function updateCourse(req, res) {
    const { crscode } = req.params;
    const { crsname, description, price } = req.body;
    const courseDetails = await Course.findOne({crscode});
    let instructorId;
    let currentUserId = 'in2d3s5ef534'
    // let currentUserId = 'in2d3s5ef53'
    if(courseDetails){
        instructorId = courseDetails.instructorId;
    }
    else{
        return res.status(404).json({ error: "Course with provided code not found" });
    }

    if(currentUserId === instructorId){
        try {
            // Find the course by crscode and update it
            const updatedItem = await Course.findOneAndUpdate(
                { crscode },
                { $set: { crsname, description, price } },
                { new: true } // Return the updated document
            );
    
            if (updatedItem) {
                return res.status(200).json({ status: "Item updated", updatedItem });
            } else {
                return res.status(404).json({ error: "Course with provided code not found" });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
    else{
        return res.status(401).json({ error: "You are not authorized to perform this action" });
    }

    
}


async function deleteCourse(req, res){
    const { crscode } = req.params;
    const courseDetails = await Course.findOne({crscode});
    let instructorId;
    let currentUserId = 'in2d3s5ef534'
    // let currentUserId = 'in2d3s5ef53'
    if(courseDetails){
        instructorId = courseDetails.instructorId;
        console.log(instructorId);
    }
    else{
        return res.status(404).json({ error: "Course with provided code not found" });
    }
    if(instructorId === currentUserId){
        try {
            // Find the course by crscode and delete it
            const deletedItem = await Course.findOneAndDelete({ crscode });
    
            if (deletedItem) {
                return res.status(200).json({ status: "Item deleted", deletedItem });
            } else {
                return res.status(404).json({ error: "Course with the entered code not found" });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
    else{
        return res.status(401).json({ error: "You are not authorized to perform this action" });
    }

    
}


module.exports = { addCourse, updateCourse, getAllCourses, getCourseById, deleteCourse };