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

const validCellRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

const validCell = (cell) => {
    const containerError = document.querySelector('.container__error__cell');
    containerError.innerHTML = '';
    if(!validCellRegex.test(cell)) {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'error__p');
        paragraph.innerHTML = 'Erro ao validar o telefone.'
        containerError.appendChild(paragraph);
        return false;
    } else {
        return true;
    }
}



const validBtnChecked = (btnChecked) => {
    const containerCheckboxError = document.getElementById('container-checkbox__error');
    containerCheckboxError.innerHTML = '';
    if(!btnChecked.checked) {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'error__p');
        paragraph.innerHTML = 'Você precisa aceitar os termos de uso. '
        containerCheckboxError.appendChild(paragraph);
    } else {
        return true;
    }
}

const btnChecked = document.getElementById('container__checkbox');

btnRouter.addEventListener('click', async (evt) => {
    evt.preventDefault();
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
            if(data.Valid && validCell(cellInput) && validBtnChecked(btnChecked)) {
                window.location = '../index.html'
            } else if (!data.Valid && typeof data != 'string') {
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

