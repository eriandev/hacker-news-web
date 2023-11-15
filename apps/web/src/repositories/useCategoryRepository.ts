type GetCategory = () => string | null
type UpdateCategory = (category: string | null) => void
interface UseCategoryRepositoryReturn {
  getCategory: GetCategory
  updateCategory: UpdateCategory
}

export function useCategoryRepository (): UseCategoryRepositoryReturn {
  const STORAGED_CATEGORY_KEY = '@storaged_category'

  const getCategory: GetCategory = () => {
    return localStorage.getItem(STORAGED_CATEGORY_KEY)
  }

  const updateCategory: UpdateCategory = (category) => {
    if (typeof category !== 'string') {
      localStorage.removeItem(STORAGED_CATEGORY_KEY)
      return
    }

    localStorage.setItem(STORAGED_CATEGORY_KEY, category)
  }

  return {
    getCategory,
    updateCategory
  }
}
