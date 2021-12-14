import trocarDia from "./trocarDia.js"
import conversor from "./converter.js"
import addTarefa from "./addTarefa.js"
import gerarDias from "./gerarDias.js"
import lincarTarefas from "./linkarTarefas.js"
import insere from './inserirDia.js'
export default function reestruturar()
{
    //Essa função restaura todo o menu central(parte responsável por mostrar as tarefas, cadastrar etc)
    let backup = localStorage.tarefa
    if(backup)
    {
        var semana = JSON.parse(backup)
        semana = conversor(semana) //Converte o JSON nos tipos de dados necessários
    }

    let logo = document.getElementById('logo')
    logo.innerHTML = 'CADERNINHO SCIEN'

    //Criando as estruturas apagadas
    let dia = document.getElementById('dia')
    let diaAtual = document.createElement('div')
    diaAtual.id = 'diaAtual'
    diaAtual.innerHTML = ''
    let diaAnterior = document.createElement('div')
    diaAnterior.id = 'diaAnterior'
    diaAnterior.innerHTML = '-'
    diaAnterior.addEventListener('click', function(){
        trocarDia(false, diaAtual.innerHTML, diaAtual, backup, semana)
    })
    let diaPosterior = document.createElement('div')
    diaPosterior.id = 'diaPosterior'
    diaPosterior.innerHTML = '+'
    diaPosterior.addEventListener('click', function(){
        trocarDia(true, diaAtual.innerHTML, diaAtual, backup, semana)
    })
    dia.appendChild(diaAnterior)
    dia.appendChild(diaAtual)
    dia.appendChild(diaPosterior)

    let divIconeAdd = document.getElementById('iconeAdd')
    let img = document.createElement('img')
    img.id = 'addTarefa'
    img.src = './img/ícone_add_tarefa - v2.png'
    img.addEventListener('click', function(){
        addTarefa(diaAtual.innerHTML, semana)
    })
    divIconeAdd.appendChild(img)

    //Criando as divs das tarefas
    for(let i = 1; i < 7; i++)
    {
        let divPrincipal = document.getElementById(`div${i}`)
        divPrincipal.innerHTML = ''
        if(i == 1 || i == 3)
        {
           divPrincipal.style.display = ''
           divPrincipal.style.justifyContent = ''
           divPrincipal.style.alignItems = ''
           divPrincipal.style.width = ''
        }
        divPrincipal.style.fontSize = ''


        let novaDiv = document.createElement('div')
        novaDiv.id = `contDiv${i}`

        let novoCheck = document.createElement('div')
        novoCheck.id = `check${i}`

        novoCheck.addEventListener('click', function(){
            if(novoCheck.innerHTML == 'x')
                novoCheck.innerHTML = 'v'
            else
                novoCheck.innerHTML = 'x'
        })

        let novoLevel = document.createElement('div')
        novoLevel.id = `level${i}`

        divPrincipal.appendChild(novoCheck)
        divPrincipal.appendChild(novoLevel)
        divPrincipal.appendChild(novaDiv)
    }
}