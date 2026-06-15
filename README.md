# Project Structure Template

This repository serves as a stack-agnostic template for software development projects. It is organized to support both strong project management and clean software architecture.

## Overview

The structure follows a **Monorepo** approach, separating the frontend and backend to allow for specific architectural patterns in each, while keeping management centralized.

- **`docs/`**: Everything related to project management, product requirements, and technical documentation.
- **`infrastructure/`**: Operations and DevOps, including Terraform (IaC), Ansible playbooks, and Nginx configs.
- **`backend/`**: The backend source code (`src/` and `tests/`), organized around Clean Architecture principles (independent of frameworks, databases, and UIs). Contains its own `Dockerfile`.
- **`frontend/`**: The frontend source code, organized around a Module-Based Architecture (Feature-Sliced Design) for high scalability and cohesion. Contains its own `Dockerfile`.
- **`scripts/`**: Automation for dev ops and utility tasks.
- **`.github/`**: CI/CD pipelines.
- **`docker-compose.yml`**: Root orchestrator for spinning up the full stack (Frontend, Backend, DB, Nginx).

## Padrões e Regras de Ouro (Standards & Guidelines)

Para manter este projeto limpo, escalável e livre de dívidas técnicas, toda a equipe deve seguir rigorosamente as diretrizes abaixo:

### 1. Padrão de Nomenclatura

- **Pastas e Arquivos**: Utilizamos exclusivamente `kebab-case` (ex: `use-cases`, `user-controller.ts`). Isso é "URL-friendly", padrão em frameworks modernos e evita bugs de _case-sensitivity_ entre Windows e Linux/Mac.

### 2. Regras de Arquitetura (A "Regra de Ouro")

Tanto o Backend quanto os Módulos do Frontend seguem a **Clean Architecture**. A regra de ouro é a **Regra de Dependência**:

> _As dependências de código só podem apontar para dentro. A camada mais interna (`domain`/`core`) não pode saber absolutamente NADA sobre as camadas externas (Banco de Dados, React, Axios, Express)._

- **NÃO FAÇA**: Importar uma biblioteca do banco de dados (ex: Prisma, Mongoose) dentro de uma Entidade ou Caso de Uso.
- **NÃO FAÇA**: Importar código do `frontend/` dentro do `backend/` e vice-versa. O Monorepo serve para organizar, não para misturar código cliente-servidor.

### 3. Frontend (Modular Clean Architecture)

- Não crie componentes genéricos dentro de módulos de negócio. Se um Botão ou Input for usado em mais de um lugar, ele deve obrigatoriamente ir para `frontend/src/shared/components/`.
- Cada módulo em `frontend/src/modules/` deve ser independente. O módulo de `auth` não deve chamar diretamente a infraestrutura do módulo de `products`.

### 4. Git Workflow & Commits

- Utilizamos **Conventional Commits**. O formato obrigatório é: `<tipo>(<escopo>): <descrição>` (ex: `feat(auth): adiciona tela de login`).
- Temos o **Husky** instalado na raiz. Ele irá **bloquear** qualquer commit que não siga o padrão.
- Leia o manual completo em: [`docs/08-workflow/README.md`](./docs/08-workflow/README.md).

### 5. Qualidade de Código (Linting & Formatação)

- **Prettier e ESLint** estão configurados em conjunto com o Husky (`lint-staged`).
- **NÃO** commite código mal formatado. Ao rodar `git commit`, os arquivos modificados serão formatados automaticamente. Se houver um erro de linting grave, o commit será abortado.

## Getting Started

Por favor, consulte os arquivos `README.md` específicos dentro das pastas `docs/`, `backend/`, `frontend/` e `infrastructure/` para instruções detalhadas de inicialização e deploy de cada área.
