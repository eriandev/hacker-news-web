import { useEffect, useState } from 'react'

import { useNewsRepository } from '@/repositories'
import type { News } from '@/types/api'

type GetMoreNews = (opts: { category: string | null, page?: number }) => void
interface UseNewsLogicReturn {
  cards: News[]
  loading: boolean
  isEmpty: boolean
  getMoreNews: GetMoreNews
}

export function useNewsLogic (): UseNewsLogicReturn {
  const TOTAL_PAGES = 50
  const [cards, setCards] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)

  const newsRepository = useNewsRepository()

  useEffect(() => { getMoreNews({ category: null, page: 0 }) }, [])
  useEffect(() => {
    const triggerAction = (): void => {
      const { body } = document
      const limit = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight)
      const scrolled = window.scrollY + window.innerHeight
      const isOnBottom = (limit - 200) <= scrolled

      if (!loading && isOnBottom) getMoreNews({ category: currentCategory })
    }

    window.addEventListener('scroll', triggerAction)
    return () => { window.removeEventListener('scroll', triggerAction) }
  }, [loading, currentCategory])

  const getMoreNews: GetMoreNews = ({ category, page }) => {
    if (currentCategory !== category) setCurrentPage(0)
    setCurrentCategory(category)

    if (currentPage === TOTAL_PAGES) return
    setIsEmpty(false)

    setLoading(true)
    newsRepository
      .getNews({ category, page: page ?? currentPage })
      .then(news => { setCards(prevNews => [...prevNews, ...news]) })
      .catch((error) => { console.error(error) })
      .finally(() => {
        setCurrentPage(prevPage => prevPage + 1)
        setLoading(false)
      })
  }

  return {
    cards,
    loading,
    isEmpty,
    getMoreNews
  }
}
