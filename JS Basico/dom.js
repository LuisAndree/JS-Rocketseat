// DOM Query Selector: Selecionando elementos HTML com JavaScript

// O método querySelector() retorna o PRIMEIRO elemento que corresponde
// a um grupo especificado de seletores CSS.

// 1. Selecionar por ID (#)
// Seleciona o elemento com o ID "meuBotao"
const meuBotao = document.querySelector("#meuBotao");
console.log(meuBotao); // Irá exibir o elemento <button id="meuBotao">

// 2. Selecionar por Classe (.)
// Seleciona o PRIMEIRO elemento com a classe "item-lista"
const primeiroItem = document.querySelector(".item-lista");
console.log(primeiroItem); // Irá exibir o primeiro <li> com essa classe

// 3. Selecionar por Tag (nome da tag)
// Seleciona o PRIMEIRO parágrafo (<p>)
const primeiroParagrafo = document.querySelector("p");
console.log(primeiroParagrafo); // Irá exibir o primeiro <p>

// 4. Selecionar por Atributo ([atributo="valor"])
// Seleciona o elemento com o atributo 'data-info' igual a 'extra'
const elementoComAtributo = document.querySelector('[data-info="extra"]');
console.log(elementoComAtributo);

// 5. Selecionar elementos aninhados (combinando seletores CSS)
// Seleciona o <span> dentro de um <div> com a classe "container"
const spanNoContainer = document.querySelector("div.container span");
console.log(spanNoContainer);

// 6. Adicionar um Event Listener ao elemento selecionado
if (meuBotao) { // Sempre verifique se o elemento existe antes de usá-lo
    meuBotao.addEventListener("click", () => {
        alert("Botão clicado!");
    });
}

// Para selecionar TODOS os elementos que correspondem a um seletor, use querySelectorAll()
// querySelectorAll() retorna uma NodeList (similar a um array)
const todosItens = document.querySelectorAll(".item-lista");
console.log(todosItens); // Uma NodeList de todos os <li> com a classe "item-lista"

// Você pode iterar sobre a NodeList (como um array)
todosItens.forEach(item => {
    item.style.color = "blue"; // Muda a cor do texto de cada item da lista para azul
});