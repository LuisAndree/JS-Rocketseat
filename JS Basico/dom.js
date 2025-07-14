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

// Manipulando Elementos do DOM: Alterando HTML, CSS e Atributos

// 1. Selecionar um Elemento (usando querySelector, como visto antes)
const tituloPrincipal = document.querySelector("#titulo");
const botaoAdicionar = document.querySelector(".btn-add");
const listaItens = document.querySelector("#lista"); // Uma ul/ol

// 2. Alterar Conteúdo de Texto (textContent ou innerHTML)
// textContent: Apenas texto, ignora tags HTML (mais seguro contra XSS)
tituloPrincipal.textContent = "Novo Título da Página";

// innerHTML: Pode conter e renderizar HTML (cuidado com segurança!)
let nomeProduto = "Notebook";
let precoProduto = 2500;
// Adicionando HTML dinamicamente ao elemento com ID 'info-produto'
document.querySelector("#info-produto").innerHTML = `
    <h2>${nomeProduto}</h2>
    <p>Preço: R$ ${precoProduto.toFixed(2)}</p>
`;

// 3. Alterar Estilos CSS (style propriedade)
tituloPrincipal.style.color = "blue";
tituloPrincipal.style.fontSize = "36px";
tituloPrincipal.style.backgroundColor = "#f0f0f0";

// 4. Adicionar/Remover Classes CSS (classList)
// Útil para aplicar estilos definidos no CSS
botaoAdicionar.classList.add("ativo"); // Adiciona a classe 'ativo'
// botaoAdicionar.classList.remove("inativo"); // Remove a classe 'inativo'
// botaoAdicionar.classList.toggle("destaque"); // Adiciona se não tiver, remove se tiver

// 5. Alterar/Definir Atributos
// setAttribute(nome, valor): Define um atributo
botaoAdicionar.setAttribute("data-id", "12345");
// getAttribute(nome): Obtém o valor de um atributo
console.log(botaoAdicionar.getAttribute("data-id")); // Saída: 12345
// removeAttribute(nome): Remove um atributo
// botaoAdicionar.removeAttribute("data-id");

// 6. Criar Novos Elementos (createElement)
const novoItemLista = document.createElement("li"); // Cria um elemento <li>
novoItemLista.textContent = "Item Dinâmico"; // Adiciona texto a ele
novoItemLista.classList.add("item-lista"); // Adiciona uma classe

// 7. Adicionar Elementos ao DOM (appendChild, prepend, insertBefore)
listaItens.appendChild(novoItemLista); // Adiciona o novo item como ÚLTIMO filho da lista

// 8. Remover Elementos (remove)
// Criar um elemento para remover depois
const itemParaRemover = document.createElement("li");
itemParaRemover.textContent = "Este item será removido";
listaItens.appendChild(itemParaRemover);

// Remove o item após 2 segundos
setTimeout(() => {
    if (itemParaRemover) {
        itemParaRemover.remove();
        console.log("Item removido!");
    }
}, 2000);