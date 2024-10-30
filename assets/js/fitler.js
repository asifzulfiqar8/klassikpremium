// Product Listing Filter Orientation
const vertical = document.querySelector(".filter-bar__orientation .vertical");
const horizontal = document.querySelector(
  ".filter-bar__orientation .horizontal"
);

vertical.addEventListener("click", () => {
  vertical.classList.add("active");
  horizontal.classList.remove("active");
});

horizontal.addEventListener("click", () => {
  horizontal.classList.add("active");
  vertical.classList.remove("active");
});

// Sort Modal
const sortBtns = document.querySelectorAll(".filter-bar__sort");

sortBtns.forEach((btn) => {
  const sortModal = btn.querySelector(".sort__select");
  let isSortOpen = false;

  btn.addEventListener("click", (event) => {
    sortBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.querySelector(".sort__select").style.display = "none";
        otherBtn.isSortOpen = false;
      }
    });

    sortModal.style.display = isSortOpen ? "none" : "flex";
    isSortOpen = !isSortOpen;
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (isSortOpen && !btn.contains(event.target)) {
      sortModal.style.display = "none";
      isSortOpen = false;
    }
  });
});

// Filter Sidebar Toggle
const filterSideBar = document.querySelector(".filter-sidebar");
const filterCollapseBtns = document.querySelectorAll(".filter-collapse");
// const productCat = document.querySelector(".product-listing");
let sidebarOpen = false;

// Function to toggle sidebar visibility on smaller screens
const handleSidebarToggle = () => {
  if (window.matchMedia("(max-width: 1100px)").matches) {
    filterSideBar.style.display = sidebarOpen ? "none" : "flex";
    sidebarOpen = !sidebarOpen;
  }
};

// Function to update sidebar and productCat styles based on screen width
const updateLayoutForScreenSize = () => {
  if (window.matchMedia("(max-width: 1100px)").matches) {
    filterSideBar.style.display = sidebarOpen ? "flex" : "none";
    console.log("mobile");
  } else {
    filterSideBar.style.display = "flex";
    console.log("Desktop");
  }
};

updateLayoutForScreenSize();

window.addEventListener("resize", updateLayoutForScreenSize);

filterCollapseBtns.forEach((collapse) => {
  collapse.addEventListener("click", handleSidebarToggle);
});
