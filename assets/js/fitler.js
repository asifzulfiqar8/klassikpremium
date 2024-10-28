// Product Listing Filter Orientation
const vertical = document.querySelector(".filter-bar__orientation .vertical");
const horizontal = document.querySelector(".filter-bar__orientation .horizontal");

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
const productCat = document.querySelector(".product-listing");
let sidebarOpen = false;

const handleSidebarToggle = () => {
  filterSideBar.style.display = sidebarOpen ? "none" : "flex";
  productCat.style.justifyContent = sidebarOpen ? "center" : "space-between";
  sidebarOpen = !sidebarOpen;
};

filterCollapseBtns.forEach((collapse) => {
  collapse.addEventListener("click", handleSidebarToggle);
});
