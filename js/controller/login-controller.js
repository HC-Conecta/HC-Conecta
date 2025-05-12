
const validCellRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

export const validCell = (cell) => {
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

export const validBtnChecked = (btnChecked) => {
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