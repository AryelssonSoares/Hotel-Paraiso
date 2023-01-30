function scrollSuave() {
    const linksInternos = document.querySelectorAll('.js-nav a[href^="#"]');

    function scrollSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach(link => {
        link.addEventListener('click', scrollSection);
    });
}
scrollSuave();

function scrollAnimacao() {
    const sections = document.querySelectorAll('.js-scroll');

    const metadeWindow = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach(section => {
            const topoSection = section.getBoundingClientRect().top;
            const sectionVisible = (topoSection - metadeWindow) < 0;

            if (sectionVisible) {
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
}
scrollAnimacao();
