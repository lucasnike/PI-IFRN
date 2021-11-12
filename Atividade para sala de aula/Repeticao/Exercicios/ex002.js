
// Exercício 2)
// Usando um loop for, imprima todos os números pares até e incluindo n. Não inclua 0.

let n1 = 22;
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

for (let i = 1; i <= n1; i++) {
  i % 2 == 0 ? console.log(i) : null;
}