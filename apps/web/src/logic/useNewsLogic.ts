import { useEffect, useState } from 'react'

import { useFavesRepository, useNewsRepository } from '@/repositories'
import type { News } from '@/types/api'

type GetFavesNews = () => void
type AddsNewsToFave = (fave: News) => void
type RemovesNewsFaveById = (id: string) => void
type ChangeSegmentValue = (value: string) => void
type GetMoreNewsByCategory = (category: string | null) => void
interface UseNewsLogicReturn {
  cards: News[]
  loading: boolean
  addsNewsToFave: AddsNewsToFave
  changeSegmentValue: ChangeSegmentValue
  removesNewsFaveById: RemovesNewsFaveById
  getMoreNewsByCategory: GetMoreNewsByCategory
}

export function useNewsLogic (): UseNewsLogicReturn {
  const TOTAL_PAGES = 50
  const [cards, setCards] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isFaveSegment, setIsFaveSegment] = useState<boolean>(false)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)

  const newsRepository = useNewsRepository()
  const favesRepository = useFavesRepository()

  useEffect(() => { getMoreNewsByCategory(null) }, [])
  useEffect(() => {
    const triggerAction = (): void => {
      const { body } = document
      const limit = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight)
      const scrolled = window.scrollY + window.innerHeight
      const isOnBottom = (limit - 200) <= scrolled

      if (!loading && isOnBottom) getMoreNewsByCategory(currentCategory)
    }

    window.addEventListener('scroll', triggerAction)
    return () => { window.removeEventListener('scroll', triggerAction) }
  }, [loading, currentCategory])

  const getMoreNewsByCategory: GetMoreNewsByCategory = (category) => {
    if (currentCategory !== category) setCurrentPage(0)
    setCurrentCategory(category)

    if (currentPage === TOTAL_PAGES) return

    setLoading(true)
    newsRepository
      .getNews({ category, page: currentPage })
      .then(news => {
        setCards(prevNews => [...prevNews, ...news])
        console.log(news)
      })
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
      getMoreNewsByCategory(null)
    }
  }

  const getFavesNews: GetFavesNews = () => {
    setLoading(true)

    favesRepository
      .getAllFaves()
      .then(favesNews => { setCards(favesNews) })
      .catch((error) => { console.error(error) })
      .finally(() => { setLoading(false) })
  }

  const addsNewsToFave: AddsNewsToFave = (fave) => {
    setLoading(true)

    favesRepository
      .addFave(fave)
      .then(favesNews => {
        if (isFaveSegment) setCards(favesNews)
      })
      .catch((error) => { console.error(error) })
      .finally(() => { setLoading(false) })
  }

  const removesNewsFaveById: RemovesNewsFaveById = (id) => {
    setLoading(true)

    favesRepository
      .removeFave(id)
      .then(favesNotRemoved => {
        if (isFaveSegment) setCards(favesNotRemoved)
      })
      .catch((error) => { console.error(error) })
      .finally(() => { setLoading(false) })
  }

  return {
    cards,
    loading,
    addsNewsToFave,
    changeSegmentValue,
    removesNewsFaveById,
    getMoreNewsByCategory
  }
}
