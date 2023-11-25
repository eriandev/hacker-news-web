import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook, waitFor } from '@testing-library/react/pure'

import { mockNewsList } from '__mocks__/news'
import { mockAPIResponse } from '__mocks__/api'
import { useNewsService } from './useNewsService'

vi.mock('@/utils/consts', async () => {
  const originalConstsModule = await vi.importActual<Record<string, any>>('@/utils/consts')

  return {
    ...originalConstsModule,
    API_URL: 'https://newspage/api/v1'
  }
})

vi.mock('@/services', async () => {
  const originalModule = await vi.importActual<Record<string, any>>('@/services')

  return {
    ...originalModule,
    useFavesService: vi.fn().mockReturnValue({
      getAll: vi.fn().mockReturnValue(Promise.resolve(mockNewsList.slice(0, 1)))
    })
  }
})

describe('useNewsService hook', () => {
  afterEach(() => {
    cleanup()
  })

  it('should get API response and return normalized info', async () => {
    global.fetch = vi.fn().mockReturnValue(Promise.resolve({
      json: vi.fn().mockReturnValue(Promise.resolve(mockAPIResponse))
    }))

    const fetchSpy = vi.spyOn(global, 'fetch')
    const { result } = renderHook(() => useNewsService())

    act(() => { void result.current.getBy({ category: 'svelte', page: 0 }) })

    await waitFor(async () => {
      const NEWS_API_URL = new URL('https://newspage/api/v1/search_by_date')
      NEWS_API_URL.searchParams.append('query', 'svelte')
      NEWS_API_URL.searchParams.append('page', '0')

      expect(fetchSpy).toHaveBeenCalledWith(NEWS_API_URL)
      expect(await result.current.getBy({ category: null, page: 0 })).toEqual(mockNewsList)
    })
  })

  it('should get API response and return empty array', async () => {
    global.fetch = vi.fn().mockReturnValue(Promise.resolve({
      json: vi.fn().mockReturnValue(Promise.reject(new Error()))
    }))

    const fetchSpy = vi.spyOn(global, 'fetch')
    const { result } = renderHook(() => useNewsService())

    act(() => { void result.current.getBy({ category: null, page: 0 }) })

    await waitFor(async () => {
      const NEWS_API_URL = new URL('https://newspage/api/v1/search_by_date')
      NEWS_API_URL.searchParams.append('page', '0')

      expect(fetchSpy).toHaveBeenCalledWith(NEWS_API_URL)
      expect(await result.current.getBy({ category: null, page: 0 })).toEqual([])
    })
  })
})
