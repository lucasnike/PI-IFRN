// Exercício 1)
// Obtenha a soma de duas matrizes ... na verdade, a soma de todos os seus elementos.
// PS Cada array inclui apenas números inteiros. A saída também é um número.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// // Example output: 
// // 276 + 351 = 627
var soma = 0
for (i in arr_1) {
  soma += arr_1[i] + arr_2[i]
}
let resultado = soma

console.log(resultado)

//########################################