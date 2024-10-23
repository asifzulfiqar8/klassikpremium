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

  // For Checkout Tabs
  const chkTabs = document.querySelectorAll(".__tab-item");
  chkTabs.forEach((chkTab, index) => {
    chkTab.addEventListener("click", () => {
      chkTabs.forEach((tab, i) => {
        tab.classList.remove("active");
        if (i < index) {
          tab.classList.add("completed");
          tab.querySelector(".number").innerHTML = "";
          tab.querySelector(".number").classList.add("checked");
          tab.querySelector('.edit').classList.add('active'); 
        } else {
          tab.classList.remove("completed");
          tab.querySelector(".number").innerHTML = i + 1;
          tab.querySelector(".number").classList.remove("checked");
          tab.querySelector('.edit').classList.remove('active'); 
        }
      });
      chkTab.classList.add("active");
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

// Table pagination
let currentPage = 1;
const rowsPerPage = 10;
const totalRows = document.querySelectorAll("tbody tr").length;
const totalPages = Math.ceil(totalRows / rowsPerPage);

document
  .querySelector(".page-button:nth-child(1)")
  .addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateTable();
    }
  });

document
  .querySelector(".page-button:nth-child(3)")
  .addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateTable();
    }
  });

function updateTable() {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((row, index) => {
    row.style.display =
      index >= (currentPage - 1) * rowsPerPage &&
      index < currentPage * rowsPerPage
        ? ""
        : "none";
  });
  document.querySelector(
    ".page-info"
  ).innerText = `Page ${currentPage} of ${totalPages}`;
}
updateTable();

//  price range filter
function filterTable() {
  var select = document.getElementById("priceRange");
  var range = select.value;

  var table = document.getElementById("orderTable");
  var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

  if (range === "") {
    for (var i = 0; i < rows.length; i++) {
      rows[i].style.display = "";
    }
    return;
  }

  var rangeValues = range.split("-");
  var min = parseFloat(rangeValues[0]);
  var max = parseFloat(rangeValues[1]);
  for (var i = 0; i < rows.length; i++) {
    var priceText = rows[i].getElementsByTagName("td")[2].innerText;
    var price = parseFloat(priceText.replace("$", ""));
    if (price >= min && price <= max) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
