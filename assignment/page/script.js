document.getElementById('assignment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle assignment submission logic here
    console.log('Assignment submitted by teacher');
});

document.getElementById('submit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle assignment submission logic here
    console.log('Assignment submitted by student');
});
