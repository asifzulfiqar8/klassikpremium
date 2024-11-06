function openCartModal() {
    document.getElementById("cartModal").style.display = "block";
  }

  function closeCartModal() {
    document.getElementById("cartModal").style.display = "none";
  }

  window.onclick = function (event) {
    var modal = document.getElementById("cartModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };