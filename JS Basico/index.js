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

// Tipos de Dados Primitivos (armazenam um único valor)

// Number: Números inteiros e de ponto flutuante
let idade = 25; // Inteiro
let preco = 99.99; // Ponto flutuante

// String: Sequência de caracteres (texto)
let nome = "Alice";
let mensagem = 'Olá, mundo!';

// Boolean: Verdadeiro ou Falso
let estaAtivo = true;
let temPermissao = false;

// Undefined: Variável declarada, mas sem valor atribuído
let valorNaoDefinido; // valorNaoDefinido é 'undefined'

// Null: Representa a ausência intencional de qualquer valor ou objeto
let usuarioLogado = null;

// Symbol (ES6): Valor único e imutável, usado como chave de propriedade de objeto
const idUnico = Symbol('id');

// BigInt (ES11): Números inteiros maiores que Number.MAX_SAFE_INTEGER
const numeroGrande = 9007199254740991n; // 'n' no final indica BigInt

---
// Tipos de Dados Não Primitivos (armazenam coleções de valores ou estruturas mais complexas)

// Object: Coleção de pares chave-valor
let pessoa = {
    nome: "Carlos",
    idade: 30,
    cidade: "São Paulo"
};

// Array: Tipo especial de objeto para listas ordenadas de valores
let frutas = ["Maçã", "Banana", "Laranja"];

// Function: Tipo especial de objeto para blocos de código executáveis
function somar(a, b) {
    return a + b;
}

---
// Conversão de Tipos (Type Coercion)

// Explícita (você converte intencionalmente)

// Para String
let numParaString = String(123);        // "123"
let boolParaString = String(true);      // "true"

// Para Number
let stringParaNum = Number("456");      // 456
let stringFloatParaNum = Number("78.9"); // 78.9
let boolParaNum = Number(false);        // 0
let nuloParaNum = Number(null);         // 0
// let invalidoParaNum = Number("abc"); // NaN (Not-a-Number)

// Para Boolean (quase tudo é 'true', exceto valores "falsy")
let numParaBool = Boolean(1);           // true
let zeroParaBool = Boolean(0);          // false
let stringParaBool = Boolean("oi");     // true
let stringVaziaParaBool = Boolean("");  // false
let nuloParaBool = Boolean(null);       // false
let undefParaBool = Boolean(undefined); // false

// Implícita (JavaScript converte automaticamente em certas operações)

// String + Number = Concatenação (tudo vira String)
let resultado1 = "Total: " + 10; // "Total: 10"

// Number - String = Subtração (String tenta virar Number)
let resultado2 = 50 - "10";     // 40

// Number + Boolean = Soma (Boolean vira 0 ou 1)
let resultado3 = 10 + true;     // 11 (true vira 1)

// Comparação loose (==) com tipos diferentes: tenta converter antes de comparar
console.log(10 == "10"); // true (String "10" vira Number 10)
console.log(0 == false); // true (false vira 0)
console.log(null == undefined); // true (são considerados "iguais" neste contexto)

// Comparação estrita (===): Compara valor E tipo, sem conversão implícita
console.log(10 === "10"); // false (tipos diferentes)
console.log(0 === false); // false (tipos diferentes)

// Template literals: Usam backticks (`)
let nome = "Maria";
let idade = 28;

// Antes: Concatenação com '+' (menos legível)
let saudacaoAntiga = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(saudacaoAntiga);

// Agora: Template literals (mais legível com interpolação de variáveis ${})
let saudacaoNova = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(saudacaoNova);

// Suporte a múltiplas linhas sem '\n'
let textoMultilinha = `
    Este é um texto
    com múltiplas linhas.
    Fácil de ler!
`;
console.log(textoMultilinha);

// Expressões dentro dos template literals
let a = 10;
let b = 5;
let resultado = `A soma de ${a} e ${b} é ${a + b}.`;
console.log(resultado); // Saída: A soma de 10 e 5 é 15.

// Chamada de função dentro dos template literals
function capitalizar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let produto = "banana";
let frase = `Eu gosto de ${capitalizar(produto)}.`;
console.log(frase); // Saída: Eu gosto de Banana.