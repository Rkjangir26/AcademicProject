const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 username: String,
 password: String,
 role: Number, // 10 for student, 30 for teacher
 createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
