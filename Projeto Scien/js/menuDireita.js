function alterarMenuDireita(menuDireita)
{
    //Função responsável pelo evento de alterar o menu da direita(o dos pontoss)
    menuDireita.addEventListener('mouseover', function(){
        document.getElementById('menuDireita').style.width = '16%'
        document.getElementById('menuDireita').style.backgroundColor = '#48494b'
        document.getElementById('menuDireita').style.borderRadius = '60px 0 0 60px'
        document.getElementById('conteudoMenuDireita').style.opacity = 1
        
    })
    menuDireita.addEventListener('mouseout', function(){
        document.getElementById('conteudoMenuDireita').style.opacity = 0;
        document.getElementById('menuDireita').style.width = '0%'
    })
}