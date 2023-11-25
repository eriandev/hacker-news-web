type Get = () => string | null
type Update = (category: string | null) => void
interface UseCategoryServiceReturn {
  get: Get
  update: Update
}

export function useCategoryService (): UseCategoryServiceReturn {
  const STORAGED_CATEGORY_KEY = '@storaged_category'

  const get: Get = () => {
    return localStorage.getItem(STORAGED_CATEGORY_KEY)
  }

  const update: Update = (category) => {
    if (typeof category !== 'string') {
      localStorage.removeItem(STORAGED_CATEGORY_KEY)
      return
    }

    localStorage.setItem(STORAGED_CATEGORY_KEY, category)
  }

  return {
    get,
    update
  }
}
