function openCartModal() {
  document.getElementById("cartModal").style.display = "block";
}

function closeCartModal() {
  document.getElementById("cartModal").style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("cartModal");
  if (event.target == modal) {
    closeCartModal();
  }
};

window.onresize = function () {
  if (window.innerWidth < 1100) {
    closeCartModal();
  }
};

// window.onscroll = function () {
//   closeCartModal();
// };


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