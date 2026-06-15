# Source Code (`src/`)

This directory contains the actual software. It is structured based on Clean Architecture to remain stack-agnostic.

## Structure

- **`core/`**: The business rules. Completely isolated from the outside world.
  - `entities/`: Enterprise business objects (Domain layer).
  - `use-cases/`: Application-specific logic orchestrating entities (Application layer).
  - `ports/`: Interfaces defining contracts for external interactions (e.g., repositories).
  - `dtos/`: Data Transfer Objects for requests and responses.
  - `exceptions/`: Custom business logic errors.
  - `event-handlers/`: Listeners for domain/application events.
- **`infrastructure/`**: Implementations of the ports. Connects to the real world.
  - `database/`: Database access (SQL, ORMs).
  - `external-services/`: Integrations with external APIs.
- **`presentation/`**: The delivery mechanism.
  - `controllers/`: Handles incoming requests (HTTP, etc.) and calls use cases.
  - `ui/`: User interfaces (if applicable).
- **`config/`**: Dependency injection, environment variables, and framework setup.
