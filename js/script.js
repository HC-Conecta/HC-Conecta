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

btnRouter.addEventListener('click', async (evt) => {
    evt.preventDefault();
    const cpfInput = document.querySelector('#form__cpf').value;
    const cpf = cpfInput.replace(/\D/g, '')
    //VALIDATION CPF
    const BASE_URL = `https://api-cpf.vercel.app/cpf/valid/${cpf}`;
    const cellInput = document.querySelector('#form__cell').value;
    const containerError = document.querySelector('.container__error');
    containerError.innerHTML = '';
    try {
        const response = await fetch(BASE_URL, {method: 'GET'})
        if(response.status === 200) {
            const data = await response.json();
            if(data.Valid && validCell(cellInput)) {
                window.location = '../index.html'
            } else if (data.Valid == false && typeof data != 'string' ) {
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


