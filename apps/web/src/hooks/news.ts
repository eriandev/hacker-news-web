import { useEffect, useState } from 'react'

import { API_URL } from '@/utils/consts'
import { getRelativeTimeFromNow } from '@/utils/time'
import type { MlCardProps } from 'atomic/molecules/ml-card'
import type { APINewsResponse } from '@/types/api'

interface UseNewsServiceReturn {
  loading: boolean
  cards: MlCardProps[]
  getMoreNewsByCategory: GetMoreNewsByCategory
}
type GetNews = (params: { category: string | null }) => void
type GetMoreNewsByCategory = (category: string | null) => void

export function useNewsService (): UseNewsServiceReturn {
  const TOTAL_PAGES = 50
  const [cards, setCards] = useState<MlCardProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)

  useEffect(() => { getNews({ category: null }) }, [])
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

  const getNews: GetNews = (category) => {
    const isOnLastPage = currentPage === TOTAL_PAGES

    setLoading(true)
    if (typeof API_URL !== 'string' || isOnLastPage) return []

    const newsApiUrl = new URL(API_URL)
    if (typeof category === 'string') newsApiUrl.searchParams.append('category', category)
    newsApiUrl.searchParams.append('page', currentPage.toString())

    fetch(newsApiUrl)
      .then(response => {
        response.json()
          .then(({ hits }: APINewsResponse) => {
            const news = hits.map(hit => ({
              id: hit.objectID.toString(),
              author: hit.author,
              link: hit.story_url,
              storyTitle: hit.story_title ?? '[No title]',
              createdAt: getRelativeTimeFromNow(hit.created_at_i)
            }))

            setCards(prevNews => [...prevNews, ...news])
          })
          .catch((error) => { console.error(error) })
      })
      .catch((error) => { console.error(error) })
      .finally(() => {
        setCurrentPage(prevPage => prevPage + 1)
        setLoading(false)
      })
  }

  const getMoreNewsByCategory: GetMoreNewsByCategory = (category) => {
    if (currentCategory !== category) setCurrentPage(0)
    setCurrentCategory(category)
    getNews({ category })
  }

  return { cards, loading, getMoreNewsByCategory }
}
