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


  function increment() {
    let counter = document.getElementById("counter");
    counter.value = parseInt(counter.value) + 1;
}

function decrement() {
    let counter = document.getElementById("counter");
    if (parseInt(counter.value) > 1) { 
        counter.value = parseInt(counter.value) - 1;
    }
}