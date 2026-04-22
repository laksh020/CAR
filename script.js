// Function to show popup
document.getElementById('rental-contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from refreshing
    
    // Show the popup
    document.getElementById('success-popup').style.display = 'flex';
    
    // Clear the form fields
    this.reset();
});

// Function to close popup
function closePopup() {
    document.getElementById('success-popup').style.display = 'none';
}