# Especificação Técnica — Residencial Novo Potengi

## 1. Visão Geral

Site institucional de divulgação do Residencial Novo Potengi (Programa MCMV — modalidade Cidades) com sistema de pré-cadastro de interessados e painel administrativo para gestão dos cadastros.

### Stack

| Camada | Tecnologia |
|--------|------------|
| Frontend | Next.js (App Router) + Tailwind CSS + React Hook Form + Zod |
| Backend | NestJS + Prisma ORM |
| Banco de Dados | PostgreSQL |
| Storage | Supabase Storage |
| Proxy | Nginx |
| Containerização | Docker + Docker Compose |

---

## 2. Clean Architecture — Aplicação no Projeto

O projeto segue **Clean Architecture** (Robert C. Martin) com **Regra de Dependência**: dependências apontam sempre para dentro. Nada na camada interna conhece as camadas externas.

### 2.1 Backend (NestJS)

```
src/
├── core/                   # Independente de frameworks, DB, UI
│   ├── entities/           # Entidades de domínio (regras de negócio)
│   ├── use-cases/          # Casos de uso da aplicação
│   ├── ports/              # Interfaces (contratos) para repositórios e serviços
│   ├── dtos/               # Objetos de transferência de dados
│   ├── exceptions/         # Exceções de domínio
│   └── event-handlers/     # Handlers de eventos de domínio
├── presentation/           # Adaptadores de interface (frameworks)
│   ├── controllers/        # Rotas/controllers HTTP (NestJS)
│   └── ui/                 # Views (se houver renderização server-side)
├── infrastructure/         # Implementações concretas
│   ├── database/           # Prisma Service, migrations, seeds
│   └── external-services/  # Supabase Storage, envio de e-mail, etc.
└── config/                 # Configurações (env, módulos globais)
```

**Fluxo de dados:**
1. Controller recebe requisição HTTP
2. Controller chama Use Case (injetado via interface/port)
3. Use Case orquestra regras de negócio com Entities
4. Use Case persiste/consulta via Port (interface)
5. Implementação concreta (PrismaRepository) executa no banco
6. Resultado retorna pela mesma cadeia

### 2.2 Frontend (Next.js)

Cada módulo de negócio segue Clean Architecture interna:

```
src/modules/<modulo>/
├── domain/
│   ├── entities/           # Entidades de domínio (tipo/interface)
│   └── ports/              # Interfaces para repositórios/services
├── application/
│   ├── usecases/           # Casos de uso
│   ├── dto/                # DTOs
│   └── mappers/            # Mappers entidade <-> DTO
├── infrastructure/
│   └── repositories/       # Implementações (chamadas HTTP à API)
└── presentation/
    ├── components/         # Componentes React do módulo
    ├── pages/              # Páginas (se sub-rotas do módulo)
    ├── hooks/              # Hooks personalizados
    ├── store/              # Estado local do módulo (Zustand/Context)
    └── guards/             # Guards de autenticação/autorização
```

**Módulos previstos:**

| Módulo | Descrição |
|--------|-----------|
| `auth` | Login, recuperação de senha, sessão |
| `candidates` | Gestão de pré-cadastrados (admin) |
| `registration` | Formulário público de pré-cadastro |
| `institutional` | Páginas institucionais (sobre, MCMV, FAQ, contato) |
| `documents` | Upload e visualização de documentos |

**Shared (código compartilhado):**

```
src/shared/
├── components/      # Button, Input, Modal, Table, etc.
├── services/        # API client (axios/fetch configurado)
├── utils/           # formatCPF, validações, helpers
└── assets/          # Imagens, ícones, fontes
```

---

## 3. Entidades de Domínio

### 3.1 Candidato

```
Entidade Candidato
  id: UUID
  nomeCompleto: string
  cpf: string
  rg: string
  dataNascimento: Date
  estadoCivil: string
  nomeConjuge?: string
  cpfConjuge?: string
  telefone: string
  email: string
  enderecoCompleto: string
  rendaFamiliar: number
  numeroDependentes: number
  composicaoFamiliar: ComposicaoFamiliar[]
  profissao: string
  possuiImovelProprio: boolean
  naturalidade: string
  nacionalidade: string
  status: StatusCandidato
  createdAt: Date
  updatedAt: Date

Regras de negócio:
  - CPF único (RN001)
  - Idade mínima 18 anos (RN002)
  - Não pode possuir imóvel próprio (RN003)
  - Renda deve se enquadrar nas faixas MCMV (RN004)
```

### 3.2 Documento

```
Entidade Documento
  id: UUID
  candidatoId: UUID
  tipoDocumento: string
  arquivoPath: string  (URL Supabase Storage)
  uploadedAt: Date
```

### 3.3 Usuario (Administrador)

```
Entidade Usuario
  id: UUID
  nome: string
  email: string
  senhaHash: string
  createdAt: Date
```

### 3.4 LogAtividade

```
Entidade LogAtividade
  id: UUID
  usuarioId: UUID
  acao: string
  entidadeTipo: string
  entidadeId: UUID
  detalhes: any       (JSON — valores antigo/novo)
  createdAt: Date
```

### 3.5 StatusCandidato (Enum)

```
Pré-cadastrado → Em análise
  ├→ Documentação Pendente
  ├→ Aprovado → Convocado → Contemplado
  └→ Reprovado
  Desistente
```

Transições irreversíveis: Reprovado e Desistente não retornam a status anterior (RN009).

---

## 4. Banco de Dados (Prisma Schema)

```prisma
enum StatusCandidato {
  PRE_CADASTRADO
  EM_ANALISE
  DOCUMENTACAO_PENDENTE
  APROVADO
  REPROVADO
  CONVOCADO
  CONTEMPLADO
  DESISTENTE
}

model Candidato {
  id                String            @id @default(uuid())
  nomeCompleto      String
  cpf               String            @unique
  rg                String
  dataNascimento    DateTime
  estadoCivil       String
  nomeConjuge       String?
  cpfConjuge        String?
  telefone          String
  email             String
  enderecoCompleto  String
  rendaFamiliar     Decimal
  numeroDependentes Int
  composicaoFamiliar Json?
  profissao         String
  possuiImovelProprio Boolean
  naturalidade      String
  nacionalidade     String
  status            StatusCandidato   @default(PRE_CADASTRADO)
  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt

  documentos        Documento[]
}

model Documento {
  id              String   @id @default(uuid())
  candidatoId      String
  tipoDocumento    String   // RG, CPF, comprovante_residencia, comprovante_renda, certidao_casamento, certidao_nascimento
  arquivoPath      String   // URL do Supabase Storage
  uploadedAt       DateTime @default(now())

  candidato        Candidato @relation(fields: [candidatoId], references: [id], onDelete: Cascade)
}

model Usuario {
  id         String           @id @default(uuid())
  nome       String
  email      String           @unique
  senhaHash  String
  createdAt  DateTime         @default(now())

  logs       LogAtividade[]
}

model LogAtividade {
  id           String   @id @default(uuid())
  usuarioId    String
  acao         String
  entidadeTipo String
  entidadeId   String
  detalhes     Json?
  createdAt    DateTime @default(now())

  usuario      Usuario  @relation(fields: [usuarioId], references: [id])
}
```

---

## 5. API (NestJS — RESTful)

### 5.1 Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/auth/login` | Login (email + senha) → JWT |
| POST | `/api/auth/forgot-password` | Solicitar recuperação de senha |
| POST | `/api/auth/reset-password` | Resetar senha com token |

### 5.2 Candidatos

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/candidates` | Criar pré-cadastro (público) |
| GET | `/api/candidates` | Listar candidatos (admin, com filtros) |
| GET | `/api/candidates/:id` | Detalhes do candidato (admin) |
| PATCH | `/api/candidates/:id/status` | Alterar status (admin) |
| GET | `/api/candidates/export` | Exportar CSV/Excel (admin) |

### 5.3 Documentos

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/documents/upload` | Upload de documento (público) |
| GET | `/api/documents/:candidatoId` | Listar documentos do candidato (admin) |
| GET | `/api/documents/file/:id` | Download/visualizar documento (admin) |

### 5.4 Conteúdo Institucional

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/content/:slug` | Obter conteúdo por slug (público) |
| PUT | `/api/content/:slug` | Atualizar conteúdo (admin) |

### 5.5 Logs

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/logs` | Listar logs de atividade (admin) |

### 5.6 Dashboard

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/dashboard/stats` | Estatísticas (total por status, etc.) |

---

## 6. Frontend — Rotas (Next.js App Router)

```
/                           # Página institucional (hero, sobre, MCMV, como participar)
/faq                        # Perguntas frequentes
/contato                    # Formulário de contato
/cadastro                   # Formulário de pré-cadastro
/cadastro/sucesso           # Confirmação pós-cadastro
/admin/login                # Login do administrador
/admin/esqueci-senha        # Recuperação de senha
/admin/dashboard            # Dashboard com estatísticas
/admin/candidatos           # Lista de candidatos (com filtros)
/admin/candidatos/[id]      # Detalhes do candidato
/admin/conteudo             # Gerenciamento de conteúdo institucional
```

---

## 7. Fluxo de Dados — Upload de Documentos

```
[Candidato] → Next.js App → RHF + Zod (validação)
    ↓
[NestJS API] → Use Case (valida regras de negócio)
    ↓
[Infrastructure] → Prisma (persiste Candidato) + Supabase Storage (upload arquivos)
    ↓
[Retorno] → Confirmação na tela + E-mail de confirmação (opcional)
```

## 8. Autenticação (JWT)

- Login retorna access token (curta duração) + refresh token
- Guardas no frontend protegem rotas `/admin/*`
- Guards no backend (NestJS Guards) protegem endpoints administrativos
- Timeout de sessão configurável (RF029)

## 9. Armazenamento de Documentos (Supabase Storage)

- Bucket: `documentos-candidatos`
- Estrutura de pastas: `{candidatoId}/{tipoDocumento}-{timestamp}.{ext}`
- Acesso restrito: apenas o servidor (Service Role) tem permissão de escrita/leitura
- Links temporários (Signed URLs) para visualização no painel admin

## 10. Validações (Zod — Compartilhadas)

Esquemas de validação serão definidos como pacote compartilhado ou duplicados (frontend + backend) para:

- CPF (validação de dígitos)
- Idade mínima (18 anos)
- Renda familiar (faixas MCMV)
- E-mail
- Telefone
- Upload de documentos (tamanho, formato)
- Duplicidade de CPF (lado servidor)

## 11. Segurança

- HTTPS obrigatório (RNF008)
- Hash de senha com argon2id (RNF009)
- Proteção contra XSS, CSRF, SQL Injection (RNF010)
- Acesso restrito a documentos (RNF011)
- Conformidade LGPD (RNF012):
  - Política de privacidade e termos de uso no site
  - Direito de exclusão de dados (RN014)
  - Período de retenção definido (RN015)
- Rate limiting nos endpoints públicos (cadastro, login)
