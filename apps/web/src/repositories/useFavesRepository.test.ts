import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook, waitFor } from '@testing-library/react/pure'

import { mockAnotherNews, mockNewsList } from '__mocks__/news'
import { useFavesRepository } from './useFavesRepository'
import { haveSameElements } from '@/utils/validation'

describe('useFavesRepository hook', () => {
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
    const { result } = renderHook(() => useFavesRepository())
    getItemSpy.mockReturnValue(JSON.stringify(mockNewsList))

    act(() => { void result.current.getAllFaves() })

    await waitFor(async () => {
      expect(getItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY)
      expect(await result.current.getAllFaves()).toEqual(mockNewsList)
    })
  })

  it('should add one fave news correctly', async () => {
    const { result } = renderHook(() => useFavesRepository())
    getItemSpy.mockReturnValue(JSON.stringify(mockNewsList))

    act(() => { void result.current.addFave(mockAnotherNews) })

    await waitFor(async () => {
      const newsFaveWithOneMore = [...mockNewsList, mockAnotherNews]

      expect(getItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY)
      expect(setItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY, JSON.stringify(newsFaveWithOneMore))

      const addFaveResult = await result.current.addFave(mockAnotherNews)
      const receivedIds = addFaveResult.map(card => card.id)
      const expectedIds = newsFaveWithOneMore.map(mockCard => mockCard.id)
      const haveSameIds = haveSameElements(expectedIds, receivedIds)

      expect(haveSameIds).toBe(true)
    })
  })

  it('should remove one fave news correctly', async () => {
    const { result } = renderHook(() => useFavesRepository())
    getItemSpy.mockReturnValue(JSON.stringify(mockNewsList))

    act(() => { void result.current.removeFave('5') })

    await waitFor(async () => {
      const newsFaveWithOneLess = mockNewsList.slice(0, 4)

      expect(getItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY)
      expect(setItemSpy).toHaveBeenCalledWith(STORAGED_FAVES_KEY, JSON.stringify(newsFaveWithOneLess))

      const removeFaveResult = await result.current.removeFave('5')
      const receivedIds = removeFaveResult.map(card => card.id)
      const expectedIds = newsFaveWithOneLess.map(mockCard => mockCard.id)
      const haveSameIds = haveSameElements(expectedIds, receivedIds)

      expect(haveSameIds).toBe(true)
    })
  })
})
