// Eventos no DOM em JavaScript: Respondendo a interações do usuário

// Eventos são ações que acontecem na página web (cliques, teclado, carregamento, etc.)
// e que podemos "ouvir" e responder com código JavaScript.

// 1. Selecionar o Elemento
const meuBotao = document.querySelector("#meuBotao");
const meuInput = document.querySelector("#meuInput");
const minhaDiv = document.querySelector("#minhaDiv");

// 2. Adicionar um Event Listener (addEventListener)
// É a forma mais recomendada e flexível.

// Evento de 'click': quando o botão é clicado
meuBotao.addEventListener("click", () => {
    console.log("Botão clicado!");
    alert("Você clicou no botão!");
});

// Evento de 'input': quando o valor de um campo de entrada muda
// 'e' (ou 'event') é o objeto do evento, contém informações sobre o evento
meuInput.addEventListener("input", (e) => {
    console.log(`Texto digitado: ${e.target.value}`);
});

// Evento de 'mouseover' e 'mouseout': quando o mouse entra/sai de um elemento
minhaDiv.addEventListener("mouseover", () => {
    minhaDiv.style.backgroundColor = "lightcoral";
});

minhaDiv.addEventListener("mouseout", () => {
    minhaDiv.style.backgroundColor = "lightblue";
});

// 3. Remover um Event Listener (removeEventListener)
// Necessário quando a função de callback é nomeada
function lidarComClickDiv() {
    console.log("Div clicada uma vez!");
    // Remove o próprio listener após o primeiro clique
    minhaDiv.removeEventListener("click", lidarComClickDiv);
}
minhaDiv.addEventListener("click", lidarComClickDiv);

// 4. Prevenindo o Comportamento Padrão (event.preventDefault())
// Útil para formulários ou links que não devem seguir o comportamento padrão
const meuLink = document.querySelector("#meuLink");
meuLink.addEventListener("click", (e) => {
    e.preventDefault(); // Impede que o link navegue para outra página
    console.log("Navegação do link impedida!");
});

// 5. Delegação de Eventos (ouvindo eventos em um pai para filhos dinâmicos)
// Em vez de adicionar listeners a cada item da lista, adicionamos ao UL/OL pai.
const listaItens = document.querySelector("#lista"); // Assumindo uma <ul id="lista">

listaItens.addEventListener("click", (e) => {
    // Verifica se o clique foi em um LI dentro da UL
    if (e.target.tagName === "LI") {
        console.log(`Item clicado: ${e.target.textContent}`);
        e.target.style.textDecoration = "line-through";
    }
});

// 6. Eventos de Teclado (Keyboard Events)
const inputTexto = document.querySelector("#inputTexto"); // Supondo <input id="inputTexto">

// 'keydown': Dispara quando uma tecla é pressionada (e segurada)
inputTexto.addEventListener("keydown", (e) => {
    console.log(`Tecla pressionada (keydown): ${e.key}`);
    // e.key: o valor da tecla (ex: "Enter", "a", "Shift")
    // e.code: o código da tecla (ex: "KeyA", "Enter")
});

// 'keyup': Dispara quando uma tecla é liberada
inputTexto.addEventListener("keyup", (e) => {
    console.log(`Tecla liberada (keyup): ${e.key}`);
    if (e.key === "Enter") {
        console.log("Você pressionou Enter!");
    }
});

// 'keypress': Dispara quando uma tecla que produz um caractere é pressionada (obsoleto, prefira keydown/keyup)
// inputTexto.addEventListener("keypress", (e) => {
//     console.log(`Tecla pressionada (keypress): ${e.key}`);
// });


// 7. Eventos de Formulário (Form Events)
const meuForm = document.querySelector("#meuForm"); // Supondo <form id="meuForm">

// 'submit': Dispara quando um formulário é submetido
meuForm.addEventListener("submit", (e) => {
    e.preventDefault(); // MUITO IMPORTANTE: Previne o recarregamento da página
    console.log("Formulário submetido!");
    // Aqui você coletaria os dados do formulário e os enviaria (ex: via Fetch API)
});

// 'focus': Dispara quando um elemento (input, textarea, etc.) recebe foco
inputTexto.addEventListener("focus", () => {
    inputTexto.style.backgroundColor = "lightyellow";
    console.log("Input em foco!");
});

// 'blur': Dispara quando um elemento perde o foco
inputTexto.addEventListener("blur", () => {
    inputTexto.style.backgroundColor = ""; // Volta ao normal
    console.log("Input perdeu o foco!");
});

// 'change': Dispara quando o valor de um <input>, <select> ou <textarea> muda E o elemento perde o foco.
const selectOpcoes = document.querySelector("#selectOpcoes"); // Supondo <select id="selectOpcoes">
if (selectOpcoes) {
    selectOpcoes.addEventListener("change", (e) => {
        console.log(`Opção selecionada: ${e.target.value}`);
    });
}

// 8. Eventos de Carregamento/Redimensionamento (Load/Resize Events)

// 'DOMContentLoaded': Dispara quando o HTML foi completamente carregado e analisado,
// sem esperar por stylesheets, imagens, etc. Ideal para manipular o DOM.
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente carregado e analisado!");
    // Código para manipular o DOM com segurança deve vir aqui.
});

// 'load': Dispara quando a página INTEIRA foi carregada, incluindo todos os recursos (imagens, stylesheets).
window.addEventListener("load", () => {
    console.log("Página completamente carregada (incluindo recursos)!");
});

// 'resize': Dispara quando a janela do navegador é redimensionada
window.addEventListener("resize", () => {
    console.log(`Janela redimensionada para: ${window.innerWidth}x${window.innerHeight}`);
});

// 'scroll': Dispara quando o usuário rola a barra de rolagem
window.addEventListener("scroll", () => {
    // console.log("Página sendo rolada!");
    if (window.scrollY > 200) { // Exemplo: detecta se rolou 200px para baixo
        document.body.style.backgroundColor = "lightblue";
    } else {
        document.body.style.backgroundColor = "";
    }
});

// O RegExr (regexr.com) é uma ferramenta online interativa para testar e aprender Regex.

// No RegExr, você tem duas áreas principais:

// 1. Área de Expressão Regular (Regex):
//    Você digita seu padrão de busca aqui.
const regexExemplo = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
// Comentário para RegExr: Este Regex busca por endereços de email.
// g: flag global (encontra todas as ocorrências)
// \b: limite de palavra
// [A-Za-z0-9._%+-]+: caracteres válidos antes do @
// @: o símbolo de arroba
// [A-Za-z0-9.-]+: caracteres válidos depois do @ e antes do domínio
// \.: um ponto (precisa de escape)
// [A-Z|a-z]{2,}: 2 ou mais letras para o TLD (ex: com, org, br)

// 2. Área de Texto de Teste:
//    Você cola ou digita o texto onde o Regex será aplicado.
const textoExemplo = `
    Entre em contato com suporte@minhaempresa.com.br.
    Meu email pessoal é meu.nome@dominio.org.
    Ou ligue para (11) 98765-4321.
`;

// No RegExr, o código JS abaixo é o que você visualiza (resultados), não o que você digita lá.
// Ele mostra como você usaria o Regex em JavaScript.

const emailsEncontrados = textoExemplo.match(regexExemplo);
console.log(emailsEncontrados);
/*
No RegExr, você veria destacado:
- suporte@minhaempresa.com.br
- meu.nome@dominio.org

E na seção de resultados, algo como:
[
  "suporte@minhaempresa.com.br",
  "meu.nome@dominio.org"
]
*/

// O RegExr também fornece explicações detalhadas de cada parte do seu Regex,
// e opções para substituição e outras flags.