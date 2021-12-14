import gerarDias from './gerarDias.js'
import insere from './inserirDia.js'
import trocarDia from './trocarDia.js'
import addTarefa from './addTarefa.js'
import concluirTarefas from './concluirTarefas.js'
import alterarTarefa from './alterarTarefa.js'
import alterarLevel from './alterarLevel.js'
import conversor from './converter.js'
import lincarTarefas from './linkarTarefas.js'
import calculaPontuacao from './calculaPontuacao.js'
import recompensas from './recompensas.js'
import reestruturar from './reestruturarMenuCentral.js'
import atividadesConcluidas from './atividadesConcluidas.js'
import integrantes from './integrantes.js'
import infor from './info.js'

window.addEventListener("load", iniciar)

function iniciar(){

    //Ao iniciar o app ele resgata as informações no armazenamento interno e já converte para os tipos apropriados
    let backup = localStorage.tarefa
    if(backup)
    {
        var semana = JSON.parse(backup)
        semana = conversor(semana)
    }
    else
        semana = gerarDias()
    var dia = new Date().getDay()

    lincarTarefas(semana[dia])

    insere(semana[dia].get_dia())


    //Eventos para alteração do dia
    let divDiaAnt = document.getElementById('diaAnterior').addEventListener('click', function(){
        let diaAtual = document.getElementById('diaAtual')
        trocarDia(false, diaAtual.innerHTML, diaAtual, backup, semana)
    })
    let divDiaPost = document.getElementById('diaPosterior').addEventListener('click', function(){
        let diaAtual = document.getElementById('diaAtual')
        trocarDia(true, diaAtual.innerHTML, diaAtual, backup, semana)
    })


    //Evento para adição de tarefas
    let iconeAdd = document.getElementById('addTarefa').addEventListener('click', function(){
        let diaAtual = document.getElementById('diaAtual').innerHTML
        addTarefa(diaAtual, semana)
    })


    //Evento para conclusão de tarefas
    let cadastrar = document.getElementById('concluir').addEventListener('click', function(e){
        e.preventDefault()
        
        let dia = document.getElementById('diaAtual').innerHTML
        let posicao = obter_posicao(dia, semana)
        concluirTarefas(semana, posicao)   
        calculaPontuacao()
    })


    //Evento para visualizar as recompensas
    let divRecompensas = document.getElementById('visualizarRecompensas').addEventListener('click', function(){
        let diaAtual = document.getElementById('diaAtual')
        if(!diaAtual)
        {
            reestruturar()
            lincarTarefas(semana[dia])
            insere(semana[dia].get_dia())
        }
        recompensas()
    })


    //Evento para voltar ao menu central
    let divMenuCentral = document.getElementById('MENUCENTRAL').addEventListener('click', function(){
        let diaAtual = document.getElementById('diaAtual')
        if(!diaAtual)
        {
            reestruturar()
            lincarTarefas(semana[dia])
            insere(semana[dia].get_dia())
        }
    })


    //Evento para acessar tarefas concluídas
    let divAtvConcluidas = document.getElementById('CONCLUIDAS').addEventListener('click', function(){
        reestruturar()
        lincarTarefas(semana[dia])
        insere(semana[dia].get_dia())
        let resultado = atividadesConcluidas()
        if(!resultado)
            window.alert('NENHUMA TAREFA FOI CADASTRADA, POR FAVOR, CADASTRE ALGUMAS ATIVIDADES!')
    })


    //Evento para acessar os integrantes
    let divIntegrantes = document.getElementById('INTEGRANTES').addEventListener('click', function(){
        integrantes()
    })


    //Evento para acessar a info
    let info = document.getElementById('INFO').addEventListener('click', function(){
        infor()
    })



    //Eventos para alteração de atividades
    let alterarDiv1 = document.getElementById('contDiv1')
    alterarDiv1.addEventListener('dblclick', function(){
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarTarefa(alterarDiv1, 1, diaAtual)
    })
    let alterarDiv2 = document.getElementById('contDiv2')
    alterarDiv2.addEventListener('dblclick', function(){
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarTarefa(alterarDiv2, 2, diaAtual)
    })
    let alterarDiv3 = document.getElementById('contDiv3')
    alterarDiv3.addEventListener('dblclick', function(){
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarTarefa(alterarDiv3, 3, diaAtual)
    })
    let alterarDiv4 = document.getElementById('contDiv4')
    alterarDiv4.addEventListener('dblclick', function(){
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarTarefa(alterarDiv4, 4, diaAtual)
    })
    let alterarDiv5 = document.getElementById('contDiv5')
    alterarDiv5.addEventListener('dblclick', function(){
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarTarefa(alterarDiv5, 5, diaAtual)
    })
    let alterarDiv6 = document.getElementById('contDiv6')
    alterarDiv6.addEventListener('dblclick', function(){
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarTarefa(alterarDiv6, 6, diaAtual)
    })


    //Eventos para alteração do nível
    let alterarLvl1 = document.getElementById('level1')
    alterarLvl1.addEventListener('dblclick', function(){
        let tarefa = document.getElementById('contDiv1').innerHTML
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarLevel(alterarLvl1, 1, diaAtual, tarefa)
    })
    let alterarLvl2 = document.getElementById('level2')
    alterarLvl2.addEventListener('dblclick', function(){
        let tarefa = document.getElementById('contDiv2').innerHTML
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarLevel(alterarLvl2, 2, diaAtual, tarefa)
    })
    let alterarLvl3 = document.getElementById('level3')
    alterarLvl3.addEventListener('dblclick', function(){
        let tarefa = document.getElementById('contDiv3').innerHTML
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarLevel(alterarLvl3, 3, diaAtual, tarefa)
    })
    let alterarLvl4 = document.getElementById('level4')
    alterarLvl4.addEventListener('dblclick', function(){
        let tarefa = document.getElementById('contDiv4').innerHTML
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarLevel(alterarLvl4, 4, diaAtual, tarefa)
    })
    let alterarLvl5 = document.getElementById('level5')
    alterarLvl5.addEventListener('dblclick', function(){
        let tarefa = document.getElementById('contDiv5').innerHTML
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarLevel(alterarLvl5, 5, diaAtual, tarefa)
    })
    let alterarLvl6 = document.getElementById('level6')
    alterarLvl6.addEventListener('dblclick', function(){
        let tarefa = document.getElementById('contDiv6').innerHTML
        let diaAtual = document.getElementById('diaAtual').innerHTML
        alterarLevel(alterarLvl6, 6, diaAtual, tarefa)
    })


    //Função que retorna o índice do dia da semana
    function obter_posicao(dia, semana)
    {
        for(let i = 0; i < semana.length; i++)
        {
            if(dia == semana[i].get_dia())
                return i
        }
    }
}