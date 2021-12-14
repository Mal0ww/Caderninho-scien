import conversor from './converter.js'

export default function alterarLevel(div, cont, diaAtual, tarefa)
{
    if(div.innerHTML == '')
        window.alert('Não é possível alterar algo que não existe, por favor, adicione uma tarefa!')
    else
    {
        let aux = localStorage.tarefa
        var semana = conversor(JSON.parse(aux)) //Converte o save do navegador para os tipos de estruturas utilizadas
        var indice = obter_posicao(diaAtual, semana) //Posição do dia no vetor
        var indiceTarefa = indice_tarefa(tarefa) //Posição da tarefa na lista
    }

    div.innerHTML = ''

    //Criando um novo input tipo texto para o level
    var novoInput = document.createElement('input')
    novoInput.type = 'text'
    novoInput.id = `selectLevel${cont}`
    novoInput.placeholder = 'Dificuldade'
    div.appendChild(novoInput)
    novoInput.focus()

    //Evento para cadastrar o level quando pressionar a tecla 'enter'
    let p = document.getElementById(`selectLevel${cont}`)

    p.addEventListener("keyup", function (e) {
        let key = e.which || e.keyCode
        if (key == 13) {
            div.innerHTML = `lvl ${p.value}`
            semana[indice].modificarLevel(p.value, indiceTarefa)
            localStorage.tarefa = JSON.stringify(semana) //Converte toda e estrutura em um obejto JSON e salva na memória do navegador
            novoInput.remove()
        }
    })


    function indice_tarefa(tarefa)
    {
        let tarefas = semana[indice].get_tarefas()
        for(let i = 0; i < tarefas.n; i++)
        {
            if(tarefa == tarefas.get_nome(i))
                return i
        }
    }

    function obter_posicao(dia)
    {
        for(var i = 0; i < semana.length; i++)
            if(dia == semana[i].get_dia())
                return i
    }   
}