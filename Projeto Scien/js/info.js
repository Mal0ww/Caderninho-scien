export default function info()
{
    //Função para o menu INFO
    let divIconeAdd = document.getElementById('iconeAdd').innerHTML = ''
    let logo = document.getElementById('logo').innerHTML = 'I N F O'

    let divDia = document.getElementById('dia').innerHTML = ''
    
    //Selecionando as divs para mostrar a info
    var div1 = document.getElementById('div1')
    var div2 = document.getElementById('div2')
    var div3 = document.getElementById('div3')
    var div4 = document.getElementById('div4')
    var div5 = document.getElementById('div5')
    var div6 = document.getElementById('div6')
    let divConcluirtarefa = document.getElementById('concluir').innerHTML = ''
    div1.style.fontSize = '14pt'
    div2.style.fontSize = '14pt'
    div3.style.fontSize = '14pt'
    div4.style.fontSize = '14pt'
    div5.style.fontSize = '14pt'
    div6.style.textAlign = 'center'
    div1.innerHTML = 'Este App foi feito para testar os conhecimentos das Estrutura de Dados, sendo um projeto dessa matéria (ED).'
    div2.innerHTML = 'O objetivo deste App é tornar mais prático e motivacional o hábito de anotar as tarefas que devem ser realizadas no dia, visando o mínimo possível de procrastinação.'
    div3.innerHTML = 'Este projeto foi desenvolvido por 4 pessoas, porém um integrante desistiu no caminho...'
    div4.innerHTML = 'Recomendamos ler o "Manual de Usuário" antes de sair clicando em tudo'
    div5.innerHTML = 'Para mais dúvidas ou sugestões pode enviar um E-mail para joaquimneto0000@gmail.com'
    div6.innerHTML = 'Obrigado!'
}