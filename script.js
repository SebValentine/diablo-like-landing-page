document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector("nav ul");
  const clickSound = document.getElementById("click-sound");
  const hamburgerSound = document.getElementById("hamburger-sound");
  const toggleNavButton = document.getElementById("toggle-nav");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show-nav"); // Toggle the 'show-nav' class to display/hide the navigation links
    hamburgerSound.currentTime = 0;
    hamburgerSound.play();
  });

  const navLinksList = document.querySelectorAll("nav ul li a");

  navLinksList.forEach((link) => {
    link.addEventListener("click", playClickSound);
  });

  function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }

  // Show the toggle button only on screens wider than 768px (non-mobile)
  if (window.innerWidth > 768) {
    toggleNavButton.style.display = "inline-block";
  }

  toggleNavButton.addEventListener("click", function () {
    navLinks.classList.toggle("show-nav"); // Toggle the 'show-nav' class when the toggle button is clicked
    hamburgerSound.currentTime = 0;
    hamburgerSound.play();
  });
});
function toggleNav() {
  const navLinks = document.querySelector("nav ul");

  if (navLinks.classList.contains("show-nav")) {
    navLinks.classList.remove("show-nav");
  } else {
    navLinks.classList.add("show-nav");
  }
}
function toggleNav() {
  const navLinks = document.getElementById("nav-links");
  const gifToggle = document.getElementById("gif-toggle");

  // Toggle the visibility of the navigation links
  if (navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }

  // Hide the GIF when you click on it
  gifToggle.style.display = "none";
}
function playAudio() {
  const audio = document.getElementById("audio");
  audio.play();
}
const hamburgerButton = document.getElementById("hamburger");
const headerTitle = document.getElementById("header-title");

hamburgerButton.addEventListener("click", () => {
  // Toggle the visibility of the <h1> element
  headerTitle.style.display =
    headerTitle.style.display === "none" ? "block" : "none";
});
