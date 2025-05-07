// LOGIN
const popupButton = document.querySelector('.popup__button');
const sectionPopup = document.querySelector('.section__container');
const popup = document.querySelector('#popup');

sectionPopup.addEventListener('click', () => {
    popupButton.click();
})

popupButton.addEventListener('click', () => {
    popup.click();
})

