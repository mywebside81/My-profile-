// Function to toggle the visibility of PhonePe button and enlarge profile photo
function toggleProfileAndPhonePe() {
    const phonePeButton = document.getElementById('phonepe-button');
    const profilePhoto = document.getElementById('profile-photo');

    // Toggle phonepe button visibility
    phonePeButton.classList.toggle('hidden');
    
    // Toggle profile photo size
    profilePhoto.classList.toggle('fullscreen');
}

// Function to simulate opening PhonePe app with deep link
function openPhonePeApp() {
    // This will be handled by the anchor tag deep link
}
