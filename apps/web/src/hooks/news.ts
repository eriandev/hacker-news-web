import { useEffect, useState } from 'react'

import { API_URL } from '@/utils/consts'
import { getRelativeTimeFromNow } from '@/utils/time'
import type { MlCardProps } from 'atomic/molecules/ml-card'
import type { APINewsResponse } from '@/types/api'

interface UseNewsServiceReturn {
  cards: MlCardProps[]
  loading: boolean
}
type GetNews = (params: { page: number }) => void

export function useNewsService (): UseNewsServiceReturn {
  const [cards, setCards] = useState<MlCardProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => { getNews({ page: 0 }) }, [])

  const getNews: GetNews = ({ page }) => {
    setLoading(true)
    if (typeof API_URL !== 'string') return []

    const newsAPIUrl = new URL(API_URL)
    newsAPIUrl.searchParams.append('page', page.toString())

    fetch(newsAPIUrl)
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

            setCards(news)
          })
          .catch((error) => { console.error(error) })
      })
      .catch((error) => { console.error(error) })
      .finally(() => { setLoading(false) })
  }

  return { cards, loading }
}
