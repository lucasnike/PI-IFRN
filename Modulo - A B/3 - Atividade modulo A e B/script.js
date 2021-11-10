const button = document.querySelector('button')

button.onclick = () => {
  let number = prompt('Digite um número inteira qualquer')

  number = Number(number)

  alert(`Antes de ${number}, temos o número ${number - 1}.\nDepois de ${number}, temos o número ${number + 1}.`)
}