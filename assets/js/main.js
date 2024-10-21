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
// Accordion Script
document.addEventListener("DOMContentLoaded", () => {
  const togglers = document.querySelectorAll("[data-toggle]");

  togglers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selector = e.currentTarget.dataset.toggle;
      const block = document.querySelector(`${selector}`);
      if (e.currentTarget.classList.contains("active")) {
        block.style.maxHeight = "";
      } else {
        block.style.maxHeight = block.scrollHeight + "px";
      }

      e.currentTarget.classList.toggle("active");
    });
  });
});
