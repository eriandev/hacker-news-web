import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook, waitFor } from '@testing-library/react/pure'

import { mockAnotherNews, mockNewsList } from '__mocks__/news'
import { useFaves } from './useFaves'

vi.mock('@/repositories', async () => {
  const originalModule = await vi.importActual<Record<string, any>>('@/repositories')

  return {
    ...originalModule,
    useFavesRepository: vi.fn().mockReturnValue({
      removesNewsFaveById: vi.fn().mockReturnValue(Promise.resolve()),
      getAllFaves: vi.fn().mockReturnValue(Promise.resolve(mockNewsList)),
      removeFave: vi.fn().mockReturnValue(Promise.resolve(mockNewsList.slice(0, 4))),
      addFave: vi.fn().mockReturnValue(Promise.resolve([...mockNewsList, mockAnotherNews]))
    })
  }
})

describe('useFaves hook', () => {
  afterEach(() => {
    cleanup()
  })

  it('should add news to faves correctly', async () => {
    const { useFavesRepository } = await import('@/repositories')
    const { addFave, getAllFaves } = useFavesRepository()

    const { result } = renderHook(() => useFaves({ needLoadFaves: true }))

    act(() => { result.current.addsNewsToFave(mockAnotherNews) })

    await waitFor(() => {
      expect(getAllFaves).toBeCalled()
      expect(result.current.isEmpty).toBe(false)
      expect(addFave).toHaveBeenCalledWith(mockAnotherNews)
      expect(result.current.cards).toStrictEqual([...mockNewsList, mockAnotherNews])
    })
  })

  it('should remove news to faves correctly', async () => {
    const { useFavesRepository } = await import('@/repositories')
    const { removeFave, getAllFaves } = useFavesRepository()

    const { result } = renderHook(() => useFaves({ needLoadFaves: true }))

    act(() => { result.current.removesNewsFaveById('5') })

    await waitFor(() => {
      expect(getAllFaves).toBeCalled()
      expect(result.current.isEmpty).toBe(false)
      expect(removeFave).toHaveBeenCalledWith('5')
      expect(result.current.cards).toEqual(mockNewsList.slice(0, 4))
    })
  })
})
