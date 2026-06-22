export interface ContentSection {
  id: string
  slug: string
  title: string
  body: string
  updatedAt: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  order: number
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}
