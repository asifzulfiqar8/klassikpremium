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


function increment(button) {
  let counterInput = button.closest(".counter-cart").querySelector(".counter-input");
  counterInput.value = parseInt(counterInput.value) + 1;
}

function decrement(button) {
  let counterInput = button.closest(".counter-cart").querySelector(".counter-input");
  if (parseInt(counterInput.value) > 1) {
      counterInput.value = parseInt(counterInput.value) - 1;
  }
}
