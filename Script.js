// Get the buttons and response div
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const response = document.getElementById("response");

// Set up the "no" button behavior to make it teleport when clicked
noBtn.addEventListener("click", function() {
  noBtn.style.position = "relative";
  noBtn.style.top = "-50px";  // Moves the button up by 50px when clicked
  noBtn.disabled = true; // Disables the button after moving it
});

// Set up the "yes" button behavior to display the response
yesBtn.addEventListener("click", function() {
  response.classList.remove("hidden");  // Reveal the response text
});
