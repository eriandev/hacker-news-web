import type { GetBy, UseNewsService } from 'types/web/services'
import type { APINewsResponse } from 'types/api'

import { API_URL } from '@/utils/consts'
import { useFavesService } from '@/services'
import { getRelativeTimeFromNow } from '@/utils/time'

export const useNewsService: UseNewsService = () => {
  const favesService = useFavesService()

  const getBy: GetBy = async ({ category, page }) => {
    if (typeof API_URL !== 'string') return []

    const newsApiUrl = new URL(`${API_URL}/search_by_date`)
    if (typeof category === 'string') newsApiUrl.searchParams.append('query', category)
    newsApiUrl.searchParams.append('page', page.toString())

    try {
      const favesNews = await favesService.getAll()
      const response = await fetch(newsApiUrl)
      const { hits }: APINewsResponse = await response.json()

      return hits.map(hit => {
        const id = hit.objectID.toString()
        const createdAt = getRelativeTimeFromNow(hit.created_at_i)
        const isFave = favesNews.findIndex(fave => fave.id === id) !== -1

        return {
          id,
          isFave,
          createdAt,
          author: hit.author,
          link: hit.story_url,
          storyTitle: hit.story_title ?? '[No title]'
        }
      })
    } catch (error) {
      console.error(error)
      return []
    }
  }

  return { getBy }
}
