# halls
Aula Carol
O que espero aprender:

Configuração de ambiente C# .NET
Fundamentos C#
C# Orientado a objetos
gateways
presenters
controllers
tipos de aplicações em C#
Organizaçao de codigo
Arquitetura limpa
Frameworks de C#
C# profissional
injeção de dependências
Métodos e funções
API
C# com aplicações profissionais
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

Entao a lógica nao deve ficar no seu controller ou no seu model ela deve ficar em uma classe separada e seu controller ira chamar essa classe
essa classe tem que ser totalmente independente porque ela tem que ser reultilizavel e essa classe possuirá suas proprias dependencias ela representará um caso de uso por exemplo (mudar email do usuário)







