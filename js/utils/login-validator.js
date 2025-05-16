
const validCellRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

const validCell = (cell) => {
    const containerError = document.querySelector('.container__error__cell');
    containerError.innerHTML = '';
    if(!validCellRegex.test(cell)) {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'error__p');
        paragraph.innerHTML = 'Telefone incorreto. Confira os dados.'
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
        paragraph.innerHTML = 'Aceite os termos de uso para continuar.'
        containerCheckboxError.appendChild(paragraph);
    } else {
        return true;
    }
}


export const validator = {
    validCell,
    validBtnChecked,

}