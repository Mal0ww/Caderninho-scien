import conversor from './converter.js'

export default function atividadesConcluidas()
{
    let backup = localStorage.tarefa

    if(backup)
    {
        let semana = conversor(JSON.parse(backup)) //Converte o save do navegador para os tipos de estruturas utilizadas   
        let diaAtual = document.getElementById('diaAtual').innerHTML
        let indice = obter_posicao(diaAtual) //Posição do dia no vetor

        //Alterando e 'limpando' as divs
        let logo = document.getElementById('logo').innerHTML = 'ATIVIDADES CONCLUÍDAS'

        let divDia = document.getElementById('dia').innerHTML = ''

        let divIconeAdd = document.getElementById('iconeAdd').innerHTML = ''
        
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

        //Verificando as tarefas concluídas para mostrar ao usuário
        let concluidas = semana[indice].get_tarefasConcluidas()

        if(concluidas.n)
        {
            if(indice == 6 || indice == 0)
                div1.innerHTML = `VOCÊ CONCLUIU ESSAS ATIVIDADES NO ${diaAtual}:`
            else
            div1.innerHTML = `VOCÊ CONCLUIU ESSAS ATIVIDADES NA ${diaAtual}:`

            for(let i = 0; i < concluidas.n; i++)
            {
                let atividade = concluidas.remove()
                let lvl = atividade.pop()
                let tarefa = atividade.pop()
                atividade.push(tarefa)
                atividade.push(lvl)
                concluidas.add(atividade)

                div3.innerHTML += tarefa + ' | '
            }
        }
        else
        {
            div2.style.textAlign = 'center'
            div2.innerHTML = 'NÃO HÁ ATIVIDADES CONCLUÍDAS AINDA!'
        }


        function obter_posicao(dia)
        {
            for(let i = 0; i < semana.length; i++)
            {
                if(dia == semana[i].get_dia())
                    return i
            }
        }
        return true
    }
    else
        return false
}