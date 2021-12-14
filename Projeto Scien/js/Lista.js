export default class Lista
{
    constructor()
    {
        this.lista = new Array(1)
        this.n = 0
    }

    resize()
    {
        let novoTam = Math.max(1, 2 * this.n)
        let aux = []
        aux.length = novoTam
        for(let i = 0; i < this.lista.length; i++)
            aux[i] = this.lista[i]
        
        this.lista.length = novoTam
        this.lista = aux.slice()
    }

    add(i, x)
    {
        if(this.n == this.lista.length)
            this.resize()
            
        let aux = []
        let k = i

        for(let j = 0; j < this.lista.length; j++)
        {
            if(this.lista[k] == undefined)
                break
            
            aux[j] = this.lista[k]
            k++
        }

        this.lista[i] = x

        k = i+1
        for(let j = 0; j < aux.length; j++)
        {
            this.lista[k] = aux[j]
            k++
        }
        this.n++
    }

    remove(i)
    {
        let x = this.lista[i]
        let aux = []
        let k = i+1

        for(let j = 0; j < this.lista.length; j++)
        {
            if(this.lista[k] == undefined)
                break
            aux[j] = this.lista[k]
            k++
        }

        k = i
        for(let j = 0; j < aux.length; j++)
        {
            this.lista[k] = aux[j]
            k++
        }

        this.lista.splice(k, 1)

        this.n--

        if(this.lista.length >= 3 * this.n)
            this.resize()
        return x
    }

    modifica_nome(i, x)
    {
        let level = this.lista[i].pop()
        this.lista[i].pop()
        this.lista[i].push(x)
        this.lista[i].push(level)
    }

    modifica_level(i, x)
    {
        this.lista[i].pop()
        this.lista[i].push(x)
    }

    size()
    {
        return this.n
    }

    retorneTarefa(x)
    {
        return this.lista[x]
    }

    get_nome(i)
    {
        let level = this.lista[i].pop()
        let nome = this.lista[i].pop()
        this.lista[i].push(nome)
        this.lista[i].push(level)
        return nome
    }

    get_level(i)
    {
        let level = this.lista[i].pop()
        this.lista[i].push(level)
        return level
    }
}