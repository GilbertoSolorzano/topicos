const body = document.querySelector('body')

const colores = ['blue','red','yellow', 'green','gray','pink', 'black', 'white','orange','violet',
                'rebeccapurple', 'olive', 'aqua','navy','teal','skyblue','royalblue','coral','gold','papayawhip']

for(let i=0; i<10; i++){
    const div = document.createElement('div')
    div.style.height = '100px' 
    const indice = Math.floor(Math.random() * colores.length)
    const colorUsado = colores[indice]
    div.style.backgroundColor = colorUsado

    body.appendChild(div)
    colores.splice(indice,1)
}