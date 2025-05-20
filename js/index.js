// surprise message

const buttonSurprise = document.querySelector('.section-surprise__button');

const surpriseMessage = (frases) => {
    const sectionSurprise = document.querySelector('.section-surprise');
    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'section-surprise__p');
    const messageSurprise = Math.floor(Math.random() * frases.length);
    paragraph.innerHTML = frases[messageSurprise]
    sectionSurprise.appendChild(paragraph)
}

const motivationFrases = [
  "Você não está sozinho. Estamos aqui com você.",
  "Tudo bem ter dias difíceis. Eles também passam.",
  "Cada passo pequeno já é um grande começo.",
  "Você é importante e merece cuidado.",
  "Tem sempre alguém torcendo por você.",
  "Você já venceu muita coisa até aqui.",
  "O hoje pode ser melhor do que ontem.",
  "Seu bem-estar vem em primeiro lugar.",
  "Respira fundo. Vai ficar tudo bem.",
  "Estamos aqui para caminhar com você.",
  "Ninguém precisa enfrentar tudo sozinho.",
  "Sua vida tem valor. Você tem valor.",
  "Confie no processo. Um dia de cada vez.",
  "Pedir ajuda é um ato de coragem.",
  "Você merece carinho e atenção.",
  "Cada dia é uma nova chance de recomeçar.",
  "Você tem mais força do que imagina.",
  "Estamos do seu lado, sempre.",
  "Vai dar certo. Continue acreditando.",
  "Você é mais forte do que seus medos."
];


buttonSurprise.addEventListener('click', () => {
    buttonSurprise.classList.remove('section-surprise__button');
    buttonSurprise.classList.add('button_surprise');
    surpriseMessage(motivationFrases);
})