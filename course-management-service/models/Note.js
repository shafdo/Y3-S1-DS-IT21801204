const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    notecode: {
        type : String,
        required : true
    },
    crscode: {
        type : String,
        required : true
    },
    title: {
        type : String,
        required : true
    },
    explanation : {
        type : String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now,
        required : true
    },
});

const Note = mongoose.model("note", noteSchema)

module.exports = Note;