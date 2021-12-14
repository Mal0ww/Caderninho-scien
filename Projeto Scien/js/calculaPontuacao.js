import conversor from "./converter.js"

export default function calculaPontuacao()
{
    //Função que calcula a pontuação assim que a pessoa conclui tarefas

    let backup = localStorage.tarefa

    if(backup)
    {
        let dia = document.getElementById('diaAtual').innerHTML
        let pontos = gera_pontuacao()
        let semana = conversor(JSON.parse(backup))
        let indice = obter_posicao(dia) //Posição do dia no vetor
        let ptsDiarios = pontuacao_diaria() //Calcula a quantidade de pontos feitos no dia atual
        let ptsSemanal = pontuacao_semanal() //Calcula a quantidade de pontos feitos na semana

        localStorage.ptsDiarios = ptsDiarios
        localStorage.ptsSemanal = ptsSemanal
        localStorage.dia = dia

        //Editando as divs para mostrar ao usuário a quantidade de pontos
        let divPontuacaoDiaria = document.getElementById('pontuacaoDiaria')
        let divPtsDiario = document.getElementById('ptsDiario')
        let divPontuacaoSemanal = document.getElementById('pontuacaoSemanal')
        let divPtsSemanal = document.getElementById('ptsSemanal')

        divPontuacaoDiaria.innerHTML = 'PONTUAÇÃO DIÁRIA:'
        divPtsDiario.style.fontSize = '30pt'
        divPtsDiario.innerHTML = `${ptsDiarios} pts`


        divPontuacaoSemanal.innerHTML = 'PONTUAÇÃO SEMANAL:'
        divPtsSemanal.style.fontSize = '30pt'
        divPtsSemanal.innerHTML = `${ptsSemanal} pts`


        function pontuacao_diaria()
        {
            let concluidas = semana[indice].get_tarefasConcluidas()
            if(concluidas.n > 0)
            {
                let ptsTotais = 0
                for(let i = 0; i < concluidas.n; i++)
                {
                    let level = concluidas.fila[i].top()
                    ptsTotais += confere_pontuacao(level)
                }
                return ptsTotais
            }
            return 0
        }

        function pontuacao_semanal()
        {
            let ptsTotais = 0
            for(let i = 0; i < semana.length; i++)
            {
                let concluidas = semana[i].get_tarefasConcluidas()
                if(concluidas.n > 0)
                {
                    for(let i = 0; i < concluidas.n; i++)
                    {
                        let level = concluidas.fila[i].top()
                        ptsTotais += confere_pontuacao(level)
                    }
                }
            }
            return ptsTotais
        }

        function confere_pontuacao(level)
        {
            for(let i = 0; i < pontos.length; i++)
                if(level == pontos[i].level)
                    var pontuacao = pontos[i].pontuacao

            return pontuacao
        }

        function obter_posicao(dia)
        {
            for(let i = 0; i < semana.length; i++)
                if(semana[i].get_dia() == dia)
                    return i
        }

        function gera_pontuacao()
        {
            let pt1 = {'level' : 'lvl 1', 'pontuacao' : 2}
            let pt2 = {'level' : 'lvl 2', 'pontuacao' : 3}
            let pt3 = {'level' : 'lvl 3', 'pontuacao' : 5}
            let pt4 = {'level' : 'lvl 4', 'pontuacao' : 8}
            let pt5 = {'level' : 'lvl 5', 'pontuacao' : 10}
            let pontuacao = []
            pontuacao.push(pt1)
            pontuacao.push(pt2)
            pontuacao.push(pt3)
            pontuacao.push(pt4)
            pontuacao.push(pt5)
            return pontuacao
        }
    }
}