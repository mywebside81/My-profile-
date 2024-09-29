// Toggle profile photo to fullscreen
const profilePhoto = document.getElementById('profile-photo');
const profileImg = document.getElementById('profile-img');

profilePhoto.addEventListener('click', () => {
    profilePhoto.classList.toggle('fullscreen');
});

// Change text every 2 seconds
const changingText = document.getElementById('changing-text');
const texts = ["Web Developer", "Gamer"];
let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    changingText.textContent = texts[index];
}, 2000);
