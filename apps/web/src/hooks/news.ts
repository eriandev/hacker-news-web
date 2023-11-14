import { useEffect, useState } from 'react'

import { useNewsRepository } from '@/repositories'
import type { News } from '@/types/api'

interface UseNewsServiceReturn {
  cards: News[]
  loading: boolean
  getMoreNewsByCategory: GetMoreNewsByCategory
}
type GetMoreNewsByCategory = (category: string | null) => void

export function useNewsService (): UseNewsServiceReturn {
  const TOTAL_PAGES = 50
  const [cards, setCards] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)

  const newsRepository = useNewsRepository()

  useEffect(() => { getMoreNewsByCategory(null) }, [])
  useEffect(() => {
    const triggerAction = (): void => {
      const { body } = document
      const limit = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight)
      const scrolled = window.scrollY + window.innerHeight
      const isOnBottom = (limit - 200) <= scrolled

      if (!loading && isOnBottom) getMoreNewsByCategory(currentCategory)
    }

    window.addEventListener('scroll', triggerAction)
    return () => { window.removeEventListener('scroll', triggerAction) }
  }, [loading, currentCategory])

  const getMoreNewsByCategory: GetMoreNewsByCategory = (category) => {
    if (currentCategory !== category) setCurrentPage(0)
    setCurrentCategory(category)

    if (currentPage === TOTAL_PAGES) return

    setLoading(true)
    newsRepository
      .getNews({ category, page: currentPage })
      .then(news => { setCards(prevNews => [...prevNews, ...news]) })
      .catch((error) => { console.error(error) })
      .finally(() => {
        setCurrentPage(prevPage => prevPage + 1)
        setLoading(false)
      })
  }

  return { cards, loading, getMoreNewsByCategory }
}
