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