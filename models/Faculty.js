const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    teachername: String,
    department: String,
    subjects: [String]
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
