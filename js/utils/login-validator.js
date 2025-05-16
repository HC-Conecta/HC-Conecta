
const validCellRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

const containerErrorCell = document.querySelector('.container__error__cell');
const containerCheckboxError = document.querySelector('.container-checkbox__error');
const containerError = document.querySelector('.container__error');

const validCell = (cell) => {
    if(!validCellRegex.test(cell)) {
        return false;
    } else {
        return true;
    }
}

const validBtnChecked = (btnChecked) => {
    if(!btnChecked.checked) {
        return false;
    } else {
        return true;
    }
}

const showMessageErrorCell = () => {
    const paragraphCell = document.createElement('p');
    paragraphCell.setAttribute('class', 'error__p');
    paragraphCell.innerHTML = 'Telefone incorreto. Confira os dados.'
    containerErrorCell.appendChild(paragraphCell);
}

const showMessageErrorCheckbox = () => {
    const paragraphCheckbox = document.createElement('p');
    paragraphCheckbox.setAttribute('class', 'error__p');
    paragraphCheckbox.innerHTML = 'Aceite os termos de uso para continuar.'
    containerCheckboxError.appendChild(paragraphCheckbox);
}

const showMessageErrorInputsNull = () => {
    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'error__p');
    paragraph.innerHTML = 'Por favor, informe seu CPF.'
    containerError.appendChild(paragraph);

    const paragraphCell = document.createElement('p');
    paragraphCell.setAttribute('class', 'error__p');
    paragraphCell.innerHTML = 'Por favor, informe seu telefone.'
    containerErrorCell.appendChild(paragraphCell);
}

const showMessageErrorCpf = () => {
    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'error__p');
    paragraph.innerHTML = 'CPF incorreto. Confira os dados.'
    containerError.appendChild(paragraph);
}


export const validator = {
    validCell,
    validBtnChecked,   
    showMessageErrorInputsNull,
    showMessageErrorCpf,
    showMessageErrorCell,
    showMessageErrorCheckbox,
}
