const express = require('express');
const router = express.Router();

// Assignment Model
const Assignment = require('../models/Assignment');

// @route GET api/assignments
// @desc Get All Assignments
// @access Public
router.get('/', (req, res) => {
    Assignment.find()
        .sort({ date: -1 })
        .then(assignments => res.json(assignments))
});

// @route POST api/assignments
// @desc Create An Assignment
// @access Public
router.post('/', (req, res) => {
    const newAssignment = new Assignment({
        title: req.body.title,
        description: req.body.description,
        subject: req.body.subject,
        semester: req.body.semester,
        deadline: req.body.deadline
    });

    newAssignment.save().then(assignment => res.json(assignment));
});


module.exports = router;
