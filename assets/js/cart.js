let modal = document.getElementById("cartModal");
let open = false;
let cartIcon = document.querySelector(".cart-icon");

cartIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!open) {
    modal.style.display = "block";
    open = true;
  }
});

document.body.addEventListener("click", (event) => {
  if (open && !modal.contains(event.target) && event.target !== cartIcon) {
    modal.style.display = "none";
    open = false;
  }
});

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
