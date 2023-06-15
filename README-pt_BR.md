# 💻 Customer Success Balancing Challenge

[![Node.js CI](https://github.com/Cleok3Lima/CustomerSuccessBalancing-challenge/actions/workflows/node.js.yml/badge.svg)](https://github.com/Cleok3Lima/CustomerSuccessBalancing-challenge/actions/workflows/node.js.yml)

Essa tarefa consistiu em desenvolver uma solução em Javascript para atribuir e obter o ID do **_Customer Success_** com o maior número de clientes. Foi parte de um desafio de uma entrevista.

## Requisitos

Os requisitos estão no arquivo README dentro da pasta <code>./challenge/javascript</code>

## Teste

```sh
# entrar no diretório da linguagem desejada
cd challenge/javascript

# instalar dependencias
npm i

# rodar testes
npm test

```

## Descrição do desafio

A descrição do desafio está no arquivo README dentro da pasta <code>./challenge</code>

## Histórico de progresso

Comecei este desafio bastante nervosa, pois havia ido mal em outros desafios um pouco antes desse. Estudei muito e estava prestes a pôr à prova tudo o que havia aprendido até então.

Iniciei tentando implementar uma solução simples retornando apenas o array com os contadores de clientes para depois separa-los, porém ao ver o console percebi estarem sendo somados clientes repetidos para diferentes Customer Success. Percebi que não estava deletando os clientes que já tinham um Customer Success correspondente. Voltei no código que fiz essa modificação.

No final meu código estava passando apenas em 5 testes. Pesquisando percebi que poderia usar _new Set_ ao invés de _new Array_ para a minha solução. Após implementá-lo e aplicar um pouco de refatoração o código passou em todos os testes.

## Solução

A solução fornecida segue estas etapas:

1. Verifica se há listas vazias de clientes e gerentes de CS.
2. Cria um conjunto de clientes em espera.
3. Filtra e classifica os gerentes de CS disponíveis com base em suas pontuações.
4. Conta o número de clientes que cada gerente de CS pode atender.
5. Retorna o ID do gerente de CS com o maior número de clientes, ou 0 em caso de empate.

## Complexidade

- Verificação de listas vazias:

  - O(1)

- Criação de um conjunto de clientes:

  - O(m)

- Filtragem e classificação dos Customer Success disponíveis:

  - O(n log n)

- Contagem de clientes atendidos por cada Customer Success:
  - O(nm)

A complexidade total do algoritmo é dominada pela etapa de contagem de clientes, resultando em uma complexidade de tempo de **O(nm)**.

## Conclusão

Este projeto demonstra uma implementação em JavaScript para atribuir e obter o ID do _Customer Success_ com o maior número de clientes. A solução leva em conta a capacidade de cada _Customer Success_, os tamanhos dos clientes e a indisponibilidade dos _Customer Successes_. Ao seguir as etapas fornecidas, a função equilibra com eficiência a carga de trabalho entre os _Customer Successes_.

Essa implementação foi aprovada em todos os casos de teste fornecidos, garantindo que ela funcione corretamente em vários cenários.

## GitHub Actions

Achei que seria divertido adiciona um GitHub Action ao projeto e aproveitei para adcionar a badge no inicio deste documento. 😊💜
