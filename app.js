const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const Student = require('./models/Student');
const Faculty = require('./models/Faculty');
const bcrypt = require('bcrypt'); // Assuming you're using bcrypt for password hashing
const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
// const cron = require('node-cron');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/AcademicProject', { useNewUrlParser: true, useUnifiedTopology: true });


// Wait for the connection to be established
mongoose.connection.on('open', () => {
   console.log('Connected to MongoDB');
  });

app.get('/', (req, res) => {
 res.render('index');
});

//create account
app.post('/register', async (req, res) => {
   const { username, password, role, subjects, firstname, lastname, rollno, examinationRoll, mobile, address, collegeName, fatherName, motherName, course,email, teachername, department } = req.body;
   
   // Check if a user with the provided username already exists
   const existingUser = await User.findOne({ username });
   if (existingUser) {
     return res.status(400).send('Username already taken');
   }
 
   // Hash the password
   const hashedPassword = await bcrypt.hash(password, 10);
 
   const user = new User({ username, password:hashedPassword, role });
   await user.save();
  
   if (role === '10') {
      const student = new Student({
        user: user._id,
        firstname,
        lastname,
        rollno,
        examinationRoll,
        mobile,
        address,
        collegeName,
        fatherName,
        motherName,
        course,
        email,
      });
      await student.save();
   } else if (role === '30') {
      const faculty =new Faculty({
       user: user._id,
       teachername,
       department,
       subjects: subjects.split(',') // Assuming subjects are comma-separated in the request
     });
      await faculty.save();
   }
 
   res.redirect('/');
 });
 

 
 
// Add this login route
app.post('/login', async (req, res) => {
   const { username, password } = req.body;
 
   // Find the user in the database
   const user = await User.findOne({ username });
 
   // Check if user exists
   if (!user) {
     return res.status(400).send('Invalid username or password');
   }
 
   // Check if password is correct
   const validPassword = await bcrypt.compare(password, user.password);
   if (!validPassword) {
     return res.status(400).send('Invalid username or password');
   }
 
   // User logged in successfully, generate and send token
 
   const token = jwt.sign({ _id: user._id, role: user.role }, '1c87fdd3926dd6e3c086fcb3ff443931c2b8693616b3c604a9fda85adeb82cc5f1cc99c2945a081b97ff7269b86559ce29ce22bb17709c33e34c8c1ca3d4878b', { expiresIn: '30m' });
   res.send(token);
 });


 // Add this middleware
 app.use((req, res, next) => {
   const token = req.header('Authorization')?.replace('Bearer ', '');
   if (!token) return res.status(401).send('Access Denied');
 
   try {
     const verified = jwt.verify(token, '1c87fdd3926dd6e3c086fcb3ff443931c2b8693616b3c604a9fda85adeb82cc5f1cc99c2945a081b97ff7269b86559ce29ce22bb17709c33e34c8c1ca3d4878b');
     req.user = verified;
     next();
   } catch (err) {
     res.status(400).send('Invalid Token');
   }
 });

 
//  // Nodemailer setup
//  const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//      user: EMAIL_ADDRESS=yourEmail@example.com,
//      pass: process.env.EMAIL_PASSWORD,
//   },
//  });
 
//  // Function to send email reminders
//  async function sendEmailReminder(studentEmail, taskDetails) {
//   const mailOptions = {
//      from: process.env.EMAIL_ADDRESS,
//      to: studentEmail,
//      subject: 'Task Reminder',
//      text: `You have a task due on ${taskDetails.dueDate}. Please submit it by the deadline.`,
//   };
 
//   try {
//      await transporter.sendMail(mailOptions);
//      console.log('Email reminder sent successfully');
//   } catch (error) {
//      console.error('Error sending email reminder:', error);
//   }
//  }
 
//  // Schedule email reminders
//  async function scheduleEmailReminders() {
//   // Fetch tasks from the database
//   const tasks = await Task.find({ dueDate: { $gte: new Date() } });
 
//   tasks.forEach(task => {
//      const reminderTime = new Date(task.dueDate).getTime() - 24 * 60 * 60 * 1000;
//      const reminderDate = new Date(reminderTime);
 
//      cron.schedule(reminderDate, () => {
//        const studentEmails = task.students.map(studentId => /* fetch student email from database */);
 
//        studentEmails.forEach(email => {
//          sendEmailReminder(email, task);
//        });
//      });
//   });
//  }
 
//  // Call the function to schedule reminders
//  scheduleEmailReminders();
 
 app.listen(3000, () => console.log('Server running on port 3000'));
 





