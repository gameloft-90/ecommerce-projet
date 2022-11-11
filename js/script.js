var tour;
function init() {
    tour = document.getElementById("tour");
    BTour.onclick = function () {
        if (ATour.value == "do a barrel roll") {
            tour.classList.add("rotation");
            setTimeout(function () {
                tour.classList.remove("rotation");
            }, 5000);
        }
    }
}
window.addEventListener("load", init, false);


const menuHamburger = document.querySelector(".hamburger-menu")
const navLinks = document.querySelector(".link")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})