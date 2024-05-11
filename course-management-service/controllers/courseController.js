// importing the course model
const Course = require('../models/Course');
const { v4: uuidv4 } = require('uuid');

/* --------- Create functions --------- */

async function addCourse(req, res) {
    const role = 'instructor';
    if(role === 'instructor'){
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
    else{
        return res.status(401).json({ error: "You are not authorized to perform this action" });
    }
}

// Function to generate a unique course code
function generateUniqueCourseCode() {
    // Generate a UUID (Universally Unique Identifier)
    return uuidv4();
}

async function searchCourse(req, res){
    const {query} = req.params;
    try {
        const results = await Course.find({ crsname: { $regex: new RegExp(query, 'i') } });
        res.status(200).json(results);
    }
    catch (error) {
        console.error('Error searching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

/* --------- Read functions ---------*/

// An admin can get all the courses, but for students and instructors they can only fetch courses with the status approved. This simply gets a list of all available courses excluding the content.
async function getAllCourses(req, res){
    const role = 'learner'; // Sample role (remove later)
    let query;

    if (role === 'admin') {
        query = Course.find().select('crscode crsname instructorId description status remarks price date');
    } else {
        query = Course.find({ status: 'approved' }).select('crscode crsname instructorId description status remarks price date');
    }

    try {
        const courseItems = await query.exec();
        res.json(courseItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: `Cannot fetch course details at the moment. Err: ${err}` });
    }

}

// This function returns the courses that you are enrolled to (if student), or the courses you created if you are an instructor
async function getMyCourses(req, res){
    const role = 'instructor';
    if(role === 'instructor'){
        const currentId = 'in2d3s5ef534'; // Example instructorId
        try {
            const courses = await Course.find({ instructorId: currentId });
            if (!courses || courses.length === 0) {
                return res.status(404).json({ error: "No courses found for the current instructor" });
            }
            res.json(courses);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: `Error fetching courses: ${err.message}` });
        }
    }
    else{
        return res.status(401).json({ error: "You are not authorized to perform this action" });
    }
}

// Using the below function users will be able to get data regarding a single course.
async function getCourseById(req, res){
    const crscode = req.params.crscode;
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

async function getCoursesByArray(req, res){
    const coursesArray = req.body.crsarry;
    try {
        // Fetch courses based on the array of crsCodes
        const courses = await Course.find({ crscode: { $in: coursesArray }, status: 'approved' })
                                    .select('crscode crsname instructorId description price date')
                                    .exec();
        if(courses.length > 0){
            res.status(200).json(courses);
        }
        else{
            return res.status(400).json({ error: `No courses with the passed cscodes` })
        }   
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: `Cannot fetch course details at the moment. Err: ${err}` });
    }
}

/* --------- Update functions --------- */

async function updateCourse(req, res) {
    const role = 'instructor';
    if(role === 'instructor'){
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
    else{
        return res.status(401).json({ error: "You are not authorized to perform this action" });
    }
}

async function approveRejectRecheckCourse(req, res){
    const role = 'admin';
    const { crscode } = req.params;
    const { status, remarks } = req.body;
    let currentUserId = 'in2d3s5ef534'; // mocks the id value stored in session
    if (role === 'admin') {
        if((status === 'approved' || status === 'rejected') && remarks !== null){
            const courseDetails = await Course.findOne({ crscode });
            if (courseDetails) {
                instructorId = courseDetails.instructorId;
                try {
                    // Find the course by crscode and update only status and remarks fields
                    const updatedItem = await Course.findOneAndUpdate(
                        { crscode },
                        { $set: { status, remarks } }, // Update only status and remarks
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
            } else {
                return res.status(404).json({ error: "Course with provided code not found" });
            }
        }
        else{
            return res.status(401).json({ error: "Recheck the passed data" }); 
        }
    } else if(role === 'instructor'){
        const courseDetails = await Course.findOne({ crscode });
        if(status === 'pending'){
            if (courseDetails) {
                instructorId = courseDetails.instructorId;
                if(currentUserId === instructorId){
                    try {
                        // Find the course by crscode and update only status field
                        const updatedItem = await Course.findOneAndUpdate(
                            { crscode },
                            { $set: { status } }, // Update only status
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
                
            } else {
                return res.status(404).json({ error: "Course with provided code not found" });
            }
        }
        else{
            return res.status(401).json({ error: "Check the passed data" });
        }
    }
    else{
        return res.status(401).json({ error: "You are not authorized to perform this action" });

    }
}

/* --------- Delete functions --------- */

async function deleteCourse(req, res){
    const role = 'instructor';
    if(role === 'instructor'){
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
    else{
        return res.status(401).json({ error: "You are not authorized to perform this action" });
    }
}


module.exports = { addCourse, updateCourse, approveRejectRecheckCourse, getAllCourses, searchCourse, getMyCourses, getCourseById, getCoursesByArray, deleteCourse };