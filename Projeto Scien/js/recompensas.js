export default function recompensas()
{
    //Recuperando os pontos do usuário
    let backupPtsDiario = localStorage.ptsDiarios
    let backupPtsSemanal = localStorage.ptsSemanal

    let divIconeAdd = document.getElementById('iconeAdd').innerHTML = ''
    let logo = document.getElementById('logo').innerHTML = 'SUAS RECOMPENSAS'

    let diaAtual = document.getElementById('diaAtual').innerHTML

    let divDia = document.getElementById('dia').innerHTML = ''
    
    //Selecionando as divs para mostrar as recompensas
    var div1 = document.getElementById('div1')
    var div2 = document.getElementById('div2')
    var div3 = document.getElementById('div3')
    var div4 = document.getElementById('div4')
    var div5 = document.getElementById('div5')
    var div6 = document.getElementById('div6')
    let divConcluirtarefa = document.getElementById('concluir').innerHTML = ''
    div1.innerHTML = ''
    div2.innerHTML = ''
    div3.innerHTML = ''
    div4.innerHTML = ''
    div5.innerHTML = ''
    div6.innerHTML = ''
    
    //Verificando os valores para poder selecionar o que mostrar ao usuário
    if(!backupPtsDiario && !backupPtsSemanal)
        div1.innerHTML = 'RECOMPENSAS INDISPONÍVEIS, CADASTRE E CONCLUA ALGUMA ATIVIDADE!'
    else
    {
        var todasRecompensas = gera_recompensas()
        let minhasRecompensas = ''

        let dia = localStorage.dia
        if(dia == diaAtual)
        {
            div1.innerHTML = 'RECOMPENSAS DIÁRIAS:'
            minhasRecompensas = analisaMinhasRecompensas(backupPtsDiario)

            if(minhasRecompensas.length > 0)
                for(let i = 0; i < minhasRecompensas.length; i++)
                    div2.innerHTML += minhasRecompensas[i]
            else
                div2.innerHTML = 'VOCÊ AINDA NÃO POSSUI PONTUAÇÃO SUFICIENTE!'
        }
        else
        div2.innerHTML = 'VOCÊ AINDA NÃO POSSUI PONTUAÇÃO SUFICIENTE!'
        
        div3.innerHTML = ''
        div4.innerHTML = 'RECOMPENSAS SEMANAIS:'
        div5.innerHTML = ''
        div6.innerHTML = ''

        minhasRecompensas = analisaMinhasRecompensas(backupPtsSemanal)

        if(minhasRecompensas.length > 0)
            for(let i = 0; i < minhasRecompensas.length; i++)
                div5.innerHTML += minhasRecompensas[i]
        else
            div5.innerHTML = 'VOCÊ AINDA NÃO POSSUI PONTUAÇÃO SUFICIENTE!'
    }
    

    function analisaMinhasRecompensas(pontos)
    {
        let armazenaRecompensas = []

        for(let i = 0; i < todasRecompensas.length; i++)
            if(pontos >= todasRecompensas[i].pontuacao)
                armazenaRecompensas.push(todasRecompensas[i].recompensa + ' | ')

        return armazenaRecompensas
    }
    

    function gera_recompensas()
    {
        let recompensa1 = {'recompensa' : '30MIN DE NETFLIX', 'pontuacao' : 10}
        let recompensa2 = {'recompensa' : '30MIN DE CELULAR', 'pontuacao' : 10}
        let recompensa3 = {'recompensa' : 'JOGAR POR 1H', 'pontuacao' : 20}
        let recompensa4 = {'recompensa' : 'LER POR 30MIN', 'pontuacao' : 5}
        let recompensa5 = {'recompensa' : 'JOGAR POR 2H', 'pontuacao' : 25}
        let recompensa6 = {'recompensa' : 'SEXTOU', 'pontuacao' : 100}
        let recompensa7 = {'recompensa' : 'JOGAR NO FINAL DE SEMANA', 'pontuacao' : 130}
        let recompensa8 = {'recompensa' : 'NETFLIX NO FINAL DE SEMANA', 'pontuacao' : 130}
        let recompensas = []
        recompensas.push(recompensa1)
        recompensas.push(recompensa2)
        recompensas.push(recompensa3)
        recompensas.push(recompensa4)
        recompensas.push(recompensa5)
        recompensas.push(recompensa6)
        recompensas.push(recompensa7)
        recompensas.push(recompensa8)
        return recompensas
    }
}