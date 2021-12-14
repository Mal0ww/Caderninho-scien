function alterarMenuEsquerda(menuEsquerda)
{
    //Evento responsável por alterar o menu da esquerda
    menuEsquerda.addEventListener('mouseover', function(){
        document.getElementById('conteudoMenuEsquerda').style.opacity = 1
    })
    menuEsquerda.addEventListener('mouseout', function(){
        document.getElementById('conteudoMenuEsquerda').style.opacity = 0;
    })
}