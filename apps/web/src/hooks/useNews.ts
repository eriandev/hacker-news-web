import { useEffect, useState } from 'react'

import { useCategoryService, useNewsService } from '@/services'
import type { News } from '@/types/api'

type GetMoreNews = (opts: { category: string | null }) => void
interface UseNewsReturn {
  cards: News[]
  isLoading: boolean
  selectedCategory: string | null
  getMoreNews: GetMoreNews
}

export function useNews (): UseNewsReturn {
  const TOTAL_PAGES = 50
  const [cards, setCards] = useState<News[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const newsService = useNewsService()
  const categoryService = useCategoryService()

  useEffect(() => {
    const category = categoryService.get()
    setSelectedCategory(category)
    getMoreNews({ category })
  }, [])

  useEffect(() => {
    const triggerAction = (): void => {
      const { body } = document
      const limit = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight)
      const scrolled = window.scrollY + window.innerHeight
      const isOnBottom = (limit - 100) <= scrolled

      if (!isLoading && isOnBottom) getMoreNews({ category: categoryService.get() })
    }

    window.addEventListener('scroll', triggerAction)
    return () => { window.removeEventListener('scroll', triggerAction) }
  }, [isLoading])

  const getMoreNews: GetMoreNews = ({ category }) => {
    const isAnotherCategory = selectedCategory !== category
    const page = isAnotherCategory ? 0 : currentPage

    setCurrentPage(page)
    setSelectedCategory(category)
    categoryService.update(category)

    if (isAnotherCategory) setCards([])
    if (currentPage === TOTAL_PAGES) return

    setIsLoading(true)
    newsService
      .getBy({ category, page })
      .then(news => { setCards(prevNews => [...prevNews, ...news]) })
      .catch((error) => { console.error(error) })
      .finally(() => {
        setCurrentPage(prevPage => prevPage + 1)
        setIsLoading(false)
      })
  }

  return {
    cards,
    isLoading,
    selectedCategory,
    getMoreNews
  }
}
