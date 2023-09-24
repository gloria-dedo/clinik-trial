// Define a function to handle the appointment link click event
function goToAppointment() {
    window.location.href = 'app.html'; // Redirect to app.html
}

// Add an event listener to the appointment link
document.addEventListener('DOMContentLoaded', function() {
    var appointmentLink = document.querySelector('.dropdown-item'); // Assuming the link has a class of "dropdown-item"
    appointmentLink.addEventListener('click', goToAppointment);
});