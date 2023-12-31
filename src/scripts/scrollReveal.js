const sections = ['#home', '#about'];
const soloElementsSkills = ['.card'];
const soloElementsProjects = ['.project-card'];


WhatScrollReveal(sections, 2000, false);
WhatScrollReveal(soloElementsSkills, 2000);
WhatScrollReveal(soloElementsProjects, 2000);


function WhatScrollReveal(array, duration, again = true) {
    window.revelar = ScrollReveal({reset:again});

    for (let i = 0; i <= array.length; i++) {
        ScrollReveal().reveal(array[i], {
            duration: duration,
        });
    }
}
