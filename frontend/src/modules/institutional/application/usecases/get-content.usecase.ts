import type { InstitutionalRepository } from '../../domain/ports/institutional-repository.port'

export class GetContentUseCase {
  private readonly repository: InstitutionalRepository

  constructor(repository: InstitutionalRepository) {
    this.repository = repository
  }

  async execute(slug: string) {
    return this.repository.getBySlug(slug)
  }
}

export class ListContentUseCase {
  private readonly repository: InstitutionalRepository

  constructor(repository: InstitutionalRepository) {
    this.repository = repository
  }

  async execute() {
    return this.repository.listAll()
  }
}
