document.addEventListener('DOMContentLoaded', function() {
    // Form Submission
    var form = document.getElementById('appointmentForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Collect form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var number = document.getElementById('number').value;
        var department = document.getElementById('Department').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;

        // Simple validation
        if (!name || !email || !subject || !number || !department || !date || !time) {
            alert("All fields are required.");
            return;
        }

        // For demo purposes, we just show a success message. 
        // You can send the data to a server using an AJAX request.
        showSuccessMessage();
    });

    function showSuccessMessage() {
        var successBox = document.querySelector('.successBox');
        successBox.style.display = 'block';
    }

    function hideSuccessMessage() {
        var successBox = document.querySelector('.successBox');
        successBox.style.display = 'none';
    }
});
