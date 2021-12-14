export default function addTarefa(diaAtual, semana)
{
    var posicao = obter_posicao(diaAtual, semana) //Obtém a posição do dia no vetor
    var tarefas = semana[posicao].get_tarefas()
    var cont = tarefas.size() //Tamanho de tarefas

    if(cont == 6)
        window.alert('Não pode ultrapassar as 6 tarefas, isso irá te atrapalhar ao invés de ajudar!')
    else
    {
        //Criando um input dipo texto
        var div = document.getElementById(`contDiv${cont+1}`)
        let input = document.createElement('input')
        input.type = 'text'
        input.id = `receber${cont+1}`
        input.placeholder = 'Digite uma tarefa...'
        div.appendChild(input)
        input.focus()


        //Cria o botão concluir tarefas caso não exista
        var botaoConcluir = document.getElementById('concluirTarefas')
        if(!botaoConcluir)
        {
            var divConcluir = document.getElementById('concluir')
            var criarBotao = document.createElement('input')
            criarBotao.type = 'button'
            criarBotao.id = 'concluirTarefas'
            criarBotao.value = 'Concluir tarefas'
            divConcluir.appendChild(criarBotao)
        }

        //Evento para quando pressionar a tecla 'enter' poder cadastrar o level
        let p = document.getElementById(`receber${cont+1}`)

        p.addEventListener("keyup", function(e){
            let key = e.which || e.keyCode
            if(key == 13)
            {
                //Criando input tipo texto para o level
                let contDiv = document.getElementById(`contDiv${cont+1}`)
                let level = document.getElementById(`level${cont+1}`)
                let div_check = document.getElementById(`check${cont+1}`)
                let select = document.createElement('input')
                select.id = `selectLevel${cont+1}`
                select.type = 'text'
                select.placeholder = 'Dificuldade'
                level.appendChild(select)
                select.focus()
                contDiv.innerHTML = primeira_maiusculo(p.value)
                
                //Evento para quando pressionar a tecla 'enter' cadastrar o level
                var s = document.getElementById(`selectLevel${cont+1}`)
                s.addEventListener('keyup', function(e){
                    let key = e.which || e.keyCode
                    if(key == 13)
                    {
                        level.innerHTML = `lvl ${s.value}`
                        semana[posicao].set_tarefa(contDiv.innerHTML, s.value)
                        localStorage.tarefa = JSON.stringify(semana) //Salva na memória do navegador
                        select.remove()
                    }
                })
                div_check.innerHTML = 'x'
                div_check.style.cursor = 'pointer'
                input.remove()
            }
        })

        function primeira_maiusculo(letra)
        {
            return letra[0].toUpperCase() + letra.substr(1)
        }
    }

    function obter_posicao(dia, semana)
    {
        for(var i = 0; i < semana.length; i++)
        {
            if(dia == semana[i].get_dia())
                return i
        }
    }
}