const portalLink = document.getElementById("portal-link");
const clickSound = document.getElementById("hamburger-sound");
let isPlaying = false;

// Add click and touchend event listener to the portal link
portalLink.addEventListener("click", handleClick);
portalLink.addEventListener("touchend", handleClick);

// Function to handle click/touch events
function handleClick(event) {
  event.preventDefault(); // Prevent the default link behavior on mobile devices

  if (!isPlaying) {
    clickSound.play();
    isPlaying = true;
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  }
}
