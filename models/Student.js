const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    firstname: String,
    lastname: String,
    rollno: String,
    examinationRoll: String,
    mobile: String,
    address: String,
    collegeName: String,
    fatherName: String,
    motherName: String,
    course: String,
    email:String,
   });
   
   const Student = mongoose.model('Student', studentSchema);
   module.exports = Student;