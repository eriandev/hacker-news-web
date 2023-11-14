import { API_URL } from '@/utils/consts'
import { getRelativeTimeFromNow } from '@/utils/time'
import type { APINewsResponse, News } from '@/types/api'

interface UseNewsRepositoryReturn {
  getNews: GetNews
}
type GetNews = (params: { category: string | null, page: number }) => Promise<News[]>

export function useNewsRepository (): UseNewsRepositoryReturn {
  const getNews: GetNews = async ({ category, page }) => {
    if (typeof API_URL !== 'string') return []

    const newsApiUrl = new URL(API_URL)
    if (typeof category === 'string') newsApiUrl.searchParams.append('category', category)
    newsApiUrl.searchParams.append('page', page.toString())

    try {
      const response = await fetch(newsApiUrl)
      const { hits }: APINewsResponse = await response.json()

      return hits.map(hit => ({
        id: hit.objectID.toString(),
        author: hit.author,
        link: hit.story_url,
        storyTitle: hit.story_title ?? '[No title]',
        createdAt: getRelativeTimeFromNow(hit.created_at_i)
      }))
    } catch (error) {
      console.error(error)
      return []
    }
  }

  return { getNews }
}
