import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook, waitFor } from '@testing-library/react/pure'

import { mockAnotherNews, mockNewsList } from '__mocks__/news'
import { haveSameElements } from '@/utils/validation'
import { useFavesService } from './useFavesService'

describe('useFavesService hook', () => {
  afterEach(() => {
    cleanup()
    localStorage.clear()
    getItemSpy.mockClear()
    setItemSpy.mockClear()
  })

  const STORAGED_FAVES_KEY = '@storaged_faves'
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem')
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

  it('should get all faves news correctly', async () => {
    const { result } = renderHook(() => useFavesService())
    getItemSpy.mockReturnValue(JSON.stringify(mockNewsList))

    act(() => { void result.current.getAll() })

    await waitFor(async () => {
      expect(getItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY)
      expect(await result.current.getAll()).toEqual(mockNewsList)
    })
  })

  it('should add one fave news correctly', async () => {
    const { result } = renderHook(() => useFavesService())
    getItemSpy.mockReturnValue(JSON.stringify(mockNewsList))

    act(() => { void result.current.add(mockAnotherNews) })

    await waitFor(async () => {
      const newsFaveWithOneMore = [...mockNewsList, mockAnotherNews]

      expect(getItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY)
      expect(setItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY, JSON.stringify(newsFaveWithOneMore))

      const addResult = await result.current.add(mockAnotherNews)
      const receivedIds = addResult.map(card => card.id)
      const expectedIds = newsFaveWithOneMore.map(mockCard => mockCard.id)
      const haveSameIds = haveSameElements(expectedIds, receivedIds)

      expect(haveSameIds).toBe(true)
    })
  })

  it('should remove one fave news correctly', async () => {
    const { result } = renderHook(() => useFavesService())
    getItemSpy.mockReturnValue(JSON.stringify(mockNewsList))

    act(() => { void result.current.remove('5') })

    await waitFor(async () => {
      const newsFaveWithOneLess = mockNewsList.slice(0, 4)

      expect(getItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY)
      expect(setItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY, JSON.stringify(newsFaveWithOneLess))

      const removeResult = await result.current.remove('5')
      const receivedIds = removeResult.map(card => card.id)
      const expectedIds = newsFaveWithOneLess.map(mockCard => mockCard.id)
      const haveSameIds = haveSameElements(expectedIds, receivedIds)

      expect(haveSameIds).toBe(true)
    })
  })
})
