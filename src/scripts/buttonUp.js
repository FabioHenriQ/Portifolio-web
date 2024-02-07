window.addEventListener('scroll', () => {
    let buttonUp = document.querySelectorAll('.button-up')[0];
    buttonUp.classList.toggle('show-button-up', window.scrollY > 0);

    let menuOptions = document.querySelectorAll(".options-menu-desktop a");

        
    menuOptions[0].classList.toggle('selected', window.scrollY < 500);
    menuOptions[1].classList.toggle('selected', window.scrollY > 500 && window.scrollY < 1000);
    menuOptions[2].classList.toggle('selected', window.scrollY > 1000 && window.scrollY < 1600);
    menuOptions[3].classList.toggle('selected', window.scrollY > 1600);
})