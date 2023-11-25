import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook, waitFor } from '@testing-library/react/pure'

import { mockAnotherNews, mockNewsList } from '__mocks__/news'
import { useFaves } from './useFaves'

vi.mock('@/services', async () => {
  const originalModule = await vi.importActual<Record<string, any>>('@/services')

  return {
    ...originalModule,
    useFavesService: vi.fn().mockReturnValue({
      getAll: vi.fn().mockReturnValue(Promise.resolve(mockNewsList)),
      remove: vi.fn().mockReturnValue(Promise.resolve(mockNewsList.slice(0, 4))),
      add: vi.fn().mockReturnValue(Promise.resolve([...mockNewsList, mockAnotherNews]))
    })
  }
})

describe('useFaves hook', () => {
  afterEach(() => {
    cleanup()
  })

  it('should add news to faves correctly', async () => {
    const { useFavesService } = await import('@/services')
    const favesService = useFavesService()

    const { result } = renderHook(() => useFaves({ needLoadFaves: true }))

    act(() => { result.current.addsNewsToFave(mockAnotherNews) })

    await waitFor(() => {
      expect(favesService.getAll).toBeCalled()
      expect(result.current.isEmpty).toBe(false)
      expect(favesService.add).toHaveBeenCalledWith(mockAnotherNews)
      expect(result.current.cards).toStrictEqual([...mockNewsList, mockAnotherNews])
    })
  })

  it('should remove news to faves correctly', async () => {
    const { useFavesService } = await import('@/services')
    const favesService = useFavesService()

    const { result } = renderHook(() => useFaves({ needLoadFaves: true }))

    act(() => { result.current.removesNewsFaveById('5') })

    await waitFor(() => {
      expect(favesService.getAll).toBeCalled()
      expect(result.current.isEmpty).toBe(false)
      expect(favesService.remove).toHaveBeenCalledWith('5')
      expect(result.current.cards).toEqual(mockNewsList.slice(0, 4))
    })
  })
})
