# Git Workflow & Standards

This project enforces strict Git conventions to maintain a clean and readable history.

## Conventional Commits

We use the [Conventional Commits](https://www.conventionalcommits.org/) specification. Every commit message must follow this format:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Allowed Types

The commit `type` must be one of the following:

- **feat**: A new feature for the user.
- **fix**: A bug fix for the user.
- **docs**: Changes to documentation only.
- **style**: Formatting changes that do not affect the code's meaning (white-space, missing semi-colons, etc).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing tests or correcting existing tests.
- **build**: Changes that affect the build system or external dependencies (example scopes: npm, docker).
- **ci**: Changes to CI configuration files and scripts.
- **chore**: Other changes that don't modify `src` or `test` files.
- **revert**: Reverts a previous commit.

### Example Commits

- `feat(auth): add login form validation`
- `fix(api): resolve memory leak in order fetching`
- `docs: update setup instructions in README`
- `refactor(shared): extract button component`

## Interactive CLI (Recomendado)

Para facilitar a aderência ao padrão, instalamos o **Commitizen**. Você não precisa lembrar de toda a sintaxe acima!

Em vez de usar os comandos padrão do Git, utilize os nossos scripts NPM na raiz do projeto:

### `npm run commit`

1. Adicione os arquivos que deseja commitar (`git add <arquivos>`).
2. Rode `npm run commit`.
3. Responda às perguntas interativas no seu terminal (use as setas do teclado para selecionar `feat`, `fix`, etc.).

### `npm run ship`

Faz tudo de uma vez. Ele roda `git add .`, chama o menu interativo do Commitizen e, logo após finalizar o commit com sucesso (e passar pelos testes), roda `git push` enviando tudo para o repositório remoto.
