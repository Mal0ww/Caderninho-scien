import conversor from './converter.js'

export default function alterar(div, cont, diaAtual)
{
    if(div.innerHTML == '')
        window.alert('Não é possível alterar algo que não existe, por favor, adicione uma tarefa!')
    else
    {
        let aux = localStorage.tarefa
        let semana = conversor(JSON.parse(aux)) //Converte o save do navegador para os tipos de estruturas utilizadas
        let indice = obter_posicao(diaAtual, semana) //Posição do dia no vetor
        let indiceTarefa = indice_tarefa(div.innerHTML) //Posição da tarefa na lista

        div.innerHTML = ''

        //Criando um novo input tipo texto para a tarefa
        let novoInput = document.createElement('input')
        novoInput.type = 'text'
        novoInput.id = `receber${cont}`
        novoInput.placeholder = 'Digite uma nova tarefa...'
        div.appendChild(novoInput)
        novoInput.focus()

        //Evento para cadastrar a tarefa quando pressionar a tecla 'enter'
        let p = document.getElementById(`receber${cont}`)

        console.log(semana)
        p.addEventListener("keyup", function (e) {
            let key = e.which || e.keyCode
            if (key == 13) {
                div.innerHTML = primeira_maiusculo(p.value)
                semana[indice].modificarTarefa(div.innerHTML, indiceTarefa)
                localStorage.tarefa = JSON.stringify(semana) //Converte toda e estrutura em um obejto JSON e salva na memória do navegador
                novoInput.remove()
            }
        })

        function primeira_maiusculo(letra) {
            return letra[0].toUpperCase() + letra.substr(1)
        }

        function indice_tarefa(tarefa)
        {
            let tarefas = semana[indice].get_tarefas()
            for(let i = 0; i < tarefas.n; i++)
            {
                if(tarefa == tarefas.get_nome(i))
                    return i
            }
        }

        function obter_posicao(dia, semana)
        {
            for(let i = 0; i < semana.length; i++)
            {
                if(dia == semana[i].get_dia())
                    return i
            }
        }
    }
}