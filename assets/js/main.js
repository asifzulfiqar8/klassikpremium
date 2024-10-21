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
// For Radio Buttons
document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
  radio.addEventListener("click", function () {
    if (this.checked) {
      if (this.getAttribute("data-checked") === "true") {
        this.checked = false;
        this.setAttribute("data-checked", "false");
      } else {
        this.setAttribute("data-checked", "true");
      }
    }
    document
      .querySelectorAll('input[type="radio"]')
      .forEach(function (otherRadio) {
        if (otherRadio !== radio) {
          otherRadio.setAttribute("data-checked", "false");
        }
      });
  });
});
// Item Counter

let minus = document.getElementById("minus-item");
let plus = document.getElementById("plus-item");
let itemCount = document.getElementById("item-count");

plus.addEventListener("click", () => {
  itemCount.value = parseInt(itemCount.value) + 1;
});
minus.addEventListener("click", () => {
  let currentValue = parseInt(itemCount.value);
  if (currentValue > 0) {
    itemCount.value = currentValue - 1;
  }
});

// Product Page Tabs
let Tabs = document.querySelectorAll(".product-tabs__item");
let Sections = document.querySelectorAll(".product-content__section");
Tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    Tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    Sections.forEach((section) => {
      section.classList.remove("active");
    });
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
  });
});
