# Plano de Desenvolvimento — Residencial Novo Potengi

## Estratégia

Desenvolvimento paralelo frontend + backend dividido em **6 marcos**.
Cada marco entrega um módulo funcional de ponta a ponta, com dependências mínimas entre as tracks.

```
Marco 1 ─── Fundação (infra + setup)
   ├── Frontend: Vite + Tailwind + Router + ESLint config
   └── Backend:  NestJS + Prisma + Banco + Docker

Marco 2 ─── Módulo Institucional (páginas públicas)
   ├── Frontend: Páginas institucionais + Layout base
   └── Backend:  CRUD conteúdo + CMS admin

Marco 3 ─── Módulo de Autenticação
   ├── Frontend: Login + Guardas de rota + Sessão
   └── Backend:  Auth (JWT) + Guardas

Marco 4 ─── Módulo de Pré-cadastro (Registration)
   ├── Frontend: Formulário público + Validação + Upload
   └── Backend:  CRUD candidatos + Upload docs

Marco 5 ─── Painel Administrativo (Candidates + Documents)
   ├── Frontend: Lista + Filtros + Detalhes + Dashboard
   └── Backend:  Endpoints admin + Exportação + Logs

Marco 6 ─── Finalização
   ├── Testes E2E
   ├── Ajustes finais Docker / Nginx
   └── Deploy
```

---

## Marco 1 — Fundação

### Frontend

| Tarefa | Arquivos |
|--------|----------|
| Configurar Tailwind CSS no Vite | `frontend/tailwind.config.js`, `frontend/postcss.config.js`, `frontend/src/app/index.css` |
| Instalar React Router, React Hook Form, Zod | `frontend/package.json` |
| Configurar path aliases (`@/` → `src/`) | `frontend/vite.config.ts`, `frontend/tsconfig.app.json` |
| Criar `eslint.config.mjs` estendendo raiz com regras React | `frontend/eslint.config.mjs` |
| Estruturar providers globais (router, tema) | `frontend/src/app/providers/` |
| Layout base (Header, Footer, AppBar) | `frontend/src/shared/components/layout/` |
| Configurar cliente HTTP (axios) | `frontend/src/shared/services/http-client.ts` |
| Button, Input, Modal (design system atômico) | `frontend/src/shared/components/ui/` |

**Dependências para instalar no frontend:**

```json
{
  "react-router-dom": "^7.x",
  "react-hook-form": "^7.x",
  "@hookform/resolvers": "^5.x",
  "zod": "^3.x",
  "axios": "^1.x",
  "@tanstack/react-query": "^5.x",
  "tailwindcss": "^4.x",
  "@tailwindcss/vite": "^4.x"
}
```

### Backend

| Tarefa | Arquivos |
|--------|----------|
| Inicializar projeto NestJS | `backend/package.json`, `backend/nest-cli.json`, `backend/tsconfig.json` |
| Configurar Prisma + PostgreSQL | `backend/prisma/schema.prisma`, `backend/src/config/database/` |
| Executar migração inicial | `backend/prisma/migrations/` |
| Estruturar módulos (auth, candidates, content, logs) | `backend/src/modules/` (NestJS modules) |
| Configurar variáveis ambiente | `backend/.env`, `backend/src/config/env/` |
| Configurar Docker Compose para dev (hot reload) | `docker-compose.dev.yml` |
| Adapter do Prisma (infrastructure) | `backend/src/infrastructure/database/prisma.service.ts` |

> **Nota:** A estrutura `backend/src/core/` (entities, use-cases, ports) será preenchida dentro de cada módulo, seguindo Clean Architecture. A estrutura `backend/src/modules/` conterá os módulos NestJS, cada um com `core/`, `infrastructure/`, `presentation/`.

### Artefato Compartilhado

| Tarefa | Descrição |
|--------|-----------|
| Schema Zod compartilhado | Validações de CPF, e-mail, telefone, renda — duplicadas em frontend e backend com mesmas regras |

---

## Marco 2 — Módulo Institucional

### Frontend

| Tarefa | Módulo |
|--------|--------|
| Página Hero (home) | `src/modules/institutional/presentation/pages/HomePage.tsx` |
| Página Sobre | `src/modules/institutional/presentation/pages/AboutPage.tsx` |
| Página MCMV Cidades | `src/modules/institutional/presentation/pages/McmvPage.tsx` |
| Página Como Participar | `src/modules/institutional/presentation/pages/HowToJoinPage.tsx` |
| Página FAQ | `src/modules/institutional/presentation/pages/FaqPage.tsx` |
| Página Contato | `src/modules/institutional/presentation/pages/ContactPage.tsx` |
| Configurar rotas públicas | `src/app/router/public-routes.tsx` |

### Backend

| Tarefa | Clean Arch Layer |
|--------|------------------|
| Entidade Content | `core/entities/content.entity.ts` |
| Use Case: getContentBySlug | `core/use-cases/content/get-content-by-slug.usecase.ts` |
| Use Case: updateContent | `core/use-cases/content/update-content.usecase.ts` |
| Port: ContentRepository | `core/ports/content-repository.port.ts` |
| Implementação Prisma | `infrastructure/repositories/content-prisma.repository.ts` |
| Controller Content | `presentation/controllers/content.controller.ts` |
| Módulo NestJS Content | `content.module.ts` |

---

## Marco 3 — Módulo de Autenticação

### Frontend

| Tarefa | Camada |
|--------|--------|
| Interfaces de domínio (User, LoginRequest) | `domain/` |
| Use Case: login | `application/usecases/login.usecase.ts` |
| DTOs | `application/dto/` |
| Repositório (implementação HTTP) | `infrastructure/repositories/auth.repository.ts` |
| Página de Login | `presentation/pages/LoginPage.tsx` |
| Página Esqueci Senha | `presentation/pages/ForgotPasswordPage.tsx` |
| Hook: useAuth | `presentation/hooks/useAuth.ts` |
| Store: authStore (Zustand) | `presentation/store/auth-store.ts` |
| Guard: AuthGuard | `presentation/guards/AuthGuard.tsx` |
| Rotas protegidas | `src/app/router/admin-routes.tsx` |

### Backend

| Tarefa | Clean Arch Layer |
|--------|------------------|
| Entidade Usuario | `core/entities/usuario.entity.ts` |
| Use Case: login | `core/use-cases/auth/login.usecase.ts` |
| Use Case: forgotPassword | `core/use-cases/auth/forgot-password.usecase.ts` |
| Use Case: resetPassword | `core/use-cases/auth/reset-password.usecase.ts` |
| Port: AuthRepository | `core/ports/auth-repository.port.ts` |
| Implementação Prisma | `infrastructure/repositories/auth-prisma.repository.ts` |
| Controller Auth | `presentation/controllers/auth.controller.ts` |
| JWT Strategy / Guard | `presentation/guards/jwt-auth.guard.ts` |
| Módulo NestJS Auth | `auth.module.ts` |

---

## Marco 4 — Módulo de Pré-cadastro (Registration)

### Frontend

| Tarefa | Camada |
|--------|--------|
| Entidade Candidato (interface) | `domain/entities/candidato.ts` |
| Schemas Zod (validação) | `application/dto/cadastro-schema.ts` |
| Use Case: submitRegistration | `application/usecases/submit-registration.usecase.ts` |
| Repositório (implementação HTTP) | `infrastructure/repositories/registration.repository.ts` |
| Página de Cadastro (multi-step) | `presentation/pages/CadastroPage.tsx` |
| Página de Sucesso | `presentation/pages/CadastroSucessoPage.tsx` |
| Componentes do formulário | `presentation/components/` |
| Upload de documentos (widget) | `presentation/components/UploadDocumentos.tsx` |
| Hook: useRegistration | `presentation/hooks/useRegistration.ts` |

### Backend

| Tarefa | Clean Arch Layer |
|--------|------------------|
| Entidade Candidato | `core/entities/candidato.entity.ts` |
| Entidade Documento | `core/entities/documento.entity.ts` |
| Use Case: createCandidato | `core/use-cases/candidatos/create-candidato.usecase.ts` |
| Use Case: uploadDocumento | `core/use-cases/documentos/upload-documento.usecase.ts` |
| Port: CandidatoRepository | `core/ports/candidato-repository.port.ts` |
| Port: DocumentoRepository | `core/ports/documento-repository.port.ts` |
| Port: StorageProvider | `core/ports/storage-provider.port.ts` |
| Implementação Prisma (candidatos + docs) | `infrastructure/repositories/` |
| Implementação Supabase Storage | `infrastructure/external-services/supabase-storage.ts` |
| Controller Candidatos (público) | `presentation/controllers/candidatos.controller.ts` |
| Controller Documentos (público) | `presentation/controllers/documentos.controller.ts` |
| Módulo NestJS Candidatos + Documentos | `candidatos.module.ts` |

---

## Marco 5 — Painel Administrativo

### Frontend

| Tarefa | Módulo |
|--------|--------|
| **Candidates** |
| Página Lista de Candidatos | `src/modules/candidates/presentation/pages/CandidatesListPage.tsx` |
| Página Detalhes do Candidato | `src/modules/candidates/presentation/pages/CandidateDetailPage.tsx` |
| Filtros (status, data, faixa renda) | `src/modules/candidates/presentation/components/Filters.tsx` |
| Tabela com paginação | `src/modules/candidates/presentation/components/CandidatesTable.tsx` |
| Timeline de status | `src/modules/candidates/presentation/components/StatusTimeline.tsx` |
| Modal de alteração de status | `src/modules/candidates/presentation/components/StatusChangeModal.tsx` |
| **Documents** |
| Lista de documentos do candidato | `src/modules/documents/presentation/components/DocumentList.tsx` |
| Visualizador de documentos | `src/modules/documents/presentation/components/DocumentViewer.tsx` |
| **Dashboard** |
| Página Dashboard | `src/modules/candidates/presentation/pages/DashboardPage.tsx` |
| Cards de estatísticas | `src/modules/candidates/presentation/components/StatsCards.tsx` |
| Gráficos (Status distribuição) | `src/modules/candidates/presentation/components/StatusChart.tsx` |
| **Content Management** |
| Página de gerenciamento de conteúdo | `src/modules/institutional/presentation/pages/ContentManagerPage.tsx` |
| Editor de conteúdo (rich text) | `src/modules/institutional/presentation/components/ContentEditor.tsx` |
| **Logs** |
| Página de logs | `src/modules/candidates/presentation/pages/LogsPage.tsx` |
| Tabela de logs | `src/modules/candidates/presentation/components/LogsTable.tsx` |
| **Store global** | `presentation/store/` |
| **Layout admin** | Sidebar + Header | `src/shared/components/layout/AdminLayout.tsx` |

### Backend

| Tarefa | Clean Arch Layer |
|--------|------------------|
| Use Case: listCandidatos (com filtros) | `core/use-cases/candidatos/list-candidatos.usecase.ts` |
| Use Case: getCandidatoById | `core/use-cases/candidatos/get-candidato.usecase.ts` |
| Use Case: updateCandidatoStatus | `core/use-cases/candidatos/update-status.usecase.ts` |
| Use Case: exportCandidatos | `core/use-cases/candidatos/export-candidatos.usecase.ts` |
| Use Case: getDashboardStats | `core/use-cases/dashboard/get-stats.usecase.ts` |
| Use Case: listLogs | `core/use-cases/logs/list-logs.usecase.ts` |
| Controller Admin (candidatos) | `presentation/controllers/admin-candidatos.controller.ts` |
| Controller Dashboard | `presentation/controllers/dashboard.controller.ts` |
| Controller Logs | `presentation/controllers/logs.controller.ts` |
| Guards de角色 (roles) | `presentation/guards/roles.guard.ts` |
| Módulo NestJS Dashboard | `dashboard.module.ts` |
| Módulo NestJS Logs | `logs.module.ts` |

---

## Marco 6 — Finalização

| Tarefa | Track |
|--------|-------|
| Testes unitários (use cases + entidades) | Backend |
| Testes de integração (controllers + Prisma) | Backend |
| Testes unitários (hooks + componentes) | Frontend (Vitest) |
| Testes E2E (Playwright) — fluxos críticos | Frontend |
| Ajustar Dockerfiles (build multi-stage) | Ambos |
| Ajustar Nginx (cache, headers, proxy) | Infra |
| Revisão de segurança (CORS, Helmet, rate limiting) | Backend |
| Documentação da API (Swagger/OpenAPI) | Backend |
| README com instruções de setup | Ambos |

---

## Dependências entre Tracks

```
Frontend                    Backend
──────────────────────────  ──────────────────────────
Marco 1 ──── independente   Marco 1 ──── independente
                 ╲               ╱
                  ╲             ╱
Marco 2 ──── precisa de:     Marco 2 ──── independente
  • API de conteúdo (GET)     (fornece a API)

Marco 3 ──── precisa de:     Marco 3 ──── independente
  • API de auth (login)       (fornece a API)

Marco 4 ──── precisa de:     Marco 4 ──── independente
  • API de cadastro           (fornece a API)
  • API de upload

Marco 5 ──── precisa de:     Marco 5 ──── independente
  • APIs admin (candidatos,   (fornece as APIs)
    dashboard, logs)
```

O backend sempre pode ser desenvolvido primeiro em cada marco, fornecendo a API para o frontend consumir em paralelo ou logo em seguida.

---

## Estrutura Final Esperada

```
frontend/src/
├── main.tsx
├── app/
│   ├── providers/
│   │   ├── RouterProvider.tsx
│   │   ├── QueryProvider.tsx
│   │   └── ThemeProvider.tsx
│   ├── router/
│   │   ├── public-routes.tsx
│   │   ├── admin-routes.tsx
│   │   └── index.tsx
│   ├── App.tsx
│   ├── App.css
│   └── index.css
├── modules/
│   ├── auth/          (domain, application, infrastructure, presentation)
│   ├── candidates/    (domain, application, infrastructure, presentation)
│   ├── registration/  (domain, application, infrastructure, presentation)
│   ├── institutional/ (domain, application, infrastructure, presentation)
│   └── documents/     (domain, application, infrastructure, presentation)
└── shared/
    ├── assets/
    ├── components/
    │   ├── layout/    (Header, Footer, AppBar, Sidebar, AdminLayout)
    │   └── ui/        (Button, Input, Modal, Table, Select, etc.)
    ├── services/      (http-client.ts)
    ├── theme/         (theme.ts)
    └── utils/         (formatCPF, validators, helpers)

backend/src/
├── modules/
│   ├── auth/
│   │   ├── core/          (entities, use-cases, ports)
│   │   ├── infrastructure/(repositories)
│   │   ├── presentation/  (controllers, guards)
│   │   └── auth.module.ts
│   ├── candidatos/
│   │   ├── core/
│   │   ├── infrastructure/
│   │   ├── presentation/
│   │   └── candidatos.module.ts
│   ├── content/
│   │   ├── core/
│   │   ├── infrastructure/
│   │   ├── presentation/
│   │   └── content.module.ts
│   └── logs/
│       ├── core/
│       ├── infrastructure/
│       ├── presentation/
│       └── logs.module.ts
├── config/            (env, DI global)
└── main.ts
```
