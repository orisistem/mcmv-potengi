import { useQuery } from '@tanstack/react-query'
import { InstitutionalHttpRepository } from '../../infrastructure/repositories/institutional-http.repository'

const repository = new InstitutionalHttpRepository()

export function useContentBySlug(slug: string) {
  return useQuery({
    queryKey: ['content', slug],
    queryFn: () => repository.getBySlug(slug),
    enabled: !!slug,
  })
}

export function useFaqItems() {
  return useQuery({
    queryKey: ['faq'],
    queryFn: () => repository.getFaqItems(),
  })
}
