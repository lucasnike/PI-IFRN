const button = document.querySelector('button') 

button.onclick = () => {
    let medida = prompt('Digite uma distância em metros (m)')
    const app = document.getElementById('app')
    app.innerHTML = null

    const arrayDeMedidas = [
        {nome: 'Quilômetros', acr: 'Km'},
        {nome: 'Hectômetros', acr: 'Hm'},
        {nome: 'Decâmetros', acr: 'Dam'},
        {nome: 'Decímetros', acr: 'Dm'},
        {nome: 'Centímetros', acr: 'Cm'},
        {nome: 'Milímetros', acr: 'Mm'},
    ]
    let numeroReferencia = 0.001

    for (let i = 0; i < 6; i++) {
        if (numeroReferencia == 1) {
            numeroReferencia = 10
        }
        arrayDeMedidas[i].medida = medida * numeroReferencia
        numeroReferencia *= 10
    }
    let h1 = document.createElement('h1')
    h1.innerText = `A distância de ${medida} metros, corresponde a...`

    app.appendChild(h1)

    arrayDeMedidas.forEach((element) => {
        const text = `${element.medida} ${element.nome} (${element.acr})`
        
        let h2 = document.createElement('h2')
        h2.innerText = text

        app.appendChild(h2)
    })
}