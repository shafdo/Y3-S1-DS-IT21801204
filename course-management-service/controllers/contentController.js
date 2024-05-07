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

}

async function getNoteById(req, res){

}

async function updateNote(req, res){

}

async function deleteNote(req, res){

}

module.exports = {addNote, getNotes, getNoteById, updateNote, deleteNote}