const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AssignmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = Assignment = mongoose.model('assignment', AssignmentSchema);
