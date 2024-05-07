const express = require('express');
const router = express.Router();

const {addNote, getNotes, getNoteById, updateNote, deleteNote} = require('../controllers/contentController')

router.post('/note/add', addNote);
router.get('/note/all/:crscode', getNotes);
router.get('/note/get/:notecode', getNoteById);
router.put('/note/update/:notecode', updateNote);
router.delete('/note/delete/:notecode', deleteNote);

module.exports = router;