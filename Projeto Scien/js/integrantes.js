export default function integrantes()
{
    //Esvaziando as divs
    for(let i = 1; i < 7; i++)
        document.getElementById(`div${i}`).innerHTML = ''
    
    document.getElementById('logo').innerHTML = 'INTEGRANTES'
    document.getElementById('dia').innerHTML = ''
    document.getElementById('iconeAdd').innerHTML = ''

    //Criando os elementos para adicionar as imagens
    let div1 = document.getElementById('div1')
    div1.style.display = 'flex'
    div1.style.justifyContent = 'space-between'
    div1.style.alignItems = 'center'

    let divAlex = document.createElement('div')
    divAlex.style.width = '22%'
    divAlex.style.height = '160px'
    divAlex.style.borderRadius = '110px'
    divAlex.style.backgroundColor = '#48494b'
    divAlex.style.display = 'flex'
    divAlex.style.alignItems = 'center'
    divAlex.style.justifyContent = 'center'

    let divMelman = document.createElement('div')
    divMelman.style.width = '22%'
    divMelman.style.height = '160px'
    divMelman.style.borderRadius = '110px'
    divMelman.style.backgroundColor = '#48494b'
    divMelman.style.display = 'flex'
    divMelman.style.alignItems = 'center'
    divMelman.style.justifyContent = 'center'

    let divMarty = document.createElement('div')
    divMarty.style.width = '22%'
    divMarty.style.height = '160px'
    divMarty.style.borderRadius = '110px'
    divMarty.style.backgroundColor = '#48494b'
    divMarty.style.display = 'flex'
    divMarty.style.alignItems = 'center'
    divMarty.style.justifyContent = 'center'

    let divJulian = document.createElement('div')
    divJulian.style.width = '22%'
    divJulian.style.height = '160px'
    divJulian.style.borderRadius = '110px'
    divJulian.style.backgroundColor = '#48494b'
    divJulian.style.display = 'flex'
    divJulian.style.justifyItems = 'center'
    divJulian.style.alignItems = 'center'
    divJulian.style.justifyContent = 'center'

    let alex = document.createElement('img')
    alex.src = './img/alex.png'
    divAlex.appendChild(alex)
    let melman = document.createElement('img')
    melman.src = './img/melman.png'
    divMelman.appendChild(melman)
    let marty = document.createElement('img')
    marty.src = './img/marty.png'
    divMarty.appendChild(marty)
    let reiJulian = document.createElement('img')
    reiJulian.src = './img/reiJulian.png'
    divJulian.appendChild(reiJulian)

    div1.appendChild(divAlex)
    div1.appendChild(divMelman)
    div1.appendChild(divMarty)
    div1.appendChild(divJulian)

    //Criando os nomes das imagens
    let div3 = document.getElementById('div3')
    let victor = document.createElement('div')
    let joaquim = document.createElement('div')
    let michael = document.createElement('div')
    let dannilo = document.createElement('div')

    div3.style.width = '100%'
    div3.style.display = 'flex'
    div3.style.justifyContent = 'space-around'
    div3.style.alignItems = 'center'
    div3.style.fontSize = '10pt'

    victor.innerHTML = 'VICTOR MATOS'
    victor.style.textAlign = 'center'
    michael.innerHTML = 'MICHAEL HITLER'
    michael.style.textAlign = 'center'
    dannilo.innerHTML = 'DANNILO DE SOUZA'
    dannilo.style.textAlign = 'center'
    joaquim.innerHTML = 'JOAQUIM LUNA'
    joaquim.style.textAlign = 'center'


    div3.appendChild(victor)
    div3.appendChild(michael)
    div3.appendChild(dannilo)
    div3.appendChild(joaquim)

}