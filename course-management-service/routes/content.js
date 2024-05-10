const express = require('express');
const router = express.Router();
const multer = require('multer');

const {addNote, getNotes, getNoteById, updateNote, deleteNote, uploadVideo} = require('../controllers/contentController')
const upload = multer({ storage: multer.memoryStorage() });

/* Notes endpoints*/
router.post('/note/add', addNote); // creating a note.
router.get('/note/all/:crscode', getNotes); // get all notes to display under a course.
router.get('/note/get/:notecode', getNoteById); // get a note by passing an ID as a parameter.
router.patch('/note/update/:notecode', updateNote); // update the title and explanation of a note.
router.delete('/note/delete/:notecode', deleteNote); // delete the note created.

/* video upload functions */
router.post('/video/media/add/:crscode', upload.single('video'), uploadVideo);

module.exports = router;