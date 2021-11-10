const buttons = document.querySelectorAll('button')
buttons.forEach((element, index) => {
  element.onclick = () => {
    alert(`Você clicou no ${index + 1}º botão`)
  }
})