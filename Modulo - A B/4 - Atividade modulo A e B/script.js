const button = document.querySelector('button')

button.onclick = (event) => {
  const nomeDoProduto = prompt('Que produto você está comprando?')

  const valorDoProduto = Number(prompt(`Quanto custa ${nomeDoProduto} que você está comprando?`))

  const valorPago = Number(prompt(`Qual foi o valor que você deu pra pagar ${nomeDoProduto}?`))

  const handleUnsulficientMoneyPaid = () => {
    alert('O valor pago é menor do que o valor do produto')
    throw new Error("Valor pago menor que valor do produto");
  }

  valorPago < valorDoProduto && handleUnsulficientMoneyPaid();




  let troco = Number.parseFloat(valorPago - valorDoProduto)

  alert(
    `Você comprou ${nomeDoProduto} que custou R$ ${valorDoProduto.toFixed(2)}.\n` +
    `Deu R$ ${valorPago.toFixed(2)} em dinheiro e vai receber R$ ${troco.toFixed(2)}.\n` +
    `Volte Sempre!`
  )
}