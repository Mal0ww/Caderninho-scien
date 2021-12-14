# Caderninho Scien
## 1. alunos:
- Dannilo de Souza Costa.
- Joaquim Luna Menezes Neto.
- Michael Hitler Batista do Nascimento.
- Victor Matos dos Santos Lima.
## 2. Sobre o projeto
O projeto tem como objetivo, implementar uma agenda inteligente usando diferentes Estruturas de Dados. Ela foi pensada com o propósito de organizar as atividades do dia, sendo possível atribuir niveis dificuldade, onde cada nível tem uma pontuação. Após as atividades serem completadas, elas são marcadas como concluidas, e no final dos sete dias semanais o total de pontos são somados atribuindo uma nota máxima ao usuário.
## 3. Estruturas escolhidas 
Sobre as estruturas aplicadas, foram escolhidas a Fila (de com estrutura de aritmética modular), *Stack* e uma lista, pensadas para ser implementada da seguinte forma:

- Lista:
A lista foi pensada para adicionar as atividades semanais, possibilitando adicionar as atividades em qualquer posição da lista, possobilitando ordenar da melhor forma possível a ordem de execução das atividades. Vale lembrar que cada dia da semana corrresponde a uma lista. 

- Fila:
foi pensada para atribuição de atividades já concluidas. Como as atividades são adicionadas por ordem de conclusão para terem seus valores somados, cada atividade segue uma ordem de conclusão, sendo as concluidas primeiro, tendo seus valores somados primeiro, obedecendo a propriedade *First In, First Out* (FIFO). 

- *Stack*: 
É responsável por "empilhar" de forma separada o Título/Horário da atividade e um nível de dificuldade.

## 4. Manual do Usuário
### 4.1 Tela inicial
|![Home](https://github.com/miHITLER/Projeto-Estrutura-de-Dados---Caderninho/blob/main/prints/Tela%20Principal.jpeg?raw=true)|
|:--:| 

### 4.2 Botões
|![botões do manual](https://github.com/miHITLER/Projeto-Estrutura-de-Dados---Caderninho/blob/main/prints/Tela%20Principal%20manual.jpg?raw=true)|
|:--:| 

1. Menu Lateral.
3. Avançar/Retroceder dias da semana.
4. Campo para especificar atividades.
5. Botão para adicionar atividades. 
6. Janela de pontuações e recompensas. 
7. Botão para conclusão de atividades.

### 4.3 Menu lateral.
|![menu lateral](https://github.com/miHITLER/Projeto-Estrutura-de-Dados---Caderninho/blob/main/prints/Atividades%20para%20concluir.jpg?raw=true)|
|:--:| 
| *A direita o menu lateral* |

1. Menu Lateral. <br/>
  1.1 Botão de Home. <br/>
  1.2 Botão de atividades concluidas.<br/>
  1.3 Informações sobre os integrantes. <br/>
  1.4 Informações sobre a aplicação.
  
### 4.4 Janela de pontuação.
|![Botão de recompensas](https://github.com/miHITLER/Projeto-Estrutura-de-Dados---Caderninho/blob/main/prints/Aba%20de%20pontua%C3%A7%C3%B5es.jpg?raw=true)|
|:--:| 
| *A esquerda a janela de pontuação* |

5. Janela de pontuações e recompensas. <br/>
  5.1 Botão de Recompensas.

### 4.5 Adicionar atividade.
|![adição de atividades](https://user-images.githubusercontent.com/85904207/145924716-bac5129d-11e5-468d-b7cb-f453d771aaab.png)|
|:--:| 
| *Atividades após a adicição* |

Para adicionar uma ou mais atividade(s) basta:
1. Avançar/Retroceder até o dia em que a atividade deve ser adicionada.
2. Apertar o botão de adicionar atividade.
3. Adicionar um Titulo/Horário.
4. Especificar a atividade.
5. Especificar o nível de dificuldade. 

### 4.6 Concluir atividade.
|![atvididades concluidas](https://github.com/miHITLER/Projeto-Estrutura-de-Dados---Caderninho/blob/main/prints/Atividades%20concluidas.jpeg?raw=true)|
|:--:|
| *Tela de atividades concluidas*|

Para concluir uma ou mais atividade(s) basta:
1. Apertar o botão de concluir atividade.
2. Selecionar as atividades que deseja concluir.

Para ver a(s) atividade(s) concluida(s) basta:
1. Passar o *mouse* no menu lateral.
2. Apertar o botão Atividades concluidas.

### 4.7 Pontuação.
|![atvididades concluidas](https://github.com/miHITLER/Projeto-Estrutura-de-Dados---Caderninho/blob/main/prints/pontos.jpeg?raw=true)|
|:--:|

Para Ver a pontuação diária e semanal basta:
1. Passar o *mouse* para abrir a janela de pontuações.

### 4.8 Recompensas.
|![atvididades concluidas](https://github.com/miHITLER/Projeto-Estrutura-de-Dados---Caderninho/blob/main/prints/Ar%C3%A9a%20de%20recompensas.jpeg?raw=true)|
|:--:|

Para Ver a pontuação diária e semanal basta:
1. Passar o *mouse* para abrir a janela de pontuações.
2. Usar o botão de recompensas. 
