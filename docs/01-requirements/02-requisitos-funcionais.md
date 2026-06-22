# Requisitos Funcionais

## Módulo: Página Institucional (Público)

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RF001 | O site deve exibir uma página inicial com banner principal, logomarca e chamada para ação (CTA) de cadastro | Alta |
| RF002 | O site deve apresentar seção "Sobre o Residencial" com descrição do empreendimento, localização e diferenciais | Alta |
| RF003 | O site deve apresentar seção "Programa MCMV Cidades" explicando como funciona a modalidade e o benefício da doação do terreno | Alta |
| RF004 | O site deve apresentar seção "Como Participar" com o passo a passo do processo de seleção | Alta |
| RF005 | O site deve apresentar seção de perguntas frequentes (FAQ) sobre o empreendimento e o programa | Média |
| RF006 | O site deve apresentar seção de contato com formulário para dúvidas não relacionadas a cadastro | Média |
| RF007 | O site deve exibir informações sobre a documentação necessária para participar do processo seletivo | Alta |
| RF008 | O site deve exibir contador ou indicador de vagas disponíveis (quando aplicável) | Baixa |

## Módulo: Pré-Cadastro (Público)

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RF009 | O sistema deve permitir o pré-cadastro de pessoas interessadas nas unidades habitacionais | Alta |
| RF010 | O formulário de pré-cadastro deve coletar: nome completo, CPF, RG, data de nascimento, estado civil, nacionalidade, naturalidade, nome do cônjuge (se aplicável), CPF do cônjuge (se aplicável), telefone, e-mail, endereço completo, renda familiar mensal, número de dependentes, composição familiar, profissão, e se já possui imóvel próprio | Alta |
| RF011 | O formulário deve permitir upload de documentos digitalizados (RG, CPF, comprovante de residência, comprovante de renda, certidão de casamento/nascimento) | Alta |
| RF012 | O sistema deve validar o CPF informado | Alta |
| RF013 | O sistema deve validar a maioridade do candidato (idade mínima de 18 anos) | Média |
| RF014 | O sistema deve exibir mensagem de confirmação após cadastro bem-sucedido | Alta |
| RF015 | O sistema deve enviar e-mail de confirmação para o candidato após o pré-cadastro | Média |
| RF016 | O sistema deve impedir duplicidade de cadastro por CPF | Alta |

## Módulo: Painel Administrativo

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RF017 | O sistema deve possuir área administrativa com login seguro (e-mail e senha) | Alta |
| RF018 | O administrador deve poder visualizar lista completa de pré-cadastrados | Alta |
| RF019 | O administrador deve poder pesquisar e filtrar cadastros por nome, CPF, status, data, renda, faixa etária, bairro | Alta |
| RF020 | O administrador deve poder visualizar detalhes completos de cada cadastro | Alta |
| RF021 | O administrador deve poder baixar/visualizar documentos enviados por cada candidato | Alta |
| RF022 | O administrador deve poder alterar o status do candidato (pré-cadastrado, em análise, documentação pendente, aprovado, reprovado, convocado, contemplado, desistente) | Alta |
| RF023 | O sistema deve registrar data e hora de cada alteração de status, bem como o administrador responsável | Média |
| RF024 | O administrador deve poder exportar lista de cadastros em formato CSV ou Excel | Média |
| RF025 | O administrador deve poder enviar e-mail ou notificação para candidatos diretamente do painel | Baixa |
| RF026 | O sistema deve manter log de ações realizadas no painel administrativo | Média |
| RF027 | O administrador deve poder gerenciar (CRUD) as páginas de conteúdo institucional do site | Média |

## Módulo: Autenticação e Segurança

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RF028 | O sistema deve permitir recuperação de senha do administrador via e-mail | Alta |
| RF029 | O sistema deve encerrar sessão após período de inatividade (timeout configurável) | Média |
