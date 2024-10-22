document.addEventListener("DOMContentLoaded", function () {
  // For Item Counter
  const itemCountInputs = document.querySelectorAll(".item-count");
  itemCountInputs.forEach((input) => {
    input.addEventListener("input", function () {
      let currentValue = parseInt(input.value, 10);
      if (currentValue > 999) input.value = input.value.slice(0, 3);
    });
    input.addEventListener("blur", function () {
      if (parseInt(input.value, 10) > 999)
        input.value = input.value.slice(0, 3);
    });
  });

  // For toggling Filter Boxes
  let isOpen = true;
  const filterToggles = document.querySelectorAll(".filter-box-collaspe");
  filterToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      let filterBox = toggle.closest(".filter-box");
      let viewAll = filterBox.querySelector(".view-more");
      let optionBox = filterBox.querySelector(".filter-box__options");
      if (isOpen) {
        optionBox.style.height = "0";
        viewAll.style.display = "none";
        toggle.style.transform = "rotate(180deg)";
        isOpen = false;
      } else {
        optionBox.style.height = "auto";
        isOpen = true;
        toggle.style.transform = "rotate(0deg)";
        viewAll.style.display = "block";
      }
    });
  });
  // For Pagination
  const paginations = document.querySelectorAll(".pagination-item");

  paginations.forEach((pagination) => {
    pagination.addEventListener("click", () => {
      paginations.forEach((pagination) => {
        pagination.classList.remove("active");
      });
      pagination.classList.add("active");
    });
  });
});

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

let minuses = document.querySelectorAll(".minus-item");
let pluses = document.querySelectorAll(".plus-item");

// decrese count on click minuses
minuses.forEach((minus) => {
  minus.addEventListener("click", () => {
    let clossestParrent = minus.closest(".item-counter");
    let currentValue = clossestParrent.querySelector(".item-count").value || 1;
    if (currentValue > 0)
      clossestParrent.querySelector(".item-count").value =
        parseInt(currentValue) - 1;
  });
});

pluses.forEach((plus) => {
  plus.addEventListener("click", () => {
    let clossestParrent = plus.closest(".item-counter");
    let currentValue = clossestParrent.querySelector(".item-count").value || 0;
    if (currentValue < 999) {
      clossestParrent.querySelector(".item-count").value =
        parseInt(currentValue) + 1;
    }
  });
});

// plus.addEventListener("click", () => {
//   itemCount.value = parseInt(itemCount.value) + 1;
// });
// minus.addEventListener("click", () => {
//   let currentValue = parseInt(itemCount.value);
//   if (currentValue > 0) {
//     itemCount.value = currentValue - 1;
//   }
// });

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
// Off Canvas Toggle
function openOffcanvas() {
  document.getElementById("offcanvas").classList.add("open");
}

function closeOffcanvas() {
  document.getElementById("offcanvas").classList.remove("open");
}
