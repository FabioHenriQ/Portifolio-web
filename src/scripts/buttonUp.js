window.addEventListener('scroll', () => {
    let buttonUp = document.querySelectorAll('.button-up')[0];

    buttonUp.classList.toggle('show-button-up', window.scrollY > 0);
})
