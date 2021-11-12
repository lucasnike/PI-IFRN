// Exercício 4)
// Dados duas matrizes de inteiros. Some cada elemento na mesma posição e
// crie uma nova matriz contendo a soma de cada par. Suponha que ambas as matrizes tenham o mesmo comprimento.


let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// // Example output:
// [12, 7, 16]

let finalArray = []

for (let i = 0; i < arr_4.length; i++) {
  let soma = arr_3[i] + arr_4[i]
  finalArray.push(soma)
}

console.log(finalArray)