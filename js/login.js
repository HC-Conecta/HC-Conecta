import { validBtnChecked, validCell } from "./controller/login-controller.js";

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

const btnRouter = document.querySelector('#button__router')

//VALIDATION CELL

const checkboxTerms = document.getElementById('container__checkbox');

btnRouter.addEventListener('click', async (evt) => {
    const cpfInput = document.querySelector('#form__cpf').value;
    //VALIDATION CPF
    const BASE_URL = `https://api-cpf.vercel.app/cpf/valid/${cpfInput}`;
    const cellInput = document.querySelector('#form__cell').value;
    const containerError = document.querySelector('.container__error');
    containerError.innerHTML = '';
    try {
        const response = await fetch(BASE_URL, {method: 'GET'})
        if(response.status === 200) {
            const data = await response.json();
            if(data.Valid && validCell(cellInput) && validBtnChecked(checkboxTerms)) {
                window.location = '../index.html'
            } else if (!data.Valid) {
                const paragraph = document.createElement('p');
                paragraph.setAttribute('class', 'error__p');
                paragraph.innerHTML = 'Erro ao validar o CPF. '
                containerError.appendChild(paragraph);
            } 
        }
    } catch (error) {
        console.log(`Erro ao pegar o cpf. ${error}`);
    }   
    
})