// Exercício 9)
// Escreva um programa que verificará se duas strings são palíndromos. Um palíndromo é uma palavra que significa o mesmo para a frente e para trás.
// Palíndromo: uma palavra, frase ou sequência que tem a mesma leitura de trás para a
// frente, por exemplo, madame ou enfermeiras correm.

let str3 = "racecar";
let str4 = "Java";
// // Example output:
// // string1 palindrome?: 
// // Yes 
// // string2 palindrome?: 
// // No 
//########################################

function reverseString(text = '') {
  return text.trim().split('').reverse().join('')
}

function isPalindrome(text = '') {
  let reversedText = reverseString(text)

  if (reversedText === text) {
    return true
  }

  return false
}

console.log(isPalindrome(str3))
console.log(isPalindrome(str4))