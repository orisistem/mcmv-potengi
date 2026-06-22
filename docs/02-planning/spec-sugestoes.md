# Sugestões para Refinamento da Spec

## 1. Faixas MCMV (RN004)

As regras de negócio mencionam "faixas do Programa MCMV" sem definir os valores. É necessário documentar os limites de renda vigentes para cada faixa conforme legislação atual.

## 2. Serviço de E-mail

Funcionalidades dependentes de e-mail:
- **RF015** — E-mail de confirmação para o candidato após pré-cadastro
- **RF025** — Envio de e-mail/notificação para candidatos pelo painel admin
- **RF028** — Recuperação de senha do administrador

Sugestão: definir um provedor (SendGrid, AWS SES, Resend, Mailgun, etc.) e documentar a estratégia de filas para envio assíncrono.

## 3. Conteúdo Institucional (RF027)

O CRUD de conteúdo precisa de maior especificação:
- Quais seções são editáveis? (hero, sobre o residencial, MCMV Cidades, como participar, FAQ, documentação necessária?)
- Cada seção é um registro separado no banco ou um bloco JSON único?
- O conteúdo tem formatação (rich text / Markdown / HTML)?

## 4. Formato de Resposta da API

Definir um envelope padrão para todas as respostas da API REST:

```json
// Sucesso
{
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}

// Erro
{
  "error": {
    "code": "CPF_DUPLICADO",
    "message": "Já existe um cadastro com este CPF",
    "details": { ... }
  }
}
```

## 5. Paginação

Estratégia a definir para listagem de candidatos (`GET /api/candidates`):
- **Cursor-based** vs **page/limit**
- Tamanho de página default (sugestão: 20)
- Tamanho máximo por página (sugestão: 100)

## 6. Rate Limiting

Definir limites concretos de requisição:
- Cadastro público: 5 requisições/minuto por IP
- Login: 10 requisições/minuto por IP
- Rotas públicas (GET): 100 requisições/minuto por IP
- Rotas admin: 300 requisições/minuto por usuário

## 7. Política de Retenção LGPD (RN015)

Definir prazos concretos:
- Por quanto tempo os dados dos candidatos são mantidos após o processo seletivo?
- Qual o fluxo para exclusão de dados mediante solicitação do titular (RN014)?
- Há necessidade de anonimização dos dados após determinado período?

## 8. Estratégia de Testes

| Tipo | Ferramenta | Escopo |
|------|------------|--------|
| Unitários | Jest (Vitest no front) | Use cases, entidades, validações |
| Integração | Supertest + banco de testes | Controllers, repositórios |
| E2E | Playwright / Cypress | Fluxos completos (cadastro → admin) |

## 9. CI/CD

- Pipeline de build, lint e testes a cada PR
- Deploy automático para staging ao merge na `main` (ou branch específica)
- Estratégia de deploy: Vercel (frontend) + Railway / Render / Cloud Run (backend)
- Provisionamento da infraestrutura via Terraform (já existe `infrastructure/`)
