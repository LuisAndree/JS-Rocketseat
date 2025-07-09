// Variaveis

//declaração
var nome = 'Andre'
console.log(nome)

//variaveis em JS são case sensitive
var nome1 = 'Andre';
var nome2 = 'andre';
console.log(nome1 === nome2);

//usando let
let user
user = "andre2016999@gmail.com"
console.log(user)

//usando constantes const
const numero = 11;
console.log(numero)
// numero = 12;
// console.log(numero) // da rro

//escopos
// Variável global
const nome = "Alice";

function saudar() {
    console.log(`Olá, ${nome}!`); // 'nome' é acessível aqui
}

saudar(); // Saída: Olá, Alice!
console.log(nome); // Saída: Alice

function mostrarMensagem() {
    // Variável de escopo de função
    const mensagem = "Olá do escopo da função!";
    console.log(mensagem);
}

mostrarMensagem(); // Saída: Olá do escopo da função!
// console.log(mensagem); // Isso causaria um erro: ReferenceError: mensagem is not defined

if (true) {
    let x = 10; // Variável de escopo de bloco
    const y = 20; // Variável de escopo de bloco
    var z = 30; // Variável de escopo global (ou de função, se dentro de uma função)
    console.log(x); // Saída: 10
    console.log(y); // Saída: 20
}

// console.log(x); // Erro: ReferenceError: x is not defined
// console.log(y); // Erro: ReferenceError: y is not defined
console.log(z); // Saída: 30 (demonstra o "vazamento" de escopo de 'var')

function criarContador() {
    let contador = 0; // Variável no escopo de 'criarContador'

    return function() { // Função anônima retornada
        contador++; // Acessa 'contador' do escopo pai
        return contador;
    };
}

const meuContador = criarContador();
console.log(meuContador()); // Saída: 1
console.log(meuContador()); // Saída: 2

const outroContador = criarContador();
console.log(outroContador()); // Saída: 1 (novo escopo para 'contador')

// Good practice: use camelCase for variables
let userName = "Maria";
let productPrice = 29.99;

// Use descriptive names in English
// Bad: let qty = 10;
let orderQuantity = 10;

// Constants (unchanging values): use UPPER_SNAKE_CASE
const MAX_ATTEMPTS = 3;
const API_URL = "https://api.example.com";

// Booleans: use 'is', 'has', 'can' prefixes
let isActive = true;
let hasPermission = false;
let canEdit = true;

// Loop counters: short, single-letter is okay (e.g., 'i' for index)
for (let i = 0; i < 5; i++) {
    // ...
}