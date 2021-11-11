// Exercício 5)
// Dada uma string, mude a cada segunda letra para um 'Z' maiúsculo. Suponha que
// não haja espaço.

let str1 = "javascript".trim();
// // Example output: 
// // jZvZsZrZpZ OR each letter on a new line
// // HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 
//########################################

for (let i = 0; i < str1.length; i++) {
  if ((i + 1) % 2 == 0) {
    let replaceRef = str1.charAt(i)
    str1 = str1.replace(replaceRef, 'Z')
  }
}

console.log(str1)