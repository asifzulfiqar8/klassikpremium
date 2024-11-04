function openOffcanvas() {
    document.getElementById("offcanvas").classList.add("open");
  }
  
  function closeOffcanvas() {
    document.getElementById("offcanvas").classList.remove("open");
  }
  
  function openModal() {
    closeOffcanvas();
    document.getElementById("listModalpreview").style.display = "block";
    document.getElementById("modalOverlay").style.display = "flex"; 
    document.body.classList.add("no-scroll"); 
  }
  
  function closeModal() {
    document.getElementById("listModalpreview").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none"; 
    document.body.classList.remove("no-scroll"); 
  }
  document
    .getElementById("searchInput")
    .addEventListener("click", openModal);
  document
    .getElementById("searchIcon")
    .addEventListener("click", openModal);
  
  window.onclick = function (event) {
    const modal = document.getElementById("listModalpreview");
    const overlay = document.getElementById("modalOverlay");
    if (event.target === modal || event.target === overlay) {
      closeModal();
    }
  };