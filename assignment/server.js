const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const assignmentRoutes = require('./routes/assignmentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assignmentApp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api/assignments', assignmentRoutes);
app.use('/api/notifications', notificationRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
