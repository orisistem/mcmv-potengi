import type { ContentSection, FaqItem } from '../entities/content-section'

export interface InstitutionalRepository {
  getBySlug(slug: string): Promise<ContentSection | null>
  listAll(): Promise<ContentSection[]>
  getFaqItems(): Promise<FaqItem[]>
}
