const state = {
   menu: {
       menuIcon: document.querySelectorAll('.menu')[0],
       boxMenuOptions: document.querySelectorAll('ul')[0],
       menuOptions: document.querySelectorAll('li'),
       imgMenu: document.querySelectorAll('img')[1],
    },
    projects: {
        project1: {
            name: "a",
            img: "",
            tecnlogies: "",
            link: "",
        },
        project2: {
            name: "a",
            img: "",
            tecnlogies: "",
            link: "",
        },
    },
}

// ------- Menu -----------------------------------------------------
state.menu.menuIcon.addEventListener('click', showMenuBox);

for (let i = 0; i <= 2; i++){
    state.menu.menuOptions[i].addEventListener('click', hiddenMenuOption);   
}


// -------- Functions Menu ---------
function showMenuBox() {
    if (state.menu.boxMenuOptions.classList.contains('hidden')){
        state.menu.boxMenuOptions.classList.remove("hidden");
        state.menu.imgMenu.src = "./src/assets/icons/botao-fechar-branco.png";

    } else {
        state.menu.boxMenuOptions.classList.add("hidden");
        state.menu.imgMenu.src = "./src/assets/icons/botao-de-menu-de-tres-linhas-horizontais-branco.png";

    }
}

function hiddenMenuOption() {
    state.menu.boxMenuOptions.classList.add("hidden");
    state.menu.imgMenu.src = "./src/assets/icons/botao-de-menu-de-tres-linhas-horizontais-branco.png";
}
