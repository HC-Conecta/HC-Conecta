// ROUTES TO PREVIOUS PAGE

const sectionNavigation = document.querySelector('#section-navigation');
const linkNavigation = document.querySelector('.section-navigation__a');

sectionNavigation.addEventListener('click', () => {
    linkNavigation.click();
})