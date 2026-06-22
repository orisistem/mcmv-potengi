# Requisitos Não Funcionais

## Usabilidade

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RNF001 | O site deve ser responsivo, adaptando-se a dispositivos mobile, tablets e desktops | Alta |
| RNF002 | O site deve ser acessível seguindo as diretrizes WCAG 2.1 nível AA | Média |
| RNF003 | O tempo máximo de carregamento da página inicial deve ser inferior a 3 segundos em conexão banda larga | Alta |
| RNF004 | O formulário de cadastro deve ser intuitivo, com mensagens de erro claras e em português | Alta |

## Disponibilidade e Confiabilidade

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RNF005 | O site deve estar disponível 99,5% do tempo (exceto janelas de manutenção programada) | Alta |
| RNF006 | O sistema deve realizar backup automático dos dados cadastrais diariamente | Alta |
| RNF007 | O sistema deve suportar até 500 acessos simultâneos sem degradação significativa de performance | Média |

## Segurança

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RNF008 | As comunicações devem ser criptografadas via HTTPS (SSL/TLS) | Alta |
| RNF009 | As senhas dos administradores devem ser armazenadas com hash seguro (bcrypt ou similar) | Alta |
| RNF010 | O sistema deve ser protegido contra ataques comuns (XSS, CSRF, SQL Injection) | Alta |
| RNF011 | Os documentos enviados pelos candidatos devem ser armazenados de forma segura com acesso restrito | Alta |
| RNF012 | O sistema deve estar em conformidade com a LGPD (Lei Geral de Proteção de Dados Pessoais) | Alta |
| RNF013 | Deve haver política de privacidade e termos de uso acessíveis no site | Alta |

## Manutenibilidade

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RNF014 | O código deve seguir boas práticas e padrões de desenvolvimento definidos pela equipe | Média |
| RNF015 | A arquitetura deve permitir a fácil adição de novas funcionalidades | Média |
