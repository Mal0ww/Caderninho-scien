window.addEventListener("load", loadPontuacao)

function loadPontuacao()
{
    //Esse arquivo carrega as pontuações da pessoa e já atribui nas divs responsáveis por elas

    let backupPtsDiario = localStorage.ptsDiarios
    let backupPtsSemanal = localStorage.ptsSemanal

    let diaAtual = document.getElementById('diaAtual').innerHTML

    let divPontuacaoDiaria = document.getElementById('pontuacaoDiaria')
    let divPtsDiario = document.getElementById('ptsDiario')
    let divPontuacaoSemanal = document.getElementById('pontuacaoSemanal')
    let divPtsSemanal = document.getElementById('ptsSemanal')

    if(!backupPtsSemanal && !backupPtsDiario)
    {
        backupPtsDiario = 0
        backupPtsSemanal = 0
    }

    if(diaAtual != localStorage.dia)
        backupPtsDiario = 0


    divPontuacaoDiaria.innerHTML = 'PONTUAÇÃO DIÁRIA:'
    divPtsDiario.innerHTML = `${backupPtsDiario}`
    divPtsDiario.style.fontSize = '30pt'

    divPontuacaoSemanal.innerHTML = 'PONTUAÇÃO SEMANAL:'
    divPtsSemanal.innerHTML = `${backupPtsSemanal}`
    divPtsSemanal.style.fontSize = '30pt'
}