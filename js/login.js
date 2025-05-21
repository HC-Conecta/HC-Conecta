import { validator} from "./utils/login-validator.js";

// LOGIN
const btnRouter = document.querySelector('#button__router')

//VALIDATION CELL

const checkboxTerms = document.getElementById('container__checkbox');
const containerCheckboxError = document.getElementById('container-checkbox__error');
const containerError = document.querySelector('.container__error');
const containerErrorCell = document.querySelector('.container__error__cell');

btnRouter.addEventListener('click', async (evt) => {
    const cpfInput = document.querySelector('#form__cpf').value;
    //VALIDATION CPF
    const BASE_URL = `https://api-cpf.vercel.app/cpf/valid/${cpfInput}`;
    const cellInput = document.querySelector('#form__cell').value;

    const isValidCell = validator.validCell(cellInput);
    const isValidCheckbox = validator.validBtnChecked(checkboxTerms)


    containerErrorCell.innerHTML = "";
    containerError.innerHTML = '';
    containerCheckboxError.innerHTML = '';
    try {
        const response = await fetch(BASE_URL, {method: 'GET'})

        if(response.status == 404 ) {
            validator.showMessageErrorInputsNull();
        }

        if(response.status === 200) {
            const data = await response.json();
            if(data.Valid && isValidCell && isValidCheckbox) {
                window.location = '../index.html'
            } else {
                if (!data.Valid) {
                    validator.showMessageErrorCpf();
                }
                if (!isValidCell) {
                    validator.showMessageErrorCell();
                }
                if (!isValidCheckbox) {
                    validator.showMessageErrorCheckbox();
                }
            }
        }
    } catch (error) {
        console.log(error);
    }   
    
})