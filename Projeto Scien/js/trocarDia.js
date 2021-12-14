import lincarTarefas from "./linkarTarefas.js"
import conversor from './converter.js'

export default function trocarDia(direcao, valorDia, diaAtual, save, semana)
{
    //Função responsável por trocar o dia da semana, lincando cada tarefa cadastrada, se existir
    if(save)
        semana = conversor(JSON.parse(localStorage.tarefa))
    
    var posicao = obter_posicao(valorDia, semana)

    if(direcao)
    {
        if(posicao == 6)
        {
            diaAtual.innerHTML = semana[posicao - posicao].get_dia()
            lincarTarefas(semana[posicao - posicao])
        }
        else
        {
            diaAtual.innerHTML = semana[posicao + 1].get_dia()
            lincarTarefas(semana[posicao + 1])
        }
    }
    else
    {
        if(posicao == 0)
        {
            diaAtual.innerHTML = semana[posicao + 6].get_dia()
            lincarTarefas(semana[posicao + 6])
        }
        else
        {
            diaAtual.innerHTML = semana[posicao - 1].get_dia()
            lincarTarefas(semana[posicao - 1])
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