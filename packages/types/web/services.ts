import type { News } from '../api'

export type Get = () => string | null
export type Update = (category: string | null) => void
export type UseCategoryService = () => {
  get: Get
  update: Update
}

export type GetAll = () => Promise<News[]>
export type Add = (fave: News) => Promise<News[]>
export type Remove = (id: string) => Promise<News[]>
export type UseFavesService = () => {
  add: Add
  remove: Remove
  getAll: GetAll
}

export type GetBy = (params: { category: string | null, page: number }) => Promise<News[]>
export type UseNewsService = () => {
  getBy: GetBy
}

