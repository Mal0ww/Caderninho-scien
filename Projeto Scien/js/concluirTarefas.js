import lincarTarefa from './linkarTarefas.js'

export default function concluirTarefas(semana, indice)
{
    var tarefas = semana[indice].get_tarefas()
    var concluidas = semana[indice].get_tarefasConcluidas()

    if(tarefas.n != 0)
    {
        //Cadastrando as atividades concluídas
        let identificaSelecionadas = 0
        for(let i = 0; i < tarefas.n; i++)
        {
            var check = document.getElementById(`check${i+1}`).innerHTML
            var tarefa = document.getElementById(`contDiv${i+1}`).innerHTML
            var dificuldade = document.getElementById(`level${i+1}`).innerHTML
            if(check == 'v')
            {
                semana[indice].set_concluidas(tarefa, dificuldade)
                identificaSelecionadas++
            }
        }

        if(identificaSelecionadas == 0)
            window.alert('Nenhuma tarefa foi selecionada!')
        else
        {
            //Verificando as atividades concluídas e removendo do menu central
            var posicoes = posicao()    
            var tamanho = posicoes.length

            for(let i = 0; i < tamanho; i++)
            {
                let j = posicoes.pop()
                tarefas.remove(j)
            }

            lincarTarefa(semana[indice])
            var salvar = JSON.stringify(semana)
            localStorage.tarefa = salvar

            function posicao()
            {
                var indices = []
                for(let i = 0; i < concluidas.n; i++)
                {
                    for(let j = 0; j < tarefas.n; j++)
                    {
                        if(concluidas.get_nome(i) == tarefas.get_nome(j))
                            indices.push(j)
                    }
                }
                return indices
            }
        }
    }
    else
        window.alert('Não há tarefas para concluir!')
}