// importing the course model
const Course = require('../models/Course');
const Note = require('../models/Note');
const { v4: uuidv4 } = require('uuid');

async function addNote(req,res){
    const role = 'instructor'
    if(role === 'instructor'){
        let notecode = generateUniqueCourseCode();
        const instructorId = 'in2d3s5ef534';
        const crscode = req.body.crscode;
        const title = req.body.title;
        const explanation = req.body.explanation;
        try {
            let existingCourse = await Course.findOne({ crscode });
            if(existingCourse){
                let existingNote = await Note.findOne({ notecode });
                while (existingNote) {
                    // If course with the same crscode already exists, regenerate a new crscode
                    notecode = generateUniqueCourseCode();
                    existingNote = await Note.findOne({ notecode });
                }

                // Create and save the new note
                const noteItem = new Note({
                    notecode,
                    crscode,
                    title,
                    explanation
                });

                console.log(noteItem);
    
            await noteItem.save();
            return res.json({ status: "Note successfully added!" });
            }
            else{
                return res.status(404).json({ status: "Course with the csrcode not available" });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: "Error with adding note" });
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

async function getNotes(req, res){
    const {crscode} = req.params;
    try {
        const notes = await Note.find({crscode: crscode});
        if(!notes || notes.length === 0){
            return res.status(404).json({ error: "No notes available for the current course" });
        }
        res.status(200).json(notes);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: `Error fetching notes: ${err.message}` });
    }
}

// This function is used to get the expanded view of a note.

async function getNoteById(req, res){
    const {notecode} = req.params;
}

async function updateNote(req, res){
    const role = 'instructor';
    if(role === 'instructor'){
        const { notecode } = req.params;
        const { crscode, title, explanation } = req.body;
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
                const updatedItem = await Note.findOneAndUpdate(
                    { notecode },
                    { $set: { title, explanation } },
                    { new: true } // Return the updated document
                );
        
                if (updatedItem) {
                    return res.status(200).json({ status: "Item updated", updatedItem });
                } else {
                    return res.status(404).json({ error: "Note with provided code not found" });
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

async function deleteNote(req, res){

}

module.exports = {addNote, getNotes, getNoteById, updateNote, deleteNote}