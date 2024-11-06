let modal = document.getElementById("cartModal");
let open = false;
let cartIcon = document.querySelector(".cart-icon");

cartIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!open) {
    modal.style.display = "block";
    open = true;
    // console.log("Modal opened");
  }
});

document.body.addEventListener("click", (event) => {
  // Check if the click is outside the modal and cart icon
  if (open && !modal.contains(event.target) && event.target !== cartIcon) {
    modal.style.display = "none";
    open = false;
    // console.log("Modal closed");
  }
});

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
