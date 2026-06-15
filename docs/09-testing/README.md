# Estratégia de Testes (Testing Strategy)

A qualidade do software neste repositório é garantida através da Pirâmide de Testes. Independentemente da linguagem utilizada no backend ou do framework no frontend, os testes devem ser distribuídos nas seguintes pastas e categorias:

## 1. Testes Unitários (`tests/unit/`)

Testam o menor pedaço de código isolável do sistema (ex: uma função, um Caso de Uso puro, um Mapper).

- **Regra**: Não podem acessar banco de dados, disco, rede ou APIs externas.
- **Mocks**: Qualquer dependência externa deve ser _mockada_ (simulada).
- **Frequência**: Rodam extremamente rápido. Devem ser executados localmente durante o desenvolvimento.

## 2. Testes de Integração (`tests/integration/`)

Garantem que as diferentes peças de código funcionam juntas, especialmente na comunicação com o mundo externo (ex: um Repositório consultando um banco de dados real, mas isolado).

- **Regra**: Podem e devem acessar instâncias reais (mas descartáveis) de Banco de Dados ou Containers Docker de teste.
- **Mocks**: Serviços de terceiros (ex: API da Stripe ou AWS) devem ser mockados, mas recursos internos (seu próprio banco) não.

## 3. Testes End-to-End (`tests/e2e/`)

Simulam o comportamento do usuário final interagindo com o sistema como um todo.

- **Regra**: O sistema inteiro (Frontend, Nginx, Backend, Database) deve estar rodando de verdade. Ferramentas como Cypress ou Playwright (no frontend) devem clicar em botões, preencher formulários e verificar a saída no banco.
- **Frequência**: São os testes mais lentos. Geralmente rodam apenas na esteira de CI/CD (GitHub Actions) antes de um deploy para produção.

## Automação (Git Hooks)

Temos um hook configurado na raiz do projeto (`.husky/pre-push`).
Isso significa que **nenhum código pode ser enviado (push) para o servidor central se a suíte de testes (unit e integration) quebrar**.

_(Nota para o Template: Até que as bibliotecas de teste definitivas - como Jest, Vitest, PyTest ou JUnit - sejam instaladas de acordo com a stack escolhida, o script de teste retornará um log de aviso verde, permitindo o push da estrutura básica)._
