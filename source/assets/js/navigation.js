const btnResize = document.querySelector(".btn__resize");
const navigation = document.querySelector(".navigation");
const dropdowns = document.querySelectorAll(".js-dropdown");

btnResize.addEventListener('click', () => {
    navigation.classList.toggle("-small");
})

dropdowns.forEach( dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle("open");
        dropdown.classList.toggle("active");
    })
})

function removeClassOpen() {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
    })
}
function removeClassActive() {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
    })
}