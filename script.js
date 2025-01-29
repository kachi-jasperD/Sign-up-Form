
const paragraph_content = document.querySelector(".content p");
const mediaQuery = window.matchMedia("(max-width: 600px)");

// Function to update paragraph content based on media query
function updateContent() {
  if (mediaQuery.matches) {
    paragraph_content.innerHTML =
      "Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere";
  } else {
    paragraph_content.innerHTML =
      "Start benefiting from the wellness experience. For companies looking on increasing productivity, and improving organization wellness.";
  }
}

// Function to reload the page
function reloadPage() {
  location.reload();
}

// Debounce function to limit how often the reload occurs
let resizeTimeout;
function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    reloadPage();
  }, 500); // Adjust the timeout duration as needed (in milliseconds)
}

// Initial content update
updateContent();

// Add event listeners
mediaQuery.addEventListener("change", () => {
  updateContent(); // Update content when the media query matches
  reloadPage(); // Reload the page when the media query changes
});

window.addEventListener("resize", handleResize); // Reload on resize
