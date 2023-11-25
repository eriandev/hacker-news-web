import { useEffect, useState } from 'react'

import { useFavesRepository } from '@/repositories'
import type { News } from '@/types/api'

type GetFavesNews = () => void
type AddsNewsToFave = (fave: News) => void
type RemovesNewsFaveById = (id: string) => void
interface UseNewsReturn {
  cards: News[]
  isEmpty: boolean
  isLoading: boolean
  addsNewsToFave: AddsNewsToFave
  removesNewsFaveById: RemovesNewsFaveById
}

export function useFaves ({ needLoadFaves }: { needLoadFaves: boolean }): UseNewsReturn {
  const [cards, setCards] = useState<News[]>([])
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { addFave, getAllFaves, removeFave } = useFavesRepository()

  useEffect(() => { if (needLoadFaves) getFavesNews() }, [])

  const getFavesNews: GetFavesNews = () => {
    setIsLoading(true)

    getAllFaves()
      .then(favesNews => {
        setCards(favesNews)
        if (favesNews.length < 1) setIsEmpty(true)
      })
      .catch((error) => { console.error(error) })
      .finally(() => { setIsLoading(false) })
  }

  const addsNewsToFave: AddsNewsToFave = (fave) => {
    addFave(fave)
      .then(favesNews => {
        if (needLoadFaves) {
          setIsEmpty(false)
          setCards(favesNews)
        }
      })
      .catch((error) => { console.error(error) })
  }

  const removesNewsFaveById: RemovesNewsFaveById = (id) => {
    removeFave(id)
      .then(favesNotRemoved => {
        if (needLoadFaves) {
          setCards(favesNotRemoved)
          if (favesNotRemoved.length < 1) setIsEmpty(true)
        }
      })
      .catch((error) => { console.error(error) })
  }

  return {
    cards,
    isEmpty,
    isLoading,
    addsNewsToFave,
    removesNewsFaveById
  }
}
