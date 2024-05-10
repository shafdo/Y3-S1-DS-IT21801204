// importing the course model
const Course = require('../models/Course');
const Note = require('../models/Note');
const { v4: uuidv4 } = require('uuid');

/* ------ Video upload ------ */
const firebase = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyBl4UkVcQ84mkmWF52Vpd0DT4kbrO_RmnQ",
    authDomain: "dsassignment-66e14.firebaseapp.com",
    projectId: "dsassignment-66e14",
    storageBucket: "dsassignment-66e14.appspot.com",
    messagingSenderId: "461683121719",
    appId: "1:461683121719:web:6b8d41cd6411819e3e29b2",
    measurementId: "G-1W09E138C3"
  };
firebase.initializeApp(firebaseConfig);
const storage = getStorage();
/* ------ Video upload ------ */


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
    try {
        const notes = await Note.findOne({ notecode });
        if(!notes || notes.length === 0){
            return res.status(404).json({ error: "No notes available for the current course" });
        }
        res.status(200).json(notes);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: `Error fetching notes: ${err.message}` });
    }
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
    const role = 'instructor';
    if(role === 'instructor'){
        const { notecode } = req.params;
        let crscodeObj
        let instructorId;
        let currentUserId = 'in2d3s5ef534'

        const NoteItem = await Note.findOne({ notecode });
        if(NoteItem){
            const {crscode} = NoteItem;

            const CourseItem = await Course.findOne({ crscode });
            if(CourseItem){
                instructorId = CourseItem.instructorId;
            }
            else{
                return res.status(404).json({ error: "Course with the entered code not found" });
            }

            if(instructorId === currentUserId){
                try {
                    // Find the note by notecode and delete it
                    const deletedItem = await Note.findOneAndDelete({ notecode });
            
                    if (deletedItem) {
                        return res.status(200).json({ status: "Item deleted", deletedItem });
                    } else {
                        return res.status(404).json({ error: "Deletion unsuccessful" });
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
            return res.status(404).json({ error: "Note with the entered code not found" });
        }
        
    }
    else{
        return res.status(401).json({ error: "You are not authorized to perform this action" });
    }
}

/* --------- Video related functions --------- */
async function addVideoDetails(crscode, videoData){
    try {
        // Find the document by ID
        const obj = await Course.findOne({ crscode });
    
        // If the document is not found, return null
        if (!obj) {
          return null;
        }
    
        // Create the video object with the provided data
        const newVideo = {
          id: videoData.id,
          title: videoData.title,
          src: videoData.src
        };
    
        // Push the video object to the "videos" array
        obj.videos.push(newVideo);
    
        // Save the updated document to the database
        const updatedObj = await obj.save();
        return updatedObj;
      } catch (error) {
        console.error('Error adding video:', error);
        throw error;
      }
}

async function uploadVideo(req, res){
    const {crscode} = req.params;
    const {title} = req.body;
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file found' });
        }

        const storageRef = ref(storage, req.file.originalname);
        const metadata = {
            contentType: 'video/mp4'
        };

        await uploadBytes(storageRef, req.file.buffer, metadata);
        const url = await getDownloadURL(storageRef);

        const vdiId = `vid_${generateUniqueCourseCode()}`

        const videoData = {
            id: vdiId,
            title: title,
            src: url
        }

        addVideoDetails(crscode, videoData);
        res.json({ url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error: ${error.message}` });
    }

}

async function updateVideoDetails(req, res){
    const {crscode, videoid} = req.params;
    const {title} = req.body;

    const newTitle = title;
    // const courseObj = await Course.findOne({ crscode });

    // if(!courseObj){
    //     return res.status(404).json({message: 'Course with the crscode not found'})
    // }

    // const courseVideos = courseObj.videos;
    // if(courseVideos.length === 0){
    //     return res.status(404).json({message: 'No videos for the passed course'})
    // }


    // return res.status(200).json(courseObj.videos)

    /* new */
    try {
        // Find the document by ID
        const courseObj = await Course.findOne({ crscode });
    
        // If the document is not found, return 404 error
        if (!courseObj) {
          return res.status(404).json({ message: 'Course with the crscode not found' });
        }
    
        // Find the video object in the "videos" array by its ID
        const videoIndex = courseObj.videos.findIndex(video => video.id === videoid);
    
        // If the video object is not found, return 404 error
        if (videoIndex === -1) {
          return res.status(404).json({ message: 'Video not found' });
        }
    
        // Update the title of the video object
        courseObj.videos[videoIndex].title = newTitle;
    
        // Save the updated document to the database
        const updatedObj = await courseObj.save();
    
        console.log('Video title updated successfully:', updatedObj);
        res.json(updatedObj); // Send the updated object as response
      } catch (error) {
        console.error('Error updating video title:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    /* new */
}

module.exports = {addNote, getNotes, getNoteById, updateNote, deleteNote, uploadVideo, updateVideoDetails}