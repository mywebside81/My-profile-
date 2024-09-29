// Function to toggle the visibility of PhonePe button and enlarge profile photo
function toggleProfileAndPhonePe() {
    const phonePeButton = document.getElementById('phonepe-button');
    const profilePhoto = document.getElementById('profile-photo');

    // Toggle phonepe button visibility
    phonePeButton.classList.toggle('hidden');
    
    // Toggle profile photo size
    profilePhoto.classList.toggle('fullscreen');
}

// Function to simulate opening PhonePe app and showing QR code for scanning
function openPhonePeApp() {
    // Simulate QR code scanner
    const qrWindow = window.open("", "QR Code Scanner", "width=300,height=300");
    qrWindow.document.write('<img src="QR.png" alt="QR Code" style="width:100%;height:100%;">');
}
