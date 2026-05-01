const rentalForm = document.getElementById('rental-contact-form');
const successPopup = document.getElementById('success-popup');

rentalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(rentalForm);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(rentalForm.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Show the "Request Received!" popup from line 338
            successPopup.style.display = 'flex';
            rentalForm.reset();
        } else {
            alert("Submission failed. Please try again.");
        }
    } catch (error) {
        alert("An error occurred. Check your internet connection.");
    }
});

// Function to close the popup as referenced in line 343
function closePopup() {
    successPopup.style.display = 'none';
}
