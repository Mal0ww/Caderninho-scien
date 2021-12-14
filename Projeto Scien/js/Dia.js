import Pilha from './Pilha.js'
import Lista from './Lista.js'
import Fila from './Fila.js'
//Classe que armazena as tarefas cadastradas e concluídas de um dia
export default class Dia
{
    constructor(dia)
    {
        this.tarefas = new Lista()
        this.concluidas = new Fila()
        this.dia = dia
    }

    set_tarefa(nomeTarefa, dificuldade)
    {
        let t = new Pilha()
        t.push(nomeTarefa)
        t.push(dificuldade)
        let i = this.tarefas.size()
        this.tarefas.add(i, t)
    }

    set_concluidas(novaTarefa, dificuldade)
    {
        let t = new Pilha()
        t.push(novaTarefa)
        t.push(dificuldade)
        this.concluidas.add(t)
    }

    set_arrayTarefa(arrayTarefa)
    {
        this.tarefas = arrayTarefa
    }

    set_arrayConcluidas(arrayConcluidas)
    {
        this.concluidas = arrayConcluidas
    }

    modificarTarefa(novaTarefa, indice)
    {
        for(let i = 0; i < this.tarefas.n; i++)
        {
            if(i == indice)
            {
                this.tarefas.modifica_nome(i, novaTarefa)
                return true
            }
        }
        return false
    }

    modificarLevel(novoLevel, indice)
    {
        for(let i = 0; i < this.tarefas.n; i++)
        {
            if(i == indice)
            {
                this.tarefas.modifica_level(i, novoLevel)
                return true
            }
        }
        return false
    }

    get_tarefas()
    {
        return this.tarefas
    }

    get_tarefasConcluidas()
    {
        return this.concluidas
    }

    get_dia()
    {
        return this.dia
    }
}