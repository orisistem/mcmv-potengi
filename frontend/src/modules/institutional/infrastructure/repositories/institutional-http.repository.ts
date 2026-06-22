import httpClient from '@/shared/services/http-client'
import type { InstitutionalRepository } from '../../domain/ports/institutional-repository.port'
import type { ContentSection, FaqItem } from '../../domain/entities/content-section'

export class InstitutionalHttpRepository implements InstitutionalRepository {
  async getBySlug(slug: string): Promise<ContentSection | null> {
    try {
      const { data } = await httpClient.get(`/content/${slug}`)
      return data
    } catch {
      return null
    }
  }

  async listAll(): Promise<ContentSection[]> {
    const { data } = await httpClient.get('/content')
    return data
  }

  async getFaqItems(): Promise<FaqItem[]> {
    const { data } = await httpClient.get('/content/faq')
    return data
  }
}
