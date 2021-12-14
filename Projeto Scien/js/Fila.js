/*Classe para implementacao da fila, para adicionar as atividades
do dia*/

export default class Fila{

  constructor()
  {
    this.fila = [];
    this.n = 0;
    this.ini_fila = 0;
  }

  resize(){
    const novo_tam = Math.max(1,2*this.n);
    var aux = [];
    aux.length = novo_tam;  
    
    for(var i = 0; i < this.fila.length; i++)
    {
      var valor_aux = (i + this.ini_fila) % this.fila.length;
      aux[i] = this.fila[valor_aux];
    }
    
    this.fila.length = novo_tam;
    this.fila = aux.slice()
    this.ini_fila = 0;  
  }

  add(atividade)
  {
    if(this.n + 1 > this.fila.length){
      this.resize();
    }
    var valor_posi = (this.ini_fila + this.n) % this.fila.length;

    this.fila[valor_posi] = atividade;
    this.n++;
  }

  remove()
  {
    let atividade_concluida = this.fila[this.ini_fila];

    this.ini_fila = (this.ini_fila + 1) % this.fila.length; //estabelece o novo inicio
    this.n--; 

    if(this.fila.length >= 3*this.n){
      this.resize();
    }

    return atividade_concluida; //se precisar de retorno
  }

  get_nome(j)
  {
    for(var i = 0; i < this.fila.length; i++)
      if(i == j)
      {
        let level = this.fila[i].pop()
        let nome = this.fila[i].pop()
        this.fila[i].push(nome)
        this.fila[i].push(level)
        return nome
      }
    
    return false
  }

  inicio()
  {
    return this.fila[this.ini_fila]
  }

  fim()
  {
    return this.fila[this.n]
  }
}