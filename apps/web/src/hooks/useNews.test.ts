import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook, waitFor } from '@testing-library/react/pure'

import { haveSameElements } from '@/utils/validation'
import { mockNewsList } from '__mocks__/news'
import { useNews } from './useNews'

vi.mock('@/repositories', async () => {
  const originalModule = await vi.importActual<Record<string, any>>('@/repositories')

  return {
    ...originalModule,
    useNewsRepository: vi.fn().mockReturnValue({
      getNews: vi.fn().mockReturnValue(Promise.resolve(mockNewsList))
    })
  }
})

describe('useNews hook', () => {
  afterEach(() => {
    cleanup()
  })

  global.fetch = vi.fn().mockReturnValue(Promise.resolve())

  it('should get new news when start the page', async () => {
    const { useNewsRepository } = await import('@/repositories')
    const { getNews } = useNewsRepository()

    const { result } = renderHook(() => useNews())

    await waitFor(() => {
      expect(getNews).toHaveBeenCalledWith({ category: null, page: 0 })

      const expectedIds = mockNewsList.map(mockCard => mockCard.id)
      const receivedIds = result.current.cards.map(card => card.id)
      const haveSameIds = haveSameElements(expectedIds, receivedIds)

      expect(haveSameIds).toBe(true)
    })
  })

  it('should increase the page number in each call', async () => {
    const { useNewsRepository } = await import('@/repositories')
    const { getNews } = useNewsRepository()

    const { result } = renderHook(() => useNews())

    await waitFor(() => {
      expect(getNews).toHaveBeenCalledWith({ category: null, page: 0 })
      expect(result.current.cards).toHaveLength(mockNewsList.length * 1)
    })

    act(() => { result.current.getMoreNews({ category: null }) })

    await waitFor(() => {
      expect(getNews).toHaveBeenCalledWith({ category: null, page: 1 })
      expect(result.current.cards).toHaveLength(mockNewsList.length * 2)
    })

    act(() => { result.current.getMoreNews({ category: null }) })

    await waitFor(() => {
      expect(getNews).toHaveBeenCalledWith({ category: null, page: 2 })
      expect(result.current.cards).toHaveLength(mockNewsList.length * 3)
    })
  })
})
