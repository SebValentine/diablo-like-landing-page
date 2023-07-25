const portalLink = document.getElementById("portal-link");
const clickSound = document.getElementById("hamburger-sound");
let isPlaying = false;

// Function to play the sound and redirect
function playSoundAndRedirect() {
  if (!isPlaying) {
    clickSound.play();
    isPlaying = true;
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  }
}

// Add click event listener to the portal link
portalLink.addEventListener("click", playSoundAndRedirect);
