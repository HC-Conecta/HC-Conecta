
# HC Conecta

**HC Conecta** é um projeto universitário desenvolvido para facilitar a navegação digital de pacientes do Hospital das Clínicas, especialmente aqueles com baixa afinidade com tecnologia.  
O sistema oferece páginas intuitivas, suporte emocional, agendamento de consultas e informações relevantes.

**Link do site**: https://hc-conecta.vercel.app/pages/login.html

## Integrantes - Turma 1TDSPG
Iago Liziero - **RM:** 56403
Vitor Dias - **RM:** 565422
Iago Liziero - **RM:** 565760

---

## Estrutura de Pastas

```

HC-Conecta/
├── index.html
├── assets/
│ ├── img/
│ ├── img-aboutUs/
│ └── img-socials/
├── css/
│ ├── aboutUs/
│ │ └── aboutUs.css
│ ├── appointment/
│ │ └── appointment.css
│ ├── discover/
│ │ └── discover.css
│ ├── doubt/
│ │ └── doubt.css
│ ├── guide/
│ │ └── guide.css
│ ├── index/
│ │ └── index.css
│ ├── login/
│ │ └── login.css
│ └── support/
│ ├── globals.css
│ └── reset.css
├── js/
│ ├── events/
│ │ ├── navigation-aboutUs.js
│ │ ├── navigation-login.js
│ │ ├── navigation.js
│ │ └── previousPage.js
│ └── utils/
│ ├── accordion.js
│ ├── login-validator.js
│ ├── index.js
│ └── login.js
├── pages/
│ ├── aboutUs.html
│ ├── appointment.html
│ ├── discover.html
│ ├── doubt.html
│ ├── guide.html
│ ├── login.html
│ ├── support.html
│ └── index.html
└── index.html

````

---

## Páginas

| Página             | Descrição                                                                 |
|--------------------|---------------------------------------------------------------------------|
| `index.html`       | Página inicial com visão geral e acesso rápido às principais funções.     |
| `aboutUs.html`     | Apresentação da equipe e propósito do projeto.                            |
| `appointment.html` | Agendamento de consultas e serviços médicos.                              |
| `discover.html`    | Descoberta de funcionalidades e dicas úteis.                              |
| `doubt.html`       | Perguntas frequentes e resolução de dúvidas comuns.                       |
| `guide.html`       | Guia completo de como usar o site de forma simples.                       |
| `login.html`       | Tela de identificação dos pacientes/usuários.                   |
| `support.html`     | Canal de contato.                                 |

---

## Estilos

Os estilos CSS estão organizados por página em subpastas dentro de `/css`.  
Além disso, dois arquivos principais dão suporte global ao projeto:

- `globals.css` – Variáveis de CSS.  
- `reset.css` – Reset de estilos nativos dos navegadores.

---

##  Scripts

A lógica JavaScript do projeto está dividida em:

- `/utils/index.js` – Scripts gerais e funções reutilizáveis.
- `/utils/login.js` – Scripts dedicados à autenticação de usuários.
- `/events/` – Pasta reservada para eventos específicos do DOM e interações.

---

## Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/HC-Conecta/hc-conecta.git
````

Acesse a pasta do projeto:

```bash
cd hc-conecta
```

Abra o arquivo `login.html` com um navegador de sua escolha
(pode clicar duas vezes no arquivo ou usar uma extensão como "Live Server" no VS Code).

---

## Equipe

Desenvolvido por alunos da **FIAP**  como parte do Challenge
voltado à inclusão digital de pacientes no sistema de saúde.

