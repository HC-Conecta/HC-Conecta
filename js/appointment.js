const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const body = accordion.querySelector('.accordion-body');

    const accordionImg = accordion.querySelector('.accordion-img');

    header.addEventListener('click', () => {
        accordionImg.classList.toggle('active')
        body.classList.toggle('active')
    })
});