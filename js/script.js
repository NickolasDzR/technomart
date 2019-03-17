var link_delivers = document.querySelector(".link_delivers");
var link_garanties = document.querySelector(".link_garanties");
var link_credit = document.querySelector(".link_credit");

var effect_delivers = document.querySelector(".delivers");
var effect_garanties = document.querySelector(".garanties");
var effect_credit = document.querySelector(".credit");

var popup_del = document.querySelector(".delivers-cont");
var popup_gar = document.querySelector(".garanties-cont");
var popup_cre = document.querySelector(".credit-cont");



link_delivers.addEventListener("mouseover", function (evt) {
  link_delivers.classList.add("hover");
  console.log('мышка наведена');
});

link_delivers.addEventListener("mouseout", function (evt) {
  link_delivers.classList.remove("hover");
  console.log('мышка наведена');
});

link_garanties.addEventListener("mouseover", function (evt) {
  link_garanties.classList.add("hover");
  console.log('мышка наведена');
});

link_garanties.addEventListener("mouseout", function (evt) {
  link_garanties.classList.remove("hover");
  console.log('мышка наведена');
});

link_credit.addEventListener("mouseover", function (evt) {
  link_credit.classList.add("hover");
  console.log('мышка наведена');
});

link_credit.addEventListener("mouseout", function (evt) {
  link_credit.classList.remove("hover");
  console.log('мышка наведена');
});

link_delivers.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_del.classList.add("display");
  popup_gar.classList.remove("display");
  popup_cre.classList.remove("display");
  effect_delivers.classList.add("li-effect");
  effect_garanties.classList.remove("li-effect");
  effect_credit.classList.remove("li-effect");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

link_garanties.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_gar.classList.add("display");
  popup_del.classList.remove("display");
  popup_cre.classList.remove("display");
  effect_garanties.classList.add("li-effect");
  effect_delivers.classList.remove("li-effect");
  effect_credit.classList.remove("li-effect");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

link_credit.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_cre.classList.add("display");
  popup_del.classList.remove("display");
  popup_gar.classList.remove("display");
  effect_credit.classList.add("li-effect");
  effect_garanties.classList.remove("li-effect");
  effect_delivers.classList.remove("li-effect");
  console.log("включаем popup добавляя form-show и удаляя form-unshow");
});

var map_frame = document.querySelector(".map");
var popup_map = document.querySelector(".map-popup");
var map_close = document.querySelector(".map-close");

map_frame.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.add("display");
  popup_map.classList.remove("none-display");
  console.log("включаем карту");
});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.remove("display");
  popup_map.classList.add("none-display");
  console.log("выключаем карту");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup_map.classList.contains("display")) {
      evt.preventDefault();
      popup_map.classList.remove("display");
      popup_map.classList.add("none-display");
      console.log("нажимаем esc и выключаем карту");
    }
  }
});

var popup_button = document.querySelector(".popup-button");
var popup = document.querySelector(".popup");
var popup_close = document.querySelector(".popup-close");

popup_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("display");
  popup.classList.remove("none-display");
  console.log("включаем попап");
});

popup_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("display");
  popup.classList.add("none-display");
  console.log("выключаем карту");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("display")) {
      evt.preventDefault();
      popup.classList.remove("display");
      popup.classList.add("none-display");
      console.log("нажимаем esc и выключаем карту");
    }
  }
});

/*

var send_form = document.querySelector(".send-form");

var your_name = popup.querySelector("[name=your-name]");
var your_email = popup.querySelector("[name=your-email]");
var your_text = popup.querySelector("[name=your-text]");

send_form.addEventListener("submit", function (evt) {
  if (!your_name.value || !your_email.value || !your_text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести пароль");
  }
});

*/

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

