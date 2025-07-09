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

// Exemplo de Hoisting com 'var'
console.log(variavelVar); // undefined (variável é "içada" - hoisted - mas sem valor)
var variavelVar = "Eu sou uma variável var";
console.log(variavelVar); // "Eu sou uma variável var"

// Exemplo de Hoisting com 'function'
saudar(); // "Olá do Hoisting de função!"

function saudar() {
    console.log("Olá do Hoisting de função!");
}

// Exemplo: 'let' e 'const' são hoisted, mas entram na Temporal Dead Zone (TDZ)
// console.log(variavelLet); // Erro: ReferenceError (TDZ - não pode ser acessada antes da declaração)
let variavelLet = "Eu sou uma variável let";
console.log(variavelLet);

// console.log(variavelConst); // Erro: ReferenceError (TDZ)
const variavelConst = "Eu sou uma constante const";
console.log(variavelConst);

// 'var': Escopo de função ou global, pode ser redeclarada e reatribuída. Sofre hoisting.
var nomeAntigo = "João";
var nomeAntigo = "Pedro"; // Redeclaração OK
nomeAntigo = "Maria";   // Reatribuição OK
console.log(nomeAntigo); // Saída: Maria

// 'let': Escopo de bloco, não pode ser redeclarada, mas pode ser reatribuída. Sofre hoisting (mas entra na TDZ).
let idade = 30;
// let idade = 31; // Erro! Já foi declarada
idade = 31;        // Reatribuição OK
console.log(idade); // Saída: 31

// 'const': Escopo de bloco, não pode ser redeclarada nem reatribuída (é uma constante). Sofre hoisting (mas entra na TDZ).
const PI = 3.14;
// const PI = 3.14159; // Erro! Já foi declarada
// PI = 3.14159;       // Erro! Não pode ser reatribuída
console.log(PI); // Saída: 3.14

// Com 'const' em objetos/arrays, o conteúdo pode mudar, mas a referência não.
const pessoa = { nome: "Ana" };
pessoa.nome = "Paula"; // Modificar propriedade OK
console.log(pessoa); // Saída: { nome: "Paula" }
// pessoa = { nome: "Carlos" }; // Erro! Não pode reatribuir a variável 'pessoa'