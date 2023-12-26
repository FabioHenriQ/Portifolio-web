const state = {
   menu: {
       menuIcon: document.querySelectorAll('.menu')[0],
       boxMenuOptions: document.querySelectorAll('ul')[0],
       menuOptions: document.querySelectorAll('li'),
       imgMenu: document.querySelectorAll('img')[1],
       aboutButton: document.querySelectorAll('li a')[3],
       technologiesButton: document.querySelectorAll('li a')[4],
       projectsButton: document.querySelectorAll('li a')[5],
    },
    sections: {
        home: document.querySelector('#home'),
        about: document.querySelector('#about'),
        technologies: document.querySelector('#technologies'),
        projects: document.querySelector('#projects'),
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

state.menu.menuIcon.addEventListener('click', showMenuBox);

for (let i = 0; i <= 2; i++){
    state.menu.menuOptions[i].addEventListener('click', hiddenMenuOption);   
}

state.sections.home.addEventListener('mouseover', ()=>{
    state.menu.aboutButton.classList.remove("selected");
    state.menu.projectsButton.classList.remove("selected");
    state.menu.technologiesButton.classList.remove("selected");
})

state.sections.about.addEventListener('mouseover', ()=>{
    state.menu.aboutButton.classList.add("selected");

    state.menu.projectsButton.classList.remove("selected");
    state.menu.technologiesButton.classList.remove("selected");
})

state.sections.technologies.addEventListener('mouseover', ()=>{
    state.menu.technologiesButton.classList.add("selected");

    state.menu.projectsButton.classList.remove("selected");
    state.menu.aboutButton.classList.remove("selected");
})

state.sections.projects.addEventListener('mouseover', ()=>{
    state.menu.projectsButton.classList.add("selected");

    state.menu.aboutButton.classList.remove("selected");
    state.menu.technologiesButton.classList.remove("selected");
})

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

function sectionSelected() {
    
}

function hiddenMenuOption() {
    state.menu.boxMenuOptions.classList.add("hidden");
    state.menu.imgMenu.src = "./src/assets/icons/botao-de-menu-de-tres-linhas-horizontais-branco.png";
}

