// Exercício 10)
// Este é um kata de guerra de código. clique aqui para treinar em “Grasshopper - Summation” em
// code wars. Escreva um programa que encontre a soma de cada número de 1 a num. O número sempre será um número inteiro positivo maior que 0.

let num1 = 2;
let num2 = 8;
// // Example output: 
// // 1 + 2 = 3
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 

function sumFromOneUntilN(number) {
  let soma = 0
  for (let i = 1; i <= number; i++) {
    soma += i
  }

  return soma
}

console.log(sumFromOneUntilN(num1))
console.log(sumFromOneUntilN(num2))