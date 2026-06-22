# Residencial Novo Potengi

Site de divulgação e captação de interessados nas unidades habitacionais do Programa Minha Casa Minha Vida (MCMV) — modalidade Cidades, no município de Potengi/CE.

## Stack

| Camada | Tecnologia |
|--------|------------|
| **Frontend** | Next.js + Tailwind CSS + React Hook Form + Zod |
| **Backend** | NestJS + Prisma ORM |
| **Banco de Dados** | PostgreSQL |
| **Storage** | Supabase Storage (documentos) |
| **Infraestrutura** | Docker + Nginx |

## Módulos

- **Página Institucional** — Banner, sobre o residencial, MCMV Cidades, como participar, FAQ, contato, documentação necessária
- **Pré-Cadastro** — Formulário completo com validação (CPF, maioridade, duplicidade), upload de documentos, confirmação por e-mail
- **Painel Administrativo** — Login seguro, gestão de cadastros, filtros, exportação CSV/Excel, log de ações, CRUD de conteúdo

## Estrutura do Projeto

```
.
├── docs/                 # Documentação do projeto
├── infrastructure/       # Nginx, Terraform, Ansible
├── backend/              # NestJS API (src/ + tests/)
│   ├── src/
│   └── tests/
├── frontend/             # Next.js (src/ + tests/)
│   ├── src/
│   └── tests/
├── scripts/              # Automação
├── .github/              # CI/CD
├── docker-compose.yml    # Orquestração Full Stack
└── docker-compose.monitoring.yml
```

## Pré-requisitos

- Node.js 20+
- Docker e Docker Compose
- PostgreSQL (ou utilizar o container do docker-compose)

## Primeiros Passos

```bash
# Instalar dependências
cd backend && npm install
cd ../frontend && npm install

# Configurar variáveis de ambiente
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local

# Rodar com Docker (full stack)
docker compose up -d

# Ou rodar em desenvolvimento
cd backend && npm run start:dev
cd frontend && npm run dev
```

## Documentação

Consulte a pasta [`docs/`](./docs) para requisitos, arquitetura, workflow e mais.

## Licença

ISC
