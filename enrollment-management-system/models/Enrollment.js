import mongoose from "mongoose";
const { Schema, model } = mongoose;


const EnrollmentSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  courseIds: {
    type: [String],
    default: []
  }
});

export default model("Enrollment", EnrollmentSchema);
