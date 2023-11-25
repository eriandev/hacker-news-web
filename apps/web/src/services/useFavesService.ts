import type { News } from '@/types/api'

type GetAll = () => Promise<News[]>
type Add = (fave: News) => Promise<News[]>
type Remove = (id: string) => Promise<News[]>
interface UseFavesServiceReturn {
  add: Add
  remove: Remove
  getAll: GetAll
}

export function useFavesService (): UseFavesServiceReturn {
  const STORAGED_FAVES_KEY = '@storaged_faves'

  const getAll: GetAll = async () => {
    const storagedFaves = localStorage.getItem(STORAGED_FAVES_KEY)
    return typeof storagedFaves === 'string' ? JSON.parse(storagedFaves) : []
  }

  const add: Add = async (fave) => {
    const storagedFaves = await getAll()
    const isAlreadyInFaves = storagedFaves.findIndex(({ id }) => id === fave.id) !== -1
    if (isAlreadyInFaves) return storagedFaves

    const newFaves = [...storagedFaves, fave]
    localStorage.setItem(STORAGED_FAVES_KEY, JSON.stringify(newFaves))
    return newFaves
  }

  const remove: Remove = async (id) => {
    const storagedFaves = await getAll()
    const newFaves = storagedFaves.filter(fave => fave.id !== id)
    localStorage.setItem(STORAGED_FAVES_KEY, JSON.stringify(newFaves))
    return newFaves
  }

  return {
    add,
    remove,
    getAll
  }
}
