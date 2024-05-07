const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    crscode: {
        type : String,
        required : true
    },
    instructorId: {
        type : String,
        required : true
    },
    crsname: {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status: {
        type: String,
        default: 'pending'
    },
    remarks: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        required : true
    },
    date: {
        type: Date,
        default: Date.now,
        required : true
    },
    videos: {
        type: [{
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            src: {
                type: String,
                required: true
            }
        }],
        default: []
    },
    notes: {
        type: [String],
        default: []
    }
});

const Course = mongoose.model("course", courseSchema)

module.exports = Course;