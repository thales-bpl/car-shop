# :construction: README customizado em construção ! :construction:
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

Bem vindo ao repositório do projeto Car Shop!

Esse projeto é um back-end para uma loja de veículos, desenvolvido em TypeScript usando os princípios de Programação Orientada a Objetos, estruturado em camadas (MSC) e conectado a um BD (MongoDB), ambos back-end e BD dockerizados e orquestrados com Docker Compose. Aplicação é testada usando Mocha e Chai.

Esse projeto foi realizado durante o curso de Web Dev Full-Stack da Trybe e não foi desenvolvido do zero.
A parte do projeto que compete à Trybe foram os testes de cobertura e configuração do lint e jest.

O que foi desenvolvido por mim: camadas controller, model, service, rotas, tratamento de erros, docker, interfaces, middlewares e testes unitários.

Para rodar rodar o app local:
1. Inicializar Docker:
''' npm run compose:up'''

2. Inicializar app:
No terminal do container node:16.14:
''' npm run dev'''
