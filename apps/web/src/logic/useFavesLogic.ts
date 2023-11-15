import { useEffect, useState } from 'react'

import { useFavesRepository } from '@/repositories'
import type { News } from '@/types/api'

type GetFavesNews = () => void
type AddsNewsToFave = (fave: News) => void
type RemovesNewsFaveById = (id: string) => void
interface UseNewsLogicReturn {
  cards: News[]
  loading: boolean
  isEmpty: boolean
  addsNewsToFave: AddsNewsToFave
  removesNewsFaveById: RemovesNewsFaveById
}

export function useFavesLogic ({ loadFaves }: { loadFaves: boolean }): UseNewsLogicReturn {
  const [cards, setCards] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  const favesRepository = useFavesRepository()

  useEffect(() => { if (loadFaves) getFavesNews() }, [])

  const getFavesNews: GetFavesNews = () => {
    setLoading(true)

    favesRepository
      .getAllFaves()
      .then(favesNews => {
        setCards(favesNews)
        if (favesNews.length < 1) setIsEmpty(true)
      })
      .catch((error) => { console.error(error) })
      .finally(() => { setLoading(false) })
  }

  const addsNewsToFave: AddsNewsToFave = (fave) => {
    favesRepository
      .addFave(fave)
      .then(favesNews => {
        if (loadFaves) {
          setIsEmpty(false)
          setCards(favesNews)
        }
      })
      .catch((error) => { console.error(error) })
  }

  const removesNewsFaveById: RemovesNewsFaveById = (id) => {
    favesRepository
      .removeFave(id)
      .then(favesNotRemoved => {
        if (loadFaves) {
          setCards(favesNotRemoved)
          if (favesNotRemoved.length < 1) setIsEmpty(true)
        }
      })
      .catch((error) => { console.error(error) })
  }

  return {
    cards,
    loading,
    isEmpty,
    addsNewsToFave,
    removesNewsFaveById
  }
}
