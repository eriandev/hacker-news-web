import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, renderHook } from '@testing-library/react/pure'

import { useCategoryRepository } from './useCategoryRepository'

describe('useCategoryRepository hook', () => {
  afterEach(() => {
    cleanup()
    localStorage.clear()
    setItemSpy.mockClear()
  })

  const STORAGED_CATEGORY_KEY = '@storaged_category'
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')
  const removeItemSpy = vi.spyOn(Storage.prototype, 'removeItem')

  it('should update the category news correctly', async () => {
    const { result } = renderHook(() => useCategoryRepository())

    act(() => { result.current.updateCategory('svelte') })

    expect(setItemSpy).toHaveBeenCalledWith(STORAGED_CATEGORY_KEY, 'svelte')
  })

  it('should remove the storage when category is not a string', async () => {
    const { result } = renderHook(() => useCategoryRepository())

    act(() => { result.current.updateCategory(null) })

    expect(removeItemSpy).toHaveBeenCalledWith(STORAGED_CATEGORY_KEY)
  })
})
