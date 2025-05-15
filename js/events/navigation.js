//navigation INDEX

const sectionCalendar = document.getElementById('section-div__appointment');
const navigationCalendar = document.getElementById('navigation-appointment');

sectionCalendar.addEventListener('click', () => {
    navigationCalendar.click();
})

const sectionDoubt = document.getElementById('section-doubt');
const navigationDoubt = document.getElementById('navigation-doubt');

sectionDoubt.addEventListener('click', () => {
    navigationDoubt.click();
})

const sectionSuport = document.getElementById('section-suport');
const navigationSuport = document.getElementById('navigation-suport');

sectionSuport.addEventListener('click', () => {
    navigationSuport.click();
})

const sectionAboutUs = document.getElementById('section-aboutUs');
const navigationAboutUs = document.getElementById('navigation-aboutUs');

sectionAboutUs.addEventListener('click', () => {
    navigationAboutUs.click();
})

//Navigation LinkedIn and GitHub

const imgLinkedin = document.querySelector('#section-icon__icon');
const navigationLikedin = document.querySelector('#section-navigation-linkedin__a');

imgLinkedin.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/iago-liziero-54b81232b/'
})