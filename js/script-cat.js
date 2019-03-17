var confirm_order = document.querySelector(".confirm-order");
var form_close = document.querySelector(".form-close");

var buy_item = document.querySelectorAll(".buy-item")
for (var i = 0; i < buy_item.length; i++) {
  buy_item[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    confirm_order.classList.add("display");
    confirm_order.classList.remove("none-display");
    console.log("включаем попап");
  });
}

form_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  confirm_order.classList.remove("display");
  confirm_order.classList.add("none-display");
  console.log("выключаем карту");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (confirm_order.classList.contains("display")) {
      evt.preventDefault();
      confirm_order.classList.remove("display");
      confirm_order.classList.add("none-display");
      console.log("нажимаем esc и выключаем карту");
    }
  }
});