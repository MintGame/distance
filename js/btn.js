const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");

const otherBtn = document.querySelector(".other-link");
const other = document.querySelector(".see-more");
const link = document.querySelector(".menu-sidebar");
// const otherActive = document.querySelector(".see-more" && ".active"):

menuBtn.addEventListener('click', function() {
    menu.classList.toggle("active");
});

// otherBtn.addEventListener('mouseover', function() {
//     other.classList.add("active");
// });

// link.addEventListener('mouseout', function() {
//     other.classList.remove("active");
// });
