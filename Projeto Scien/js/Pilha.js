export default class Pilha
{
    constructor()
    {
        this.pilha = []
        this.indice = -1
    }

    push(x)
    {
        this.indice++
        this.pilha[this.indice] = x
    }

    pop()
    {
        let x = this.pilha[this.indice]
        this.pilha.splice(this.indice, 1)
        this.indice--
        return x
    }

    top()
    {
        return this.pilha[this.indice]
    }
}