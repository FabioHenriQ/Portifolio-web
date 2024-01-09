const sections = ['#home'];
const soloElementsSkills = ['.card'];
const soloElementsProjects = ['.project-card'];
const soloElementsAbout = ['.learning-about li'];


WhatScrollReveal(sections, 2000, 'top', false);
WhatScrollReveal(soloElementsAbout, 2000, 'left', false);
WhatScrollReveal(soloElementsSkills, 1500);
WhatScrollReveal(soloElementsProjects, 1500, 'bottom');


function WhatScrollReveal(array, duration, origin = 'top', again = true) {
    window.revelar = ScrollReveal({reset:again});

    for (let i = 0; i <= array.length; i++) {
        ScrollReveal().reveal(array[i], {
            origin: origin,
            duration: duration,
            distance: '60px'
        });
    }
}
