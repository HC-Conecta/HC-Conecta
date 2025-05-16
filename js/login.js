import { validator} from "./utils/login-validator.js";


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
    const containerErrorCell = document.querySelector('.container__error__cell');
    const containerError = document.querySelector('.container__error');
    containerErrorCell.innerHTML = "";
    containerError.innerHTML = '';
    try {
        const response = await fetch(BASE_URL, {method: 'GET'})

        if(response.status == 404) {
            const paragraph = document.createElement('p');
            paragraph.setAttribute('class', 'error__p');
            paragraph.innerHTML = 'Por favor, informe seu CPF.'
            containerError.appendChild(paragraph);

            const paragraphCell = document.createElement('p');
            paragraphCell.setAttribute('class', 'error__p');
            paragraphCell.innerHTML = 'Por favor, informe seu telefone.'
            containerErrorCell.appendChild(paragraphCell);
           
        }

        if(response.status === 200) {
            const data = await response.json();
            if(data.Valid && validator.validCell(cellInput) && validator.validBtnChecked(checkboxTerms)) {
                window.location = '../index.html'
            } else if (!data.Valid) {
                const paragraph = document.createElement('p');
                paragraph.setAttribute('class', 'error__p');
                paragraph.innerHTML = 'CPF incorreto. Confira os dados.'
                containerError.appendChild(paragraph);
            }
        }
    } catch (error) {
        console.log(`Erro ao pegar o cpf. ${error}`);
    }   
    
})