# Informações do Projeto
`Delattio`  


`CURSO` 

Ciência de Computação no  Coreu

## Participantes

> Os membros do grupo são: 
> - Gabriel Pereira Silva
> - Lara Pereira Martins
> - Luisa Clara de Paula Lara Silva
> - Yasmim Cassemiro Viegas

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

>Nosso site tem o objetivo de ajudar minorias, fornecendo orientações quanto agindo como uma plataforma de apoio para realizar denúncias.

## Objetivos

> No nosso site conterá informações para ajudar as pessoas identificarem assédios sofridos e onde poderiam denunciar, além de também ajudar na realização de denúncias anônimas preenchendo um formulário que também seria anônimo. 
> Ou seja
> - Fornecer um formulário para denúncias anônimas.
> - Fornecer informações de canais de denúncia e leis que protegem a vítimas.

## Justificativa

> Mais de 97% das mulheres já sofreram um tipo de assédio, 75% dos negros não denunciam quando sofrem racismo segundo relatorio da comissão de igualdade e direitos humanos do reino unido. Brasil é o país que mais registra casos de homicídio contra pessoas da comunidade LGBTQI+.

Devido a esses fatos, nosso site tem o objetivo de dar voz e ajudar essas minorias.

## Público-Alvo


>  Pessoas físicas que fazem parte de alguma minoria e já sofreram algum tipo de preconceito devido a isso.
> - Mapa de StakeHolder
> ![image](https://user-images.githubusercontent.com/130714429/232174498-00f99555-11a1-4275-9aea-2c6177387868.png)

> - Mapa de Personas
> ![image](https://user-images.githubusercontent.com/130714429/232178203-2d733c43-d7ae-4b72-9893-f1d09dca06ee.png)
> ![image](https://user-images.githubusercontent.com/130714429/232178214-2a60172d-8bd1-4781-9247-c297e05265b2.png)
> ![image](https://user-images.githubusercontent.com/130714429/232178241-796516b8-0641-409b-ae05-410e51bb58f3.png)

 
# Especificações do Projeto

......  COLOQUE AQUI O SEU TEXTO ......

> Miro (template oferecido pelos professores).
> Google Docs.
> Canvas.

## Personas, Empatia e Proposta de Valor

> ![image](https://user-images.githubusercontent.com/130714429/232178274-f6f58517-e091-468b-a062-c43111bfff95.png)
> ![image](https://user-images.githubusercontent.com/130714429/232178296-bafce469-9584-412e-bb82-ade22ba59559.png)
> ![image](https://user-images.githubusercontent.com/130714429/232178312-8a14c577-d376-4a57-b65f-a93be6311b02.png)




## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

|ID| Solução                                               |
|--|-------------------------------------------------------|
|01| O projeto foi pensado para ser desenvolvido dentro do |
|  |    prazo                                              |
|02| O projeto será desenvolvido apenas com html, js e css |


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Interfaces do wireframe elaboradas no canvas e user flow elaborado no miro.


## User Flow


> ![image](https://user-images.githubusercontent.com/130714429/232177997-58d4f75b-baf8-41f9-b4eb-a8cbcb9a6ce1.png)
> ![image](https://user-images.githubusercontent.com/130714429/232178010-04cf5f35-7dfb-497a-a87a-0dc3e6cd80d8.png)
> ![image](https://user-images.githubusercontent.com/130714429/232178024-ba0cdc6a-2127-4729-b6ba-a237eb45a027.png)



## Wireframes


> https://dellattio.my.canva.site Link do template do site
> 
> ![image](https://user-images.githubusercontent.com/130714429/232176883-4d592e93-2f48-48f6-bcb7-d0cda434d276.png)
> Tela inicial.
> ![image](https://user-images.githubusercontent.com/130714429/232176902-23dd45d1-c9b6-4deb-9158-65d2f0cd9e46.png)
> Ao rolar a tela existe a explicação de nosso site seguido de botões para realizar ligações de denúncias.
> ![image](https://user-images.githubusercontent.com/130714429/232176970-e114f7c0-e4a8-45c3-8eb5-4855dcc2aeb3.png)
> ![image](https://user-images.githubusercontent.com/130714429/232176985-89e7a378-e867-4552-94a8-3b263db22bea.png)
>  Entrar em contato com os criadores.


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>

## Divisão de Papéis


|MEMBRO                         | CARGO NO SCRUM                     |
|-------------------------------|------------------------------------|
|Gabriel Pereira Lara           | PO                                 |
|Lara Pereira Martins           | DEV                                |
|Luisa Clara de Paula Lara Silva| Scrum Master                       |
|Yasmim Cassemiro Viegas        | DEV                                |


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVMYIm4CU=/ | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku | | 
|Protótipo Interativo | MavelApp ou Figma | https://dellattio.my.canva.site | 

> Foi escolhido o canvas devido o template fornecido por eles ser mais interressante,
> Repositorio no github, processo de design thinking e organização em grupo teve as escolhas
> de site referente ao recomendado pelos professores.

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
