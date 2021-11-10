const caixa = document.getElementById('caixa')

const speed = 30
let down = 0
let right = 0

const moveUp = () => {
  down -= speed
  caixa.style.marginTop = down + "px"
}

const moveDown = () => {
  down += speed
  caixa.style.marginTop = down + "px"
}

const moveRight = () => {
  right += speed
  caixa.style.marginLeft = right + "px"
}

const moveLeft = () => {
  right -= speed
  caixa.style.marginLeft = right + "px"
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    console.log(event.key)
    moveUp()
  }

  if (event.key === 'ArrowDown') {
    console.log(event.key)
    moveDown()
  }

  if (event.key === 'ArrowLeft') {
    console.log(event.key)
    moveLeft()
  }

  if (event.key === 'ArrowRight') {
    console.log(event.key)
    moveRight()
  }
})