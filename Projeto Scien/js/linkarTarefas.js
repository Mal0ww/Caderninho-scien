export default function lincarTarefas(dia)
{
    //Função responsável por redefinir as atividades nas divs
    var tarefas = dia.get_tarefas()
    for(var i = 0; i < 6; i++)
    {
        var div = document.getElementById(`contDiv${i+1}`)
        var check = document.getElementById(`check${i+1}`)
        var level = document.getElementById(`level${i+1}`)

        if(tarefas.lista[i] != undefined)
        {
            if(i == 0)
            {
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
            }
            div.innerHTML = tarefas.get_nome(i)
            check.innerHTML = 'x'
            check.style.cursor = 'pointer'
            level.innerHTML = `lvl ${tarefas.get_level(i)}`
        }
        else
        {
            div.innerHTML = ''
            check.innerHTML = ''
            level.innerHTML = ''
        }
    }
}