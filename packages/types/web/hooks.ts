import type { News } from '../api'

export type GetFavesNews = () => void
export type AddsNewsToFave = (fave: News) => void
export type RemovesNewsFaveById = (id: string) => void
export type UseFavesPros = { needLoadFaves: boolean }
export type UseFaves = (props: UseFavesPros) => {
  cards: News[]
  isEmpty: boolean
  isLoading: boolean
  addsNewsToFave: AddsNewsToFave
  removesNewsFaveById: RemovesNewsFaveById
}

export type GetMoreNews = (opts: { category: string | null }) => void
export type UseNews = () => {
  cards: News[]
  isLoading: boolean
  selectedCategory: string | null
  getMoreNews: GetMoreNews
}
