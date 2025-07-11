// Operações Aritméticas Básicas em JavaScript

let a = 10;
let b = 5;

// Adição (+)
let soma = a + b; // 10 + 5 = 15
console.log(`Soma: ${soma}`);

// Subtração (-)
let subtracao = a - b; // 10 - 5 = 5
console.log(`Subtração: ${subtracao}`);

// Multiplicação (*)
let multiplicacao = a * b; // 10 * 5 = 50
console.log(`Multiplicação: ${multiplicacao}`);

// Divisão (/)
let divisao = a / b; // 10 / 5 = 2
console.log(`Divisão: ${divisao}`);

// Módulo (%) - Retorna o resto da divisão
let resto = a % b; // 10 % 5 = 0 (10 dividido por 5 não tem resto)
let resto2 = 10 % 3; // 10 % 3 = 1 (resto de 10 por 3 é 1)
console.log(`Resto (Módulo): ${resto}, ${resto2}`);

// Exponenciação (**) - (ES2016)
let potencia = a ** 2; // 10 elevado a 2 (10 * 10) = 100
let potencia2 = b ** 3; // 5 elevado a 3 (5 * 5 * 5) = 125
console.log(`Potência: ${potencia}, ${potencia2}`);

// Incremento (++) - Adiciona 1
let contador = 0;
contador++; // contador agora é 1
console.log(`Incremento: ${contador}`);

// Decremento (--) - Subtrai 1
let decrescer = 5;
decrescer--; // decrescer agora é 4
console.log(`Decremento: ${decrescer}`);

// Ordem de Precedência (PEMDAS/BODMAS) é respeitada:
// Parênteses > Exponenciação > Multiplicação/Divisão > Adição/Subtração
let expressao = (a + b) * 2 - 1; // (10 + 5) * 2 - 1 => 15 * 2 - 1 => 30 - 1 = 29
console.log(`Expressão: ${expressao}`);