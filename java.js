const header = document.querySelector("Header");

window.addEventListener("scroll"), function () {
    header.classList.toggle ("Sticky", this.window.scrollY > 0);
}

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-bx');
    navmenu.classList.toggle('open');
}