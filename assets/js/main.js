// See More Script
// Select all toggle buttons
const toggleButtons = document.querySelectorAll(".toggle-content");

toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the target content using data attribute
    const targetClass = button.getAttribute("data-target");
    const fullContent = document.querySelector(`.${targetClass}`);

    // Toggle content visibility
    if (
      fullContent.style.display === "none" ||
      fullContent.style.display === ""
    ) {
      fullContent.style.display = "block";
      button.textContent = "See Less...";
    } else {
      fullContent.style.display = "none";
      button.textContent = "See More...";
    }
  });
});
// document.addEventListener("DOMContentLoaded", function() {

// });
