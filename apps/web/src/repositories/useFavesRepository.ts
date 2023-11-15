import type { News } from '@/types/api'

type GetAllFaves = () => Promise<News[]>
type AddFave = (fave: News) => Promise<News[]>
type RemoveFave = (id: string) => Promise<News[]>
interface UseFavesRepositoryReturn {
  addFave: AddFave
  removeFave: RemoveFave
  getAllFaves: GetAllFaves
}

export function useFavesRepository (): UseFavesRepositoryReturn {
  const STORAGED_FAVES_KEY = '@storaged_faves'

  const getAllFaves: GetAllFaves = async () => {
    const storagedFaves = localStorage.getItem(STORAGED_FAVES_KEY)
    return typeof storagedFaves === 'string' ? JSON.parse(storagedFaves) : []
  }

  const addFave: AddFave = async (fave) => {
    const storagedFaves = await getAllFaves()
    const newFaves = [...storagedFaves, fave]
    localStorage.setItem(STORAGED_FAVES_KEY, JSON.stringify(newFaves))
    return newFaves
  }

  const removeFave: RemoveFave = async (id) => {
    const storagedFaves = await getAllFaves()
    const newFaves = storagedFaves.filter(fave => fave.id !== id)
    localStorage.setItem(STORAGED_FAVES_KEY, JSON.stringify(newFaves))
    return newFaves
  }

  return {
    addFave,
    removeFave,
    getAllFaves
  }
}
