// Tipos de Funções em JavaScript: Formas de criar e usar funções

// 1. Função Nomeada (Function Declaration)
//   - Definida com a palavra 'function' e um nome.
//   - Sofre 'hoisting' (pode ser chamada antes de sua declaração no código).
function calcularSoma(a, b) {
    return a + b;
}
console.log(calcularSoma(2, 3)); // 5

// 2. Função Anônima (Function Expression)
//   - Uma função sem nome, atribuída a uma variável.
//   - Não sofre 'hoisting' (precisa ser definida antes de ser usada).
const saudacao = function(nome) {
    console.log(`Olá, ${nome}!`);
};
saudacao("Alice"); // Olá, Alice!

// 3. Arrow Function (Função Seta - ES6)
//   - Sintaxe mais concisa, especialmente para funções curtas.
//   - Não possui seu próprio 'this' (herda do escopo pai), ideal para callbacks.
//   - Não sofre 'hoisting' como as declarativas.
const dobro = (numero) => numero * 2; // Retorno implícito se for uma única expressão
console.log(dobro(5)); // 10

const exibirMensagem = (msg) => { // Com chaves, precisa de 'return' explícito (se houver)
    console.log(msg);
};
exibirMensagem("Usando arrow function!"); // Usando arrow function!


// 4. Funções Construtoras (para criar objetos com 'new')
//   - Usadas como "moldes" para criar múltiplos objetos semelhantes.
//   - Devem ser chamadas com a palavra-chave 'new'.
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos.`);
    };
}
const joao = new Pessoa("João", 30);
joao.apresentar(); // Eu sou João e tenho 30 anos.

// 5. Funções de Callback (passadas como argumento para outra função)
//   - Executadas após uma operação ser concluída (ex: temporizadores, eventos, requisições).
function processarDados(callback) {
    console.log("Processando dados...");
    setTimeout(() => { // Simula uma operação assíncrona
        callback("Dados processados com sucesso!"); // Chama o callback
    }, 1000);
}
processarDados(function(mensagem) { // Função anônima como callback
    console.log(mensagem); // Dados processados com sucesso! (aparece após 1 segundo)
});

// 6. Funções de Ordem Superior (High-Order Functions)
//   - Funções que aceitam outras funções como argumentos OU retornam uma função.
//   - Exemplos comuns: `map`, `filter`, `reduce`.
const numeros = [1, 2, 3];
const numerosDobrados = numeros.map(dobro); // 'map' é uma HOF que aceita 'dobro' como callback
console.log(numerosDobrados); // [2, 4, 6]