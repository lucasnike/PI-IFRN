const button = document.querySelector('button')

button.onclick = () => {
  let nome = prompt('Qual é o seu nome ?')
  let idade = prompt('Qual é a sua idade ?')

  alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}