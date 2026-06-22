# Especificações Técnicas

## Arquitetura Sugerida

### Frontend
- **Tecnologia:** HTML5, CSS3, TypeScript, React + Vite
- **Responsividade:** Layout adaptável (mobile-first)
- **Bibliotecas:** A definir conforme framework escolhido

### Backend
- **API RESTful** ou GraphQL
- **Linguagem:** Node.js, Python (Django/FastAPI) ou PHP (Laravel) — a definir
- **Autenticação:** JWT (JSON Web Token) para sessões administrativas

### Banco de Dados
- **SGBD:** PostgreSQL ou MySQL
- **Armazenamento de Documentos:** Armazenamento em disco com path no banco ou serviço cloud (S3, Cloudflare R2)

### Hospedagem
- A definir (cloud computing: AWS, Google Cloud, Azure, ou serviços nacionais)

## Estrutura de Dados (Entidades Principais)

### Candidato
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único |
| nome_completo | VARCHAR(255) | Nome completo do candidato |
| cpf | VARCHAR(14) | CPF com formatação |
| rg | VARCHAR(20) | Número do RG |
| data_nascimento | DATE | Data de nascimento |
| estado_civil | VARCHAR(30) | Solteiro, casado, divorciado, viúvo |
| nome_conjuge | VARCHAR(255) | Nome do cônjuge (se aplicável) |
| cpf_conjuge | VARCHAR(14) | CPF do cônjuge (se aplicável) |
| telefone | VARCHAR(20) | Telefone de contato |
| email | VARCHAR(255) | E-mail para contato |
| endereco_completo | TEXT | Endereço residencial completo (logradouro, número, bairro, cidade, CEP) |
| renda_familiar | DECIMAL(10,2) | Renda familiar mensal |
| numero_dependentes | INTEGER | Número de dependentes |
| composicao_familiar | JSON/TEXT | Detalhamento dos membros da família |
| profissao | VARCHAR(150) | Profissão do candidato |
| possui_imovel_proprio | BOOLEAN | Se já possui imóvel próprio |
| naturalidade | VARCHAR(100) | Cidade/estado de nascimento |
| nacionalidade | VARCHAR(100) | Nacionalidade |
| status | VARCHAR(30) | Status atual do candidato |
| created_at | TIMESTAMP | Data do cadastro |
| updated_at | TIMESTAMP | Última atualização |

### Documento
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único |
| candidato_id | UUID (FK) | Referência ao candidato |
| tipo_documento | VARCHAR(50) | Tipo (RG, CPF, comprovante residência, etc.) |
| arquivo_path | VARCHAR(500) | Caminho ou URL do arquivo |
| uploaded_at | TIMESTAMP | Data do upload |

### Usuario (Administrador)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único |
| nome | VARCHAR(255) | Nome do administrador |
| email | VARCHAR(255) | E-mail de login |
| senha_hash | VARCHAR(255) | Hash da senha |
| created_at | TIMESTAMP | Data de criação |

### Log de Atividades
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Identificador único |
| usuario_id | UUID (FK) | Administrador que executou a ação |
| acao | VARCHAR(100) | Descrição da ação |
| entidade_tipo | VARCHAR(50) | Tipo de entidade afetada |
| entidade_id | UUID | ID da entidade afetada |
| detalhes | JSON/TEXT | Detalhes da alteração (valores antigo/novo) |
| created_at | TIMESTAMP | Data/hora da ação |

## Observações Finais
- Os campos e especificações acima poderão ser ajustados conforme necessidade identificada durante o desenvolvimento.
- A stack tecnológica definitiva será definida após validação com a equipe técnica.
