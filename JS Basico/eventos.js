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

// Outros eventos comuns:
// 'keydown', 'keyup' (teclado)
// 'submit' (formulários)
// 'load' (quando a página/recurso é carregado)
// 'scroll' (rolagem da página)