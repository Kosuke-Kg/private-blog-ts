export interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch?: Eyecatch
  category?: Category
}

export interface Eyecatch {
  url: string
  height: number
  width: number
}

export interface Category {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}
