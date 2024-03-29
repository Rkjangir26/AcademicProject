const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
let assignments = [];

// Endpoint for creating an assignment
app.post('/api/assignments', (req, res) => {
 const assignment = req.body;
 assignments.push(assignment);
 res.status(201).send(assignment);
});

// Endpoint for retrieving all assignments
app.get('/api/assignments', (req, res) => {
 res.send(assignments);
});
