function celsiusToKelvin(temperaturaC) {
  return temperaturaC + 273.15
}

function celsiusToFahrenheit(temperaturaC) {
  return (temperaturaC * 9 / 5) + 32
}

const button = document.querySelector('button')

button.onclick = () => {
  const app = document.getElementById('app')
  app.innerHTML = null

  let celsius = Number(prompt('Digite uma temperatura em °C (Celsius)'))

  let kelvin = celsiusToKelvin(celsius)
  let fahrenheit = celsiusToFahrenheit(celsius)

  let h1 = document.createElement('h1')
  h1.innerText = `A temperatura de ${celsius} °C, corresponde a...`

  app.appendChild(h1)

  const kelvinElement = document.createElement('p')
  kelvinElement.innerText = `${kelvin}°K (Kelvin)`

  const fahrenheitElement = document.createElement('p')
  fahrenheitElement.innerText = `${fahrenheit}°F (Fahrenheit)`

  app.append(kelvinElement, fahrenheitElement)
}