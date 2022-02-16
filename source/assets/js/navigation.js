const btnResize = document.querySelector(".btn__resize");
const navigation = document.querySelector(".navigation");

btnResize.addEventListener('click', () => {
    navigation.classList.toggle("-small");
})