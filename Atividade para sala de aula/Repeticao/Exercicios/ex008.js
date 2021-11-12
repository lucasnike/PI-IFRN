// Exercício 8)
// Escreva um programa que permitirá que alguém adivinhe um pino de quatro dígitos exatamente 4
// vezes. Se o usuário adivinhar o número corretamente. Ele imprime "
// Correto!" Caso contrário, ele exibirá “Desculpe, isso estava errado”. O programa para após a 4ª tentativa se acertou.

let pin = '0704';

for (let i = 0; i < 4; i++) {
  let guessedPin = prompt('Faça sua aposta: ')

  if (guessedPin === pin) {
    alert('Está certo')
    i = 4
  } else {
    console.log(guessedPin, pin)
    alert(`Errou, você tem mais ${4 - (i + 1)} chances`)
  }
}