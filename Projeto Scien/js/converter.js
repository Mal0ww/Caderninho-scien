//Essa função converte um obejto JSON em um objeto do tipo DIA
import Dia from './Dia.js'
import Pilha from './Pilha.js'
import Lista from './Lista.js'
import Fila from './Fila.js'
export default function conversor(jsonObj)
{
    let tamanho = jsonObj.length

    if(tamanho > 0)
    {
        let semana = [] //Array que contém 7 objs do tipo 'Dia'

        for(let i = 0; i < tamanho; i++)
        {
            let tarefas = jsonObj[i].tarefas //Todas as tarefas
            let concluidas = jsonObj[i].concluidas //Tarefas concluidas
            let diaSem = jsonObj[i].dia //Dia da semana
            let dia = new Dia(diaSem)
            tarefas = converterTarefas(tarefas) //Converte o JSON para o tipo lista
            concluidas = converterConcluidas(concluidas) //Converte o JSON para o tipo fila
            dia.set_arrayTarefa(tarefas) //Insere o resultado da conversão no dia
            dia.set_arrayConcluidas(concluidas) //Insere o resultado da conversão no dia
            semana.push(dia)
        }

        //Converte o array tarefas em um obj do tipo 'Tarefa'
        function converterTarefas(tarefas)
        {
            let aux = new Lista()
            for(let i = 0; i < tarefas.n; i++)
            {
                let novaTarefa = new Pilha()
                novaTarefa.push(tarefas.lista[i].pilha[0])
                novaTarefa.push(tarefas.lista[i].pilha[1])
                let j = aux.size()
                aux.add(j, novaTarefa)
            }
            return aux
        }

        //Converte o array concluidas em um obj do tipo 'Tarefa'
        function converterConcluidas(concluidas)
        {
            let aux = new Fila()
            for(let i = 0; i < concluidas.n; i++)
            {
                let novaConcluida = new Pilha()
                novaConcluida.push(concluidas.fila[i].pilha[0])
                novaConcluida.push(concluidas.fila[i].pilha[1])
                aux.add(novaConcluida)
            }
            return aux
        }


        return semana
    }
}