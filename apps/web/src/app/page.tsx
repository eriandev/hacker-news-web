'use client'
import { useFaves, useNews } from '@/hooks'
import { TmMainLayout } from 'atomic/templates'
import type { Component } from 'types/global'

export default function Page (): Component {
  const { cards, isLoading, selectedCategory, getMoreNews } = useNews()
  const { addsNewsToFave, removesNewsFaveById } = useFaves({ needLoadFaves: false })

  return <TmMainLayout
    cards={cards}
    isLoadingCards={isLoading}
    optionSelected={selectedCategory}
    headerImgSrc='/images/hacker-news.png'
    onAddFaveCard={addsNewsToFave}
    onChangeCategory={getMoreNews}
    onDeleteFaveCard={removesNewsFaveById}
  />
}
