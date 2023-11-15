import { useEffect, useState } from 'react'

import { useFavesRepository, useNewsRepository } from '@/repositories'
import type { News } from '@/types/api'

type GetFavesNews = () => void
type AddsNewsToFave = (fave: News) => void
type RemovesNewsFaveById = (id: string) => void
type ChangeSegmentValue = (value: string) => void
type GetMoreNews = (opts: { category: string | null, page?: number }) => void
interface UseNewsLogicReturn {
  cards: News[]
  loading: boolean
  isEmpty: boolean
  getMoreNews: GetMoreNews
  addsNewsToFave: AddsNewsToFave
  changeSegmentValue: ChangeSegmentValue
  removesNewsFaveById: RemovesNewsFaveById
}

export function useNewsLogic (): UseNewsLogicReturn {
  const TOTAL_PAGES = 50
  const [cards, setCards] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isFaveSegment, setIsFaveSegment] = useState<boolean>(false)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)

  const newsRepository = useNewsRepository()
  const favesRepository = useFavesRepository()

  useEffect(() => { getMoreNews({ category: null, page: 0 }) }, [])
  useEffect(() => {
    const triggerAction = (): void => {
      const { body } = document
      const limit = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight)
      const scrolled = window.scrollY + window.innerHeight
      const isOnBottom = (limit - 200) <= scrolled

      if (!loading && isOnBottom) getMoreNews({ category: currentCategory })
    }

    window.addEventListener('scroll', triggerAction)
    return () => { window.removeEventListener('scroll', triggerAction) }
  }, [loading, currentCategory])

  const getMoreNews: GetMoreNews = ({ category, page }) => {
    if (currentCategory !== category) setCurrentPage(0)
    setCurrentCategory(category)

    if (currentPage === TOTAL_PAGES) return
    setIsEmpty(false)

    setLoading(true)
    newsRepository
      .getNews({ category, page: page ?? currentPage })
      .then(news => { setCards(prevNews => [...prevNews, ...news]) })
      .catch((error) => { console.error(error) })
      .finally(() => {
        setCurrentPage(prevPage => prevPage + 1)
        setLoading(false)
      })
  }

  const changeSegmentValue: ChangeSegmentValue = (value) => {
    setIsFaveSegment(value === 'faves')
    if (value === 'faves') getFavesNews()
    else {
      setCards([])
      setCurrentPage(0)
      getMoreNews({ category: null, page: 0 })
    }
  }

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
        if (isFaveSegment) setCards(favesNews)
      })
      .catch((error) => { console.error(error) })
      .finally(() => {
        setIsEmpty(false)
      })
  }

  const removesNewsFaveById: RemovesNewsFaveById = (id) => {
    favesRepository
      .removeFave(id)
      .then(favesNotRemoved => {
        if (isFaveSegment) {
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
    getMoreNews,
    addsNewsToFave,
    changeSegmentValue,
    removesNewsFaveById
  }
}
