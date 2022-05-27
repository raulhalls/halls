# halls
Aula Carol
O que espero aprender:

Configuração de ambiente C# .NET,
Fundamentos C#,
C# Orientado a objetos,
gateways,
presenters,
controllers,
tipos de aplicações em C#,
Organizaçao de codigo,
Arquitetura limpa,
Frameworks de C#,
C# profissional,
injeção de dependências,
Métodos e funções,
API,
C# com aplicações profissionais.
Getters & Setters
----------------------------------------------------------------------------------------------------------------------
Arquitetura limpa


clean arquiteture é um padrao de arquitetura de software
da mesma forma que existe uma arquitetura de codigos existe o clean arquiteture que é uma sugestao de arquitetura de codigo


o clean arquiteture é baseado em camadas
a arquitetura limpa visa a independencia de framework
uma maior facilidade para escrever e testar sua aplicaçao
independencia de UI (user interface)[se essa aplicaçao sera rodada em anbiente web/HTTP e etc
independencia de banco de dados
independencia de qualquer agente externo(pacotes de desenvolvedores / empresas que voce ira inserir dentro do seu sistema)

a arquitura limpa se baseia em:
1: regra de pendencia(the dependency rule): que fala qual é o sentido que uma camada pode se comunicar com outra
2: as 4 camadas( que podem ser mais de 4)[mas sao no mínimo 4 para isolar a aplicaçao do mundo exterior]
as 4 camadas são : 
1: a camada de entities(Domínio,DDD)[regras de negocio que fazem parte da sua empresa] adendo: entidade nao é model não é a representaçao de um usuário para seu sistema
2: camada de Use Cases ou APP(camada da aplicação em si)[onde ficam as logicas da sua aplicação seus repositórios]
3: camada de comunicação para o mundo exterior (gateways , presenters , controllers)[aqui vao ficar as implementaaçoes que dependem de aonde sera aplicado]
4:interfaces externas(banco de dados , UI , WEB , Devices)[abstraçoes]

só existem 3 camadas a nivel de implementaçao (escrever codigos) a quarta camada é o anbiente externo


o que são caso de uso ou use cases:
faz um pouco do papel do controller 
1: ambiente web/http: nos temos um request que vai ser responsavel por criar uma estancia ela vai chamar sua classe de controller e vc estabelecrá uma lógica e no final haverá uma resposta ( response)
o controler recebe uma request e gera uma response 
e a parte do model esta ligada ao seu banco de dados
que ambas estao ligadas a dependencias externas
--------------------------------------------------------------------------------------------------------------------------------------
Tipos de linguagem:



tipadas - tipada são linguagens que possui tipos de variavel que vc atribui
linguagens fracamente tipadas sao as que possuem tipos determinados pela linguagem
compiladas -  toda linguagem é compilada mas tem niveis de compilaçao diferentes C#
interpretada - é quando a linguagem é executada tudo ao mesmo tempo
gerenciadas - é um programa que executada pelo (runTime) e é feita para o armzenamento de memorias eles nao sao em realTime
monolitipo - é nessesario que o projeto ou a aplicaço parando a aplicaçao 
microserviço - é a resoluçao do problema sem que a aplicaçao seja parada


asp net é a mesma coisa que .net e sao frameworks;

sp net = pai do dot.net;

dot net suporta 44 linguagens;

.net suporta varios tipos de linguagem;

POO é um codigo que vai ser orientado ao um objeto (é se seus problemas vao ser resolvidos com uma aplicaçao propria para aquele tipo de determinada cituaçao);

injeçao de dependencia é correlacionada a iversão de dependencia;


respostas carol:


tipadas = quando ela possui um string  ou int eternamente e esses valores nao podem ser alterados
gerenciada = um codigo nao gerenciado vem de diferentes codigos e diferentes softwares
.dot net = é um framework
c# = é uma linguagem orientada ao objeto devido as suas heranças e encapsulamentos

utiizar padrao de arquitetura limpa 
trazer padrao de arquitetura de codigo limpo
 

Entao a lógica nao deve ficar no seu controller ou no seu model ela deve ficar em uma classe separada e seu controller ira chamar essa classe
essa classe tem que ser totalmente independente porque ela tem que ser reultilizavel e essa classe possuirá suas proprias dependencias ela representará um caso de uso por exemplo (mudar email do usuário)
-----------------------------------------------------------------------------------------------------------------------------------------
PADRAO MVC:

vantagems de uma padrao de desenvolvimento MVC 

Baixo acoplamento: é o grau em que uma classe conhece a outra. Se o conhecimento da classe A sobre a classe B for através de sua interface,
 temos um baixo acoplamento, e isso é bom. Por outro lado, se a classe A depende de membros da classe B que não fazem parte da interface de B,
 então temos um alto acoplamento, o que é ruim.

Coesão: quando temos uma classe elaborada com um único e bem focado propósito, dizemos que ela tem alta coesão, e isso é bom.
 Quando temos uma classe com propósitos que não pertencem apenas a ela, temos uma baixa coesão, o que é ruim. 



o que sao classes?
r- Uma classe de objetos descreve um grupo de objetos com propriedades (atributos) similares,
 comportamento (operações) similares, relacionamentos comuns com outros objetos e uma semântica comum.
 Por exemplo, Pessoa e Companhia são classes de objetos.



model view controller - definiçao de MVC

dividida em 3 camadas 

1:MODEL ESSA CAMADA É RESPONSAVEL PELO ACESSO E MANIPULAÇAO DOS DADOS DA SUA APLICAÇAO É NELA QUE ESTARA SUAS FUNÇOES DE CONSULTA AO BANCO DE DADOS OU DE ACESSO A API 

2:VIEW ELA É RESPONSAVEL PARA A INTERFAÇE QUE SERA APRESENTADA AO USUÁRIO É NELA QUE ESTARAO OS ARQUIVOS EM HTML PARA A FORMATAÇÃO DE SUA PÁGINA

3:CONTROLLER É  A CAMADA DE CONTROLE RESPONSAVEL POR FAZER O MEIO DE CAMPO ENTRE O MODEL E O VIEW ELE VAI RECEBER AS REQUISIÇOES DOS USUÁRIOS EM EM SEGUIDA UTILIZAR AS VIEWS PARA A RENDERIZAR A SAIDA PARA OS USUÁRIOS

TEMOS TAMBEM UMA CAMADA EXTRA QUE É O ROUTER QUE É O ELEMENTO RESPOSAVEL POR CRIAR AS ROTAS QUE LIGAM O ENDEREÇO ATE UM MÉTODO DE UM CONTROLLER


COMO É FEITA A INTERAÇAO ENTRE ESSAS CAMADAS?

O USUÁRIO FAZ UMA REQUISIÇAO AO SISTEMA 
E O PRIMEIRO QUE RECEBE A REQUISIÇAO É O CONTROLLER QUE CONTROLA AS ROTAS E ENTAO ESSA REQUISIÇÃO SERA PASSADA PARA O SEU MODEL NO BANCO DE DADOS. ASSIM O QUE ELE ENCONTROU PARA A SERÁ ENVIADO PARA A CONTROLLER NOVAMENTE E SERÁ ENVIADO A RESPOSTA PARA A VIEW


FRAMEWORKS QUE UTILIZAM MVC: RAILS , MERB (PARA QUEM USA O RUBY)
SPRING , STRUTS (PARA QUE USA O JAVA)
LARAVEL, CODEIGNITER, CAKEPHP, SYMPHONY (PARA QUEM USA O PHP)
REACT ,BACKBONE ,ANGULAR (PARA QUEM USA JAVASCRIPT)
ASP.NET MVC (PARA QUEM USA C#)
DJANGO E CHERRYPY (PARA QUEM USA PYTHON)

CADA UM COM SUAS PARTICULARIDADES UM USANDO PASTAS E OUTRO USANDO APENAS NOMES DOS ARQUIVOS PADRONIZADOS


ADENDO: O MVC É UM PADRAO DE ARQUITETURA DE SOFTWARE MAS ELE NAO É UM DESIGN PATTERN 

ELE É UM PADRÃO MUITO BOM 

MESMO QUE VC  RESOLVA ULTILIZAR O FRAMEWOR PERFEITAMENTE DESENVOLVIDO EM MVC SE QUISER VC PODE BAGUNÇAR TUDO E TACAR UMA CONSULTA AO BANCO DIRETO NO SEU CONTROLLER 
E ELE VAI CONTINUAR FUNCIONANDO MAS É NESSEÁRIO QUE SIGA AS REGRAS DO MVC

E ONDE FICA AS REGRAS DE NEGÓCIO NO MVC?

A REGRA DE NÉGOCIO DEVE FICAR NA CAMADE DE MODELO







