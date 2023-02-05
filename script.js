const menuIcon = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav-menu");

// menuicon.add("click", function () {
//   nav.classList.toggle("responsive");
// });
menuIcon.addEventListener('click', function() {
    nav.classList.toggle('responsive')
})