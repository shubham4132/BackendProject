const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  registrationNumber: String,
  studentID: Number,
  studentName: String,
  studentProfilePictureURL: string,
  fatherOrGuardianName: String,
  standard: String,
  emergencyContactNumber: Number,
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
