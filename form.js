// Get the modal, close button, and OK button
var modal = document.getElementById('quoteModal');
var okButton = document.getElementById('okButton');

// Show modal on form submission
document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to stay on the page
    modal.style.display = 'block';  // Display the modal
});

// Redirect to homepage when OK button is clicked
okButton.onclick = function() {
    window.location.href = 'index.html'; // Replace 'index.html' with your homepage URL if different
}
