import dias from './Dia.js'
export default function gerarDias()
{
    var dom = new dias('Domingo')
    var seg = new dias('Segunda')
    var ter = new dias('Terça')
    var qua = new dias('Quarta')
    var qui = new dias('Quinta')
    var sex = new dias('Sexta')
    var sab = new dias('Sábado')
    

    var semana = []
    semana.push(dom)
    semana.push(seg)
    semana.push(ter)
    semana.push(qua)
    semana.push(qui)
    semana.push(sex)
    semana.push(sab)
    

    return semana
}