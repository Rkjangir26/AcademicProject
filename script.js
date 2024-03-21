// // script.js

// // Smooth scrolling for navigation links
// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll("nav ul li a");

//     navLinks.forEach((link) => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute("href");
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });
//             }
//         });
//     });
// });

// // Form validation
// const contactForm = document.getElementById("contact-form");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");

// contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const nameValue = nameInput.value.trim();
//     const emailValue = emailInput.value.trim();

//     if (nameValue === "") {
//         alert("Please enter your name.");
//         nameInput.focus();
//         return;
//     }

//     if (!isValidEmail(emailValue)) {
//         alert("Please enter a valid email address.");
//         emailInput.focus();
//         return;
//     }

//     // Submit the form (you can add an AJAX request here)
//     alert("Form submitted successfully!");
//     contactForm.reset();
// });

// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }



document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form validation for Sign up and Login
    const validateForm = (form) => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let inputs = form.querySelectorAll('input');
            inputs.forEach(input => {
                if (input.value === '') {
                    alert('All fields must be filled out');
                    return false;
                }
            });
            alert('Form submitted successfully');
            form.reset();
        });
    };

    // Update Teacher and Student Corners
    const updateCorners = () => {
        let teacherCorner = document.querySelector('.teacher-corner');
        let studentCorner = document.querySelector('.student-corner');

        // Fetch and display content dynamically
        // For example, fetch notes and assignments from server and display them
        // This is just a placeholder. Replace with actual fetch request.
        fetch('https://api.example.com/notes')
            .then(response => response.json())
            .then(data => {
                teacherCorner.innerHTML = data.notes;
                studentCorner.innerHTML = data.assignments;
            })
            .catch(error => console.error('Error:', error));
    };

    // Department interaction
    document.querySelectorAll('.departments div').forEach(dept => {
        dept.addEventListener('click', () => {
            // Display department information
            // For example, fetch department info from server and display it
            // This is just a placeholder. Replace with actual fetch request.
            fetch('https://api.example.com/departments')
                .then(response => response.json())
                .then(data => {
                    dept.innerHTML = data.departmentInfo;
                })
                .catch(error => console.error('Error:', error));
        });
    });

    // Call functions to initialize the page
    updateCorners();

    // Sign up and Login form submission
    let signupForm = document.querySelector('#signup-form');
    let loginForm = document.querySelector('#login-form');
    validateForm(signupForm);
    validateForm(loginForm);
});
