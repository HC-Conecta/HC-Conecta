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

btnRouter.addEventListener('click', async () => {
    const cpfInput = document.querySelector('#form__cpf').value;
    const cpf = cpfInput.replace(/\D/g, '')
    const BASE_URL = `https://api-cpf.vercel.app/cpf/valid/${cpf}`;
    
    try {
        const response = await fetch(BASE_URL, {method: 'GET'})
        if(response.status === 200) {
            const data = await response.json();
            if(data.Valid) {
                window.location = '../index.html';
            } else if (data.Valid == false && data != 13 && typeof data != 'string' ) {
                const containerError = document.querySelector('.container__error');
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
